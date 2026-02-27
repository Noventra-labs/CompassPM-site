"use client";

import { motion } from "framer-motion";
import { Plug, Database, Search, GitMerge } from "lucide-react";

const steps = [
  {
    icon: Plug,
    title: "Connect your tools",
    description:
      "Securely connect Jira, Linear, Notion, Confluence, and Slack via OAuth.",
  },
  {
    icon: Database,
    title: "Index your workspace",
    description:
      "CompassPM builds a unified map linking feedback to ideas, ideas to roadmap, roadmap to delivery.",
  },
  {
    icon: Search,
    title: "Agents scan for gaps",
    description:
      "Gap Detective, Integrity Checker, and Feedback Triage run on schedule to find drift and missed themes.",
  },
  {
    icon: GitMerge,
    title: "Review diffs and apply",
    description:
      "Composer Mode proposes minimal changes. Review, approve, and sync back with full citations.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-zinc-500 uppercase tracking-widest text-center mb-4"
        >
          HOW IT WORKS
        </motion.p>

        {/* Section title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          From chaos to clarity in four steps
        </motion.h2>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          {steps.map((step, index) => (
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
              className={`relative flex items-start gap-6 md:gap-12 mb-12 last:mb-0 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse md:text-right"
              }`}
            >
              {/* Step number badge */}
              <div
                className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center bg-background ${
                  index % 2 === 0 ? "md:ml-0" : "md:mr-0"
                }`}
                style={{
                  boxShadow: "0 0 20px rgba(99,102,241,0.3) inset",
                }}
              >
                <span className="text-white font-semibold">{index + 1}</span>
              </div>

              {/* Horizontal connector (desktop) */}
              <div
                className={`hidden md:block absolute top-6 w-12 h-px bg-accent/30 ${
                  index % 2 === 0
                    ? "left-[calc(50%-48px)]"
                    : "right-[calc(50%-48px)]"
                }`}
              />

              {/* Content card */}
              <div
                className={`flex-1 p-6 bg-surface rounded-xl ${
                  index % 2 === 0
                    ? "md:ml-auto md:mr-[calc(50%+24px)]"
                    : "md:mr-auto md:ml-[calc(50%+24px)]"
                }`}
              >
                <div
                  className={`flex items-center gap-3 mb-3 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <step.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[15px] text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
