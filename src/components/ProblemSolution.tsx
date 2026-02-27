"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const problems = [
  "PRDs conflict with calls",
  "Jira Done, roadmap says Planned",
  "Feedback lost in Slack/tickets",
  "AI that only generates text",
];

const solutions = [
  "Unified context via RAG",
  "Gap Detective finds drift",
  "Triage agent clusters themes",
  "Composer with diffs + citations",
];

export default function ProblemSolution() {
  return (
    <section id="product" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-center text-zinc-100 mb-16"
        >
          Your stack is powerful — but full of blind spots
        </motion.h2>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Problems card */}
          <motion.div
            initial={{ x: -48, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-2xl backdrop-blur-sm"
            style={{
              border: "1px solid rgba(239,68,68,0.2)",
              background: "rgba(239,68,68,0.04)",
            }}
          >
            <h3 className="text-lg font-semibold text-zinc-300 mb-6">
              The reality
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ y: 8, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.06 }}
                  className="group flex items-start gap-3 text-zinc-400 cursor-default"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center group-hover:shadow-[0_0_12px_rgba(239,68,68,0.4)] transition-shadow">
                    <X size={12} className="text-red-400" />
                  </span>
                  <span className="group-hover:line-through group-hover:text-zinc-600 transition-all">
                    {problem}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions card */}
          <motion.div
            initial={{ x: 48, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-2xl backdrop-blur-sm"
            style={{
              border: "1px solid rgba(99,102,241,0.2)",
              background: "rgba(99,102,241,0.04)",
            }}
          >
            <h3 className="text-lg font-semibold text-zinc-300 mb-6">
              With CompassPM
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ y: 8, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.06 }}
                  className="group flex items-start gap-3 text-zinc-400 cursor-default"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center group-hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-shadow">
                    <Check size={12} className="text-accent" />
                  </span>
                  <span className="group-hover:translate-x-1 group-hover:text-white transition-all">
                    {solution}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
