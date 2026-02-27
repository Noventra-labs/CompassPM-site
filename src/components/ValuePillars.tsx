"use client";

import { motion } from "framer-motion";
import { Search, GitBranch, Plug2 } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Find the gaps",
    description:
      "Gap Detective and Integrity Checker continuously scan Jira, Notion, and feedback for contradictions and missed opportunities.",
  },
  {
    icon: GitBranch,
    title: "Fix everything safely",
    description:
      "Composer Mode generates minimal unified diffs across PRDs, tickets, and roadmap items. Review, approve, and sync back with full audit trail.",
  },
  {
    icon: Plug2,
    title: "Works on your stack",
    description:
      "CompassPM plugs into Jira, Linear, Notion, Confluence, and Slack without replacing them. Zero migration.",
  },
];

export default function ValuePillars() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-zinc-500 uppercase tracking-widest text-center mb-4"
        >
          WHY COMPASSPM
        </motion.p>

        {/* Section title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          From &apos;we think&apos; to &apos;we know&apos;
        </motion.h2>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 40px rgba(99,102,241,0.18)",
              }}
              className="group relative p-8 bg-surface rounded-2xl transition-all duration-200"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-8 w-12 h-[3px] bg-accent rounded-full" />

              {/* Icon */}
              <motion.div
                className="mt-4 mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <pillar.icon size={40} className="text-accent" />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
