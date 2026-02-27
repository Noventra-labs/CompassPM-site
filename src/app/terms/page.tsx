"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Use</h1>
            <p className="text-zinc-500 mb-12">Last updated: February 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-invert prose-zinc max-w-none"
          >
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-zinc-400 leading-relaxed">
                By accessing and using CompassPM by Noventra (&quot;the Service&quot;), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="text-zinc-400 leading-relaxed">
                CompassPM is an AI-native product management workspace that provides tools for roadmap planning, PRD generation, feedback analysis, and team collaboration. The Service is provided &quot;as is&quot; and may be updated, modified, or discontinued at any time.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">3. User Accounts</h2>
              <p className="text-zinc-400 leading-relaxed">
                To use certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">4. Acceptable Use</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Distribute malware or harmful code</li>
                <li>Attempt to gain unauthorized access to the Service</li>
                <li>Interfere with the proper functioning of the Service</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-zinc-400 leading-relaxed">
                The Service and its original content, features, and functionality are owned by Noventra and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">6. Data and Content</h2>
              <p className="text-zinc-400 leading-relaxed">
                You retain ownership of any content you create or upload to the Service. By using the Service, you grant Noventra a license to use, store, and process your content solely for the purpose of providing and improving the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-zinc-400 leading-relaxed">
                In no event shall Noventra be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">8. Changes to Terms</h2>
              <p className="text-zinc-400 leading-relaxed">
                We reserve the right to modify these Terms of Use at any time. We will notify users of any material changes by posting the updated terms on this page.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">9. Contact Us</h2>
              <p className="text-zinc-400 leading-relaxed">
                If you have any questions about these Terms of Use, please contact us at{" "}
                <a href="mailto:legal@noventra.com" className="text-accent hover:underline">
                  legal@noventra.com
                </a>
              </p>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
