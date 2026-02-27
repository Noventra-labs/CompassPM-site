import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ValuePillars from "@/components/ValuePillars";
import Agents from "@/components/Agents";
import HowItWorks from "@/components/HowItWorks";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <ValuePillars />
      <Agents />
      <HowItWorks />
      <Roadmap />
      <FAQ />
      <Footer />
    </main>
  );
}
