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
import CurrentFocusSection from "../components/CurrentFocusSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prathmesh M | PurpleBeeSec — Offensive Security Engineer Portfolio" },
      { name: "description", content: "Prathmesh M (PurpleBeeSec) — Offensive Security Engineer specializing in Web App VAPT, Purple Teaming, SOC, and Enterprise Security. CPT certified, TryHackMe Top 8%. Open to security engineering opportunities." },
      { name: "keywords", content: "Offensive Security Engineer, VAPT Engineer, AppSec Engineer, Cybersecurity Analyst, Web Application Pentester, PurpleBeeSec, Prathmesh M, Purple Teaming, SOC Analyst, Penetration Tester" },
      { property: "og:title", content: "Prathmesh M | PurpleBeeSec — Offensive Security Engineer" },
      { property: "og:description", content: "Offensive Security Professional — Web App VAPT, Purple Teaming, SOC, Enterprise Security. CPT certified, pursuing CEH & CPENT." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://purplebeesec.lovable.app" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Prathmesh M | PurpleBeeSec — Offensive Security Engineer" },
      { name: "twitter:description", content: "Offensive Security Professional — Web App VAPT, Purple Teaming, SOC, Enterprise Security." },
    ],
    links: [
      { rel: "canonical", href: "https://purplebeesec.lovable.app" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Prathmesh M",
          alternateName: "PurpleBeeSec",
          url: "https://purplebeesec.lovable.app",
          jobTitle: "Offensive Security Engineer",
          email: "prathmeshmurugan.cy@gmail.com",
          sameAs: [
            "https://github.com/Prathmesh318",
            "https://linkedin.com/in/prathmesh-murugan",
            "https://medium.com/@murugan.prathmesh",
            "https://tryhackme.com/p/purplebee",
          ],
          knowsAbout: ["Web Application Security", "Penetration Testing", "VAPT", "Purple Teaming", "SOC", "OWASP"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
        }),
      },
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
      <CurrentFocusSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
