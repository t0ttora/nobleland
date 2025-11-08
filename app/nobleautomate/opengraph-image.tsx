import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export default function Image() {
  const width = 1200
  const height = 630
  const bg = '#0a0a0a'
  const accent = '#ff5a26'
  const fg = '#f3f3f3'
  return new ImageResponse(
    (
      <div style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg, position: 'relative', fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system' }}>
        <div style={{ position: 'absolute', left: -120, bottom: -120, width: 500, height: 500, background: accent, borderRadius: 9999, filter: 'blur(120px)', opacity: 0.25 }} />
        <div style={{ position: 'absolute', right: -120, bottom: -120, width: 500, height: 500, background: accent, borderRadius: 9999, filter: 'blur(120px)', opacity: 0.25 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: fg, fontSize: 24, opacity: 0.9 }}>
            <div style={{ width: 10, height: 10, background: accent, borderRadius: 9999, boxShadow: `0 0 24px ${accent}` }} />
            <span style={{ letterSpacing: 6, textTransform: 'uppercase' }}>NobleAutomate</span>
          </div>
          <h1 style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1, margin: 0, color: fg }}>Autonomous Workflow Execution</h1>
          <p style={{ fontSize: 32, margin: 0, color: 'rgba(243,243,243,0.75)', maxWidth: 900 }}>Observe. Learn. Automate repetitive logistics tasks with confidence.</p>
        </div>
      </div>
    ),
    { width, height }
  )
}
