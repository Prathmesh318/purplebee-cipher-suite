import { createFileRoute } from "@tanstack/react-router";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TimelineSection from "../components/TimelineSection";
import SkillsSection from "../components/SkillsSection";
import CertificationsSection from "../components/CertificationsSection";
import ProjectsSection from "../components/ProjectsSection";
import ArticlesSection from "../components/ArticlesSection";
import LearningSection from "../components/LearningSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prathmesh M | PurpleBeeSec — Cybersecurity Portfolio" },
      { name: "description", content: "Offensive Security Professional specializing in Web App VAPT, Purple Teaming, SOC, and Enterprise Security. Open to opportunities." },
      { property: "og:title", content: "Prathmesh M | PurpleBeeSec — Cybersecurity Portfolio" },
      { property: "og:description", content: "Offensive Security Professional — Web App VAPT, Purple Teaming, SOC, Enterprise Security Solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticlesBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <ArticlesSection />
      <LearningSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
