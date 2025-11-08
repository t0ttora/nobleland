import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ReviewCard = {
  id: number;
  title: string;
  description: string;
};

// Stacked cards content for the review section
export const cardData: ReviewCard[] = [
  {
    id: 1,
    title: 'Data Blind Spots.',
    description:
      'Chasing a single shipment status across countless emails, spreadsheets, and phone calls.',
  },
  {
    id: 2,
    title: 'Manual Breakdowns.',
    description:
      'Alerts without action. Critical exceptions get lost in the noise, leading to costly, avoidable delays.',
  },
  {
    id: 3,
    title: 'Document Chaos.',
    description:
      'Unsecured files, endless email versions, and a complete lack of audit trails create massive compliance risk.',
  },
  {
    id: 4,
    title: 'Reactive Firefighting.',
    description:
      "You don't predict or prevent delays, detentions, and fees—you just end up paying for them.",
  },
];
