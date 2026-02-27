"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import WaitlistModal from "./WaitlistModal";

const navLinks = [
  { name: "Product", href: "#product" },
  { name: "Agents", href: "#agents" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    const handleSectionObserver = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${entry.target.id}`);
            }
          });
        },
        { threshold: 0.3 }
      );

      sections.forEach((section) => {
        if (section) observer.observe(section);
      });

      return () => observer.disconnect();
    };

    window.addEventListener("scroll", handleScroll);
    const cleanup = handleSectionObserver();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanup?.();
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 h-16 border-b transition-all duration-200 ${
          isScrolled
            ? "bg-[rgba(9,9,11,0.92)] border-[rgba(255,255,255,0.06)]"
            : "bg-[rgba(9,9,11,0.55)] border-[rgba(255,255,255,0.06)]"
        } backdrop-blur-[20px]`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold text-lg tracking-tight">
              Noventra
            </span>
            <span className="px-2 py-0.5 text-[10px] font-medium bg-accent text-white rounded-full">
              CompassPM
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm text-zinc-400 hover:text-white transition-colors tracking-wide"
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <motion.button
              onClick={() => setIsWaitlistOpen(true)}
              whileHover={{ scale: 1.03 }}
              className="px-5 py-2.5 text-sm font-medium text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors animate-glow-pulse"
            >
              Join Waitlist
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: 320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 320, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-16 right-0 w-80 h-[calc(100vh-64px)] bg-surface border-l border-[rgba(255,255,255,0.06)] md:hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-6 border-t border-[rgba(255,255,255,0.06)]">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsWaitlistOpen(true);
                    }}
                    className="w-full px-4 py-3 text-sm font-medium text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
}
