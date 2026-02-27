"use client";

import { motion } from "framer-motion";
import { Check, Circle, Clock } from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q1 2026",
    status: "completed",
    title: "Core Platform Launch",
    items: [
      "Jira & Notion integrations",
      "Gap Detective agent",
      "Composer Mode with diff previews",
    ],
  },
  {
    quarter: "Q2 2026",
    status: "in-progress",
    title: "Enterprise Features",
    items: [
      "SSO & SAML authentication",
      "Advanced permissions & teams",
      "Linear & Confluence integrations",
    ],
  },
  {
    quarter: "Q3 2026",
    status: "planned",
    title: "Advanced Intelligence",
    items: [
      "Custom agent workflows",
      "API for custom integrations",
      "Advanced analytics dashboard",
    ],
  },
  {
    quarter: "Q4 2026",
    status: "planned",
    title: "Scale & Expand",
    items: [
      "GitHub & GitLab integrations",
      "Custom model fine-tuning",
      "White-label solution",
    ],
  },
];

const statusConfig = {
  completed: {
    icon: Check,
    color: "#22C55E",
    bgColor: "rgba(34,197,94,0.15)",
    label: "Completed",
  },
  "in-progress": {
    icon: Clock,
    color: "#F59E0B",
    bgColor: "rgba(245,158,11,0.15)",
    label: "In Progress",
  },
  planned: {
    icon: Circle,
    color: "#71717A",
    bgColor: "rgba(113,113,122,0.15)",
    label: "Planned",
  },
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-zinc-500 uppercase tracking-widest text-center mb-4"
        >
          ROADMAP
        </motion.p>

        {/* Section title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          Where we&apos;re headed
        </motion.h2>

        {/* Roadmap grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => {
            const status = statusConfig[item.status as keyof typeof statusConfig];
            const StatusIcon = status.icon;

            return (
              <motion.div
                key={index}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="p-6 bg-background border border-[rgba(255,255,255,0.06)] rounded-xl"
              >
                {/* Quarter & status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-zinc-400">
                    {item.quarter}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-2 py-1 text-[11px] font-medium rounded-full"
                    style={{
                      backgroundColor: status.bgColor,
                      color: status.color,
                    }}
                  >
                    <StatusIcon size={12} />
                    {status.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-4">
                  {item.title}
                </h3>

                {/* Items list */}
                <ul className="space-y-2">
                  {item.items.map((listItem, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-zinc-400"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: status.color }}
                      />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
