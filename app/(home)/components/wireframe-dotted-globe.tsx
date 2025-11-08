"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import type { Feature, FeatureCollection, MultiPolygon, Polygon, Position } from "geojson"

interface RotatingEarthProps {
  width?: number
  height?: number
  className?: string
  interactive?: boolean
  scrollZoom?: boolean
  rotateSpeed?: number // degrees per tick
}

export default function RotatingEarth({
  width = 800,
  height = 600,
  className = "",
  interactive = true,
  scrollZoom = true,
  rotateSpeed = 0.5,
}: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return

  // Size globe to the hero container's height so it fills vertically
  const host = canvas.closest('[data-hero-root]') as HTMLElement | null
  const parentH = host ? host.clientHeight : window.innerHeight
  const size = Math.max(140, parentH)
    const radius = size / 2.05

    const dpr = window.devicePixelRatio || 1
  canvas.width = size * dpr
  canvas.height = size * dpr
  canvas.style.width = `${size}px`
  canvas.style.height = `${size}px`
    context.scale(dpr, dpr)

    // Create projection and path generator for Canvas
    const projection = d3
      .geoOrthographic()
      .scale(radius)
  .translate([size / 2, size / 2])
      .clipAngle(90)

    const path = d3.geoPath().projection(projection).context(context)

    const pointInPolygon = (point: [number, number], polygon: Position[]): boolean => {
      const [x, y] = point
      let inside = false

      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
  const [xi, yi] = polygon[i] as [number, number]
  const [xj, yj] = polygon[j] as [number, number]

        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside
        }
      }

      return inside
    }

    const pointInFeature = (point: [number, number], feature: Feature<Polygon | MultiPolygon>): boolean => {
      const geometry = feature.geometry

      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates as Position[][]
        // Check if point is in outer ring
        if (!pointInPolygon(point, coordinates[0])) {
          return false
        }
        // Check if point is in any hole (inner rings)
        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) {
            return false // Point is in a hole
          }
        }
        return true
      } else if (geometry.type === "MultiPolygon") {
        // Check each polygon in the MultiPolygon
        for (const polygon of geometry.coordinates as Position[][][]) {
          // Check if point is in outer ring
          if (pointInPolygon(point, polygon[0])) {
            // Check if point is in any hole
            let inHole = false
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true
                break
              }
            }
            if (!inHole) {
              return true
            }
          }
        }
        return false
      }

      return false
    }

    const generateDotsInPolygon = (
      feature: Feature<Polygon | MultiPolygon>,
      dotSpacing = 16,
    ) => {
      const dots: [number, number][] = []
      const bounds = d3.geoBounds(feature)
      const [[minLng, minLat], [maxLng, maxLat]] = bounds

      const stepSize = dotSpacing * 0.08
        // let pointsGenerated = 0

      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point: [number, number] = [lng, lat]
          if (pointInFeature(point, feature)) {
            dots.push(point)
              // pointsGenerated++
          }
        }
      }

      // removed noisy console log to improve runtime performance
      return dots
    }

    interface DotData {
      lng: number
      lat: number
      visible: boolean
    }

    const allDots: DotData[] = []
  let landFeatures: FeatureCollection<Polygon | MultiPolygon>

    const render = () => {
      // Clear canvas
  context.clearRect(0, 0, size, size)

      const currentScale = projection.scale()
      const scaleFactor = currentScale / radius

  // Draw ocean (globe background)
  context.beginPath()
  context.arc(size / 2, size / 2, currentScale, 0, 2 * Math.PI)
  context.fillStyle = "#000000"
  context.fill()
  context.strokeStyle = "#ffffff"
  context.lineWidth = 2 * scaleFactor
  context.stroke()

      if (landFeatures) {
        // Draw graticule
  const graticule = d3.geoGraticule()
        context.beginPath()
        path(graticule())
  context.strokeStyle = "#ffffff"
        context.lineWidth = 1 * scaleFactor
  context.globalAlpha = 0.25
        context.stroke()
        context.globalAlpha = 1

        // Draw land outlines
        context.beginPath()
        landFeatures.features.forEach((feature) => {
          path(feature)
        })
  context.strokeStyle = "#ffffff"
        context.lineWidth = 1 * scaleFactor
        context.stroke()

        // Draw halftone dots
        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat])
          if (
            projected &&
            projected[0] >= 0 &&
            projected[0] <= size &&
            projected[1] >= 0 &&
            projected[1] <= size
          ) {
            const baseR = 1.2 * scaleFactor
            context.beginPath()
            context.arc(projected[0], projected[1], baseR, 0, 2 * Math.PI)
            context.fillStyle = "#999999"
            context.fill()
          }
        })
      }
    }

    // Simple in-memory cache so re-mounts don't refetch/regenerate
    // across the same session
    type Cache = {
      land?: FeatureCollection<Polygon | MultiPolygon>
      dots?: DotData[]
      total?: number
    }
    type WithCache = typeof globalThis & { __NV_GLOBE_CACHE__?: Cache }
    const g = globalThis as WithCache
    const moduleCache: Cache = g.__NV_GLOBE_CACHE__ ?? {}
    g.__NV_GLOBE_CACHE__ = moduleCache

    const loadWorldData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json",
        )
        if (!response.ok) throw new Error("Failed to load land data")

        landFeatures = (await response.json()) as FeatureCollection<Polygon | MultiPolygon>

        // Generate dots for all land features
        // Use cache if available
        if (moduleCache.dots && moduleCache.land) {
          moduleCache.dots.forEach((d) => allDots.push({ ...d }))
        } else {
          let totalDots = 0
          landFeatures.features.forEach((feature) => {
            const dots = generateDotsInPolygon(feature, 18) // slightly sparser for perf
            dots.forEach(([lng, lat]) => {
              const entry = { lng, lat, visible: true }
              allDots.push(entry)
              totalDots++
            })
          })
          moduleCache.land = landFeatures
          moduleCache.dots = allDots.map((d) => ({ ...d }))
          moduleCache.total = totalDots
        }

        render()
      } catch {
        setError("Failed to load land map data")
      }
    }

    // Set up rotation and interaction
    const rotation: [number, number] = [0, 0]
    let autoRotate = true
    const rotationSpeed = rotateSpeed

    const rotate = () => {
      if (autoRotate) {
        rotation[0] += rotationSpeed
        projection.rotate(rotation)
        render()
      }
    }

    // Auto-rotation timer
    const rotationTimer = d3.timer(rotate)

    const handleMouseDown = (event: MouseEvent) => {
      autoRotate = false
      const startX = event.clientX
      const startY = event.clientY
  const startRotation: [number, number] = [rotation[0], rotation[1]]

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const sensitivity = 0.5
        const dx = moveEvent.clientX - startX
        const dy = moveEvent.clientY - startY

        rotation[0] = startRotation[0] + dx * sensitivity
        rotation[1] = startRotation[1] - dy * sensitivity
        rotation[1] = Math.max(-90, Math.min(90, rotation[1]))

        projection.rotate(rotation)
        render()
      }

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)

        setTimeout(() => {
          autoRotate = true
        }, 10)
      }

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()
      const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1
      const newRadius = Math.max(radius * 0.5, Math.min(radius * 3, projection.scale() * scaleFactor))
      projection.scale(newRadius)
      render()
    }

    if (interactive) {
      canvas.addEventListener("mousedown", handleMouseDown)
    }
    if (scrollZoom) {
      canvas.addEventListener("wheel", handleWheel)
    }

    // Load the world data
    loadWorldData()

    // Cleanup
    return () => {
      rotationTimer.stop()
      if (interactive) canvas.removeEventListener("mousedown", handleMouseDown)
      if (scrollZoom) canvas.removeEventListener("wheel", handleWheel)
    }
  }, [width, height, interactive, scrollZoom, rotateSpeed])

  if (error) {
    return (
      <div className={`dark flex items-center justify-center bg-card rounded-2xl p-8 ${className}`}>
        <div className="text-center">
          <p className="dark text-destructive font-semibold mb-2">Error loading Earth visualization</p>
          <p className="dark text-muted-foreground text-sm">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="block rounded-2xl bg-transparent shrink-0"
      />
      {interactive || scrollZoom ? (
        <div className="absolute bottom-4 left-4 text-xs text-muted-foreground px-2 py-1 rounded-md dark bg-neutral-900">
          {interactive ? "Drag to rotate" : ""}
          {interactive && scrollZoom ? " • " : ""}
          {scrollZoom ? "Scroll to zoom" : ""}
        </div>
      ) : null}
    </div>
  )
}
