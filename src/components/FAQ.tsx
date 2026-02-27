"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What tools does CompassPM integrate with?",
    answer:
      "CompassPM integrates with Jira, Linear, Notion, Confluence, and Slack. We use secure OAuth connections and never store your credentials. More integrations are coming soon.",
  },
  {
    question: "Do I need to migrate my existing data?",
    answer:
      "No migration required. CompassPM works alongside your existing tools, not as a replacement. It connects via APIs and indexes your workspace without moving any data.",
  },
  {
    question: "How does the AI avoid hallucinations?",
    answer:
      "CompassPM uses RAG (Retrieval-Augmented Generation) to ground all AI responses in your actual documents. Every suggestion includes source citations so you can verify the context.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use enterprise-grade encryption at rest and in transit. Your data is processed in isolated environments and we never train our models on customer data.",
  },
  {
    question: "What's included in the early access?",
    answer:
      "Early access includes full access to all seven AI agents, unlimited workspace indexing, and priority support. It's free during the beta period.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most teams are up and running in under 10 minutes. Connect your tools via OAuth, let CompassPM index your workspace, and you're ready to go.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-zinc-500 uppercase tracking-widest text-center mb-4"
        >
          FAQ
        </motion.p>

        {/* Section title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Frequently asked questions
        </motion.h2>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
              className="border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left bg-background hover:bg-surface-2/50 transition-colors"
              >
                <span className="text-base font-medium text-white pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-zinc-400" />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-[15px] text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
