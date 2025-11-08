export type ModuleFeature = {
  id: string;
  title: string;
  category: string;
  image: string;
  dialogTitle: string;
  subtitle: string;
  points: string[];
};

export const modules: ModuleFeature[] = [
  {
    id: "noblefiles",
    title: "The Secure Vault",
    category: "NobleFiles",
    image:
      "https://images.unsplash.com/photo-1518081461904-9ac6a3a0f17f?auto=format&fit=crop&w=800&q=60",
    dialogTitle: "NobleFiles — Encrypted Document Core",
    subtitle:
      'Stop using email for critical documents. This is your AES-256 encrypted repository for BOLs, customs forms, and contracts. Features granular, role-based access and full version control, ending the "final-v3-final.pdf" chaos.',
    points: [
      "AES-256 encrypted repository for BOLs, customs forms, contracts & mission‑critical docs.",
      "Granular role & time‑scoped access (no more risky email attachments).",
      "True version graph—never again ‘final-v3-FINAL.pdf’.",
      "Shipment-aware tagging keeps every file contextually linked.",
      "Supabase Storage + RLS hardened perimeter with zero-trust defaults.",
      "Inline AI extraction: weight, product descriptors, dates parsed on upload.",
    ],
  },
  {
    id: "nobledocs",
    title: "The Collaborative Editor",
    category: "NobleDocs",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=60",
    dialogTitle: "NobleDocs — Real‑Time Narrative Layer",
    subtitle:
      "A Word-like editor embedded in your workflow. Co-author shipment briefs, draft meeting notes, and centralize all text-based documents, keeping them tied directly to the shipment.",
    points: [
      "Word‑class, shipment‑attached editor for briefs, SOPs & meeting notes.",
      "Live multi‑cursor co‑authoring with presence & change streaming.",
      "Context binding: every doc is natively tethered to its shipment object.",
      "Auto‑save to Supabase with offline resilience and delta merges.",
      "One‑click export (TXT, PDF, HTML) + embed via doc_card component into chats & dashboards.",
      "AI summarization & anomaly callouts right inside the editor toolbar bubble.",
    ],
  },
  {
    id: "noblecells",
    title: "The Live Spreadsheet",
    category: "NobleCells",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60",
    dialogTitle: "NobleCells — Operational Data Engine",
    subtitle:
      "An Excel-like engine built directly into your platform. Manage inventory, calculate costs, and manipulate tabular data in real-time without ever exporting. Stop the context-switching.",
    points: [
      "Embedded Excel‑like grid—no CSV round‑trips, zero context switching.",
      "Inventory, cost modeling, timeline sequencing & KPI computation in one live surface.",
      "Collaborative cell streaming + cursor presence for true synchronous ops.",
      "Domain‑tuned formula pack for logistics (ETA deltas, capacity utilization, cost rollups).",
      "Embeddable cells_card previews into shipment threads & dashboards.",
      "Realtime AI assist: auto-suggest formulas & detect inconsistent unit mixes.",
    ],
  },
];
