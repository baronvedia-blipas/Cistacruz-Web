import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import StatsCounter from "@/components/home/StatsCounter";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import Partners from "@/components/home/Partners";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <StatsCounter />
      <ServicesPreview />
      <ProjectsPreview />
      <ProcessTimeline />
      <Partners />
      <FAQ />
      <CTASection />
    </>
  );
}
