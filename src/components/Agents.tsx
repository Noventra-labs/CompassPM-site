"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitCompare,
  Search,
  RefreshCw,
  MessageSquare,
  Map,
  ShieldCheck,
  Zap,
} from "lucide-react";

const agents = [
  {
    name: "Composer",
    color: "#6366F1",
    icon: GitCompare,
    description: "Generates unified diffs across PRDs, tickets, and roadmap items with full citations.",
    detail: "Review and approve changes with a complete audit trail before syncing back.",
  },
  {
    name: "Gap Detective",
    color: "#F59E0B",
    icon: Search,
    description: "Scans for mismatches between Jira, Notion, and feedback sources.",
    detail: "Identifies contradictions and drift between your planning and delivery systems.",
  },
  {
    name: "Sync Orchestrator",
    color: "#06B6D4",
    icon: RefreshCw,
    description: "Keeps all connected tools synchronized in real-time.",
    detail: "Automatic bi-directional sync with conflict resolution and change tracking.",
  },
  {
    name: "Feedback Triage",
    color: "#EC4899",
    icon: MessageSquare,
    description: "Clusters and surfaces themes from Slack, tickets, and support channels.",
    detail: "AI-powered sentiment analysis and priority scoring for customer feedback.",
  },
  {
    name: "Roadmap Planner",
    color: "#8B5CF6",
    icon: Map,
    description: "Maintains alignment between strategic goals and delivery timelines.",
    detail: "Visual dependency mapping and automatic timeline adjustments.",
  },
  {
    name: "Integrity Checker",
    color: "#22C55E",
    icon: ShieldCheck,
    description: "Validates consistency across all product documents and artifacts.",
    detail: "Scheduled checks with detailed reports and suggested fixes.",
  },
  {
    name: "Sprint Groomer",
    color: "#F97316",
    icon: Zap,
    description: "Prepares sprint items with context and acceptance criteria.",
    detail: "Auto-generates story points and identifies missing requirements.",
  },
];

export default function Agents() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="agents" className="py-24 bg-surface relative overflow-hidden">
      {/* Background blob */}
      <div
        className="absolute inset-0 pointer-events-none animate-blob"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.04), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-zinc-500 uppercase tracking-widest text-center mb-4"
        >
          THE TEAM INSIDE COMPASSPM
        </motion.p>

        {/* Section title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          Seven AI agents that actually do the work
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() =>
                setExpandedCard(expandedCard === index ? null : index)
              }
              whileHover={{
                borderColor: `${agent.color}66`,
                boxShadow: `0 0 20px ${agent.color}26`,
              }}
              animate={{
                scale: expandedCard === index ? 1.02 : 1,
              }}
              className={`relative p-6 bg-background border border-[rgba(255,255,255,0.07)] rounded-[14px] cursor-pointer transition-all duration-200 ${
                index === 6 ? "md:col-start-2 lg:col-start-2" : ""
              }`}
            >
              {/* Agent badge */}
              <span className="absolute top-4 right-4 px-2 py-0.5 text-[10px] font-medium bg-zinc-700 text-zinc-400 rounded-full">
                Agent
              </span>

              {/* Icon */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${agent.color}20` }}
              >
                <agent.icon size={20} style={{ color: agent.color }} />
              </div>

              {/* Name */}
              <h3 className="text-base font-semibold text-white mb-2">
                {agent.name}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-zinc-400 leading-relaxed">
                {agent.description}
              </p>

              {/* Expanded detail */}
              <AnimatePresence>
                {expandedCard === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[13px] text-zinc-500 leading-relaxed mt-3 overflow-hidden"
                  >
                    {agent.detail}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-[14px]"
                style={{ backgroundColor: agent.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
