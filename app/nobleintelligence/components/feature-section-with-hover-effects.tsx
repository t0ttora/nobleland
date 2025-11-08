import { cn } from "@/lib/utils";
import {
  IconAlertTriangle,
  IconMessages,
  IconBrain,
  IconScan,
  IconSparkles,
  IconStar,
  IconCompass,
  IconShieldCheck,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Proactive Risk & Delay Prediction",
      description:
        "Monitors every shipment 24/7—GPT-driven models flag risks and predict delays before they escalate.",
      icon: <IconAlertTriangle />,
    },
    {
      title: "Natural Language Task Execution",
      description:
        "Type plain language commands (e.g. ‘Create a shipment to Hamburg’) and it executes instantly.",
      icon: <IconMessages />,
    },
    {
      title: "Intelligent Next-Best-Action",
      description:
        "Don’t just get alerts—get solutions with prescriptive actions to stay ahead of disruptions.",
      icon: <IconBrain />,
    },
    {
      title: "Automated Data Extraction",
      description:
        "Reads invoices & BOLs, extracts structured fields, and eliminates manual entry & errors.",
      icon: <IconScan />,
    },
    {
      title: "On-Demand Summarization",
      description:
        "Summarize long chats, documents, or full shipment histories in seconds—focus on what matters.",
      icon: <IconSparkles />,
    },
    {
      title: "Smart Carrier Recommendations",
      description:
        "Asks performance + live data to recommend the most reliable, cost-effective carrier for a lane.",
      icon: <IconStar />,
    },
    {
      title: "On-Demand System Navigation",
      description:
        "Ask how to do anything (e.g. ‘Invite a customs broker’) and it guides or opens the right interface.",
      icon: <IconCompass />,
    },
    {
      title: "Intelligent Document Audits",
      description:
        "Understands documents and auto‑flags missing files, wrong formats, or compliance inconsistencies.",
      icon: <IconShieldCheck />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#ff5a26]/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#ff5a26]/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#ff5a26]">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#ff5a26]/40 group-hover/feature:bg-[#ff5a26] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
