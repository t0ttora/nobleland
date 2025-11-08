"use client";
import React from "react";
import { type Edge, type Node } from "@xyflow/react";
import { Brain, FileText, BellDot, Activity } from "lucide-react";

export type CardData = {
  title: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
};

export function getNobleAutomateGraph(isSmall: boolean) {
  const X = isSmall ? 24 : 560; // center reference
  const GAP = 150; // requested 150px vertical spacing
  const baseY = 0;
  const jitter = (i: number) => (isSmall ? 0 : (i % 2 === 0 ? -1 : 1) * (16 + ((i % 3) * 8))); // lighter jitter desktop only

  const nodes: Node<CardData>[] = [
    {
      id: "hero",
      type: "hero",
      position: { x: isSmall ? 16 : X - 320, y: baseY },
      data: {
        title: "Your Workflow, on Autopilot.",
        description: (
          <p>
            NobleAutomate™ is the intelligent layer that learns your team&apos;s repetitive tasks—from invoicing to
            document chasing—and executes them for you.
          </p>
        ),
      },
    },
    {
      id: "features-header",
      type: "text",
      position: { x: isSmall ? 16 : X - 380, y: baseY + GAP * 1 },
      data: {
        title: "From Repetitive Clicks to Autonomous Action.",
      },
    },
    {
      id: "features-subheader",
      type: "text",
      position: { x: isSmall ? 16 : X - 380, y: baseY + GAP * 2 },
      data: {
        title: "",
        description: (
          <p>
            NobleAutomate is a workflow-learning layer that observes user patterns to automate the manual work that
            slows you down.
          </p>
        ),
      },
    },
    // Feature grid rows
    {
      id: "learn",
      type: "card",
      position: {
        x: isSmall ? 16 : X + 420 + jitter(2),
        y: isSmall ? baseY + GAP * 3 : baseY + GAP * 1,
      },
      data: {
        title: "The Workflow-Learning Layer",
        description: (
          <p>
            This isn’t just a simple if-then engine. NobleAutomate observes your team’s behavior to identify and
            suggest new processes it can automate, learning directly from your operations.
          </p>
        ),
        icon: <Brain className="h-5 w-5" />,
      },
    },
    {
      id: "docs",
      type: "card",
      position: {
        x: isSmall ? 16 : X + 780 + jitter(3),
        y: isSmall ? baseY + GAP * 4 : baseY + GAP * 1,
      },
      data: {
        title: "Automated Document Generation",
        description: (
          <p>
            Based on shipment milestones like Proof of Delivery, NobleAutomate automatically generates and sends the
            correct invoice or packing list.
          </p>
        ),
        icon: <FileText className="h-5 w-5" />,
      },
    },
    {
      id: "chase",
      type: "card",
      position: {
        x: isSmall ? 16 : X + 420 + jitter(4),
        y: isSmall ? baseY + GAP * 5 : baseY + GAP * 2,
      },
      data: {
        title: "Smart Document Chasing",
        description: (
          <p>
            Stop chasing partners for paperwork. The system knows a shipment needs a customs doc 3 days before
            sailing—automatically flags the missing file and sends reminders until it’s received.
          </p>
        ),
        icon: <BellDot className="h-5 w-5" />,
      },
    },
    {
      id: "triggers",
      type: "card",
      position: {
        x: isSmall ? 16 : X + 780 + jitter(5),
        y: isSmall ? baseY + GAP * 6 : baseY + GAP * 2,
      },
      data: {
        title: "Data-Driven Triggers",
        description: (
          <p>
            It connects to your data. Monitor a NobleCells inventory sheet and automatically trigger a new shipment
            request when stock levels hit a threshold.
          </p>
        ),
        icon: <Activity className="h-5 w-5" />,
      },
    },
    {
      id: "analogy",
      type: "text",
  position: { x: isSmall ? 16 : X - 380, y: isSmall ? baseY + GAP * 7 : baseY + GAP * 3 },
      data: {
        title: "The Smart Assistant, Not the Chef.",
        description: (
          <p>
            Think of a master chef. They don’t spend their day chopping vegetables or filling out prep forms. They
            have smart assistants for that. NobleAutomate handles all the high-volume, repetitive prep work so your
            team can focus on high-value, complex tasks.
          </p>
        ),
      },
    },
    {
      id: "synergy",
      type: "text",
  position: { x: isSmall ? 16 : X - 380, y: isSmall ? baseY + GAP * 8 : baseY + GAP * 4 },
      data: {
        title: "The \"How\" to the AI’s \"What.\"",
        description: (
          <p>
            NobleAutomate is the hands of the NobleVerse AI stack. While NobleIntelligence provides the insight
            (This shipment is at risk), NobleAutomate executes the routine action (Flag and request documents).
          </p>
        ),
      },
    },
    {
      id: "cta",
      type: "card",
      position: { x: isSmall ? 8 : X - 380 + jitter(8), y: isSmall ? baseY + GAP * 9 : baseY + GAP * 5 },
      data: {
        title: "",
        description: <p>CTA</p>,
      },
    },
  ];

  const chip = (text: string, tip?: string) => (
    <span title={tip ?? text} className="inline-block rounded-md border border-zinc-700 bg-zinc-900/80 px-2 py-0.5 text-[11px] text-zinc-300">
      {text}
    </span>
  );

  const mkEdge = (source: string, target: string, i: number, label?: string, tip?: string): Edge => ({
    id: `e-${source}-${target}-${i}`,
    source,
    target,
    type: "smoothstep",
    animated: true,
    style: { stroke: "#71717a", strokeDasharray: "4 4", strokeLinecap: "round" },
    label: label ? chip(label, tip) : undefined,
  });

  const edges: Edge[] = [
  mkEdge("hero", "features-header", 0, "learns patterns", "Observes behavior to learn"),
  mkEdge("features-header", "learn", 1, "suggest automations", "Proposes new flows"),
  mkEdge("features-header", "docs", 2, "auto generates docs", "Invoices, packing lists"),
  mkEdge("features-subheader", "chase", 3, "smart reminders", "Chases missing files"),
  mkEdge("features-subheader", "triggers", 4, "data triggers", "Threshold-based actions"),
    mkEdge("learn", "analogy", 5, "assistant mindset"),
    mkEdge("docs", "analogy", 6, "saves time"),
    mkEdge("chase", "analogy", 7, "reduces friction"),
    mkEdge("triggers", "analogy", 8, "proactive"),
    mkEdge("analogy", "synergy", 9, "hands + brain"),
    mkEdge("synergy", "cta", 10, "get started"),
  ];

  // Approximate required height
  const height = isSmall ? baseY + GAP * 10 + 300 : baseY + GAP * 6 + 400;

  return { nodes, edges, height };
}
