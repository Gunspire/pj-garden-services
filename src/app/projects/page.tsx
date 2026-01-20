import type { Metadata } from "next";
import React from "react";

import { Reveal } from "../../components/Reveal";
import { SectionHeading } from "../../components/SectionHeading";
import { ProjectsGallery, type ProjectGalleryItem } from "../../components/ProjectsGallery";
import { ProjectsHero } from "../../components/ProjectsHero";
import { BottomCtaSection } from "../../sections/BottomCtaSection";
import { Footer } from "../../sections/Footer";
import { ReviewsSection } from "../../sections/ReviewsSection";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Projects | EliteGuard Roofing",
  description:
    "Explore recent roofing projects across the UK. Roof repairs, flat roofing, chimney work and new roof installations with tidy workmanship and clear results.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | EliteGuard Roofing",
    description:
      "Explore recent roofing projects—repairs, replacements and flat roofing—completed with tidy workmanship and clear results.",
    type: "website",
    url: "/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | EliteGuard Roofing",
    description: "Explore recent roofing projects and request a free quote.",
  },
  robots: { index: true, follow: true },
};

export default function ProjectsPage() {
  const pool = SITE.imagePool;
  const projectsAll: ProjectGalleryItem[] = [
    {
      src: pool[0],
      alt: "Tidy garden project",
      title: "Garden refresh",
      location: "Cotswolds",
      date: "Aug 2025",
      duration: "4 days",
      tags: ["Planting", "Borders", "Tidy finish"],
    },
    {
      src: pool[1],
      alt: "Hedge trimming project",
      title: "Hedge trimming + tidy-up",
      location: "Surrey",
      date: "Jul 2025",
      duration: "3 days",
      tags: ["Trim", "Shape", "Waste removed"],
    },
    {
      src: pool[2],
      alt: "Lawn care project",
      title: "Lawn care + edging",
      location: "South London",
      date: "Sep 2025",
      duration: "48 hours",
      tags: ["Mow", "Edge", "Seasonal plan"],
    },
    {
      src: pool[3],
      alt: "Garden maintenance project",
      title: "Garden maintenance visit",
      location: "Greater London",
      date: "Jun 2025",
      duration: "2 days",
      tags: ["Tidy-up", "Weeding", "Beds"],
    },
    {
      src: pool[4],
      alt: "Lawn mowing project",
      title: "Regular mowing setup",
      location: "Kent",
      date: "May 2025",
      duration: "1 day",
      tags: ["Mow", "Strim", "Clean paths"],
    },
    {
      src: pool[0],
      alt: "Garden clearance project",
      title: "Garden clearance",
      location: "Essex",
      date: "Apr 2025",
      duration: "Same day",
      tags: ["Clear", "Cut back", "Waste"],
    },
    {
      src: pool[1],
      alt: "Fence and garden tidy project",
      title: "Fence tidy + garden clean-up",
      location: "Hertfordshire",
      date: "Mar 2025",
      duration: "1–2 days",
      tags: ["Repairs", "Secure", "Neat finish"],
    },
    {
      src: pool[2],
      alt: "Garden before photo",
      title: "Before",
      location: "Berkshire",
      date: "Feb 2025",
      duration: "—",
      tags: ["Before", "Overgrown", "Plan"],
    },
    {
      src: pool[3],
      alt: "Garden after photo",
      title: "After",
      location: "Berkshire",
      date: "Feb 2025",
      duration: "—",
      tags: ["After", "Tidy", "Usable space"],
    },
  ];
  const projects = [...projectsAll.slice(0, 3), ...projectsAll.slice(0, 3)];

  return (
    <main className="font-sans">
      <ProjectsHero />

      {/* 3x3 project gallery */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Portfolio" center>
            Recent projects
          </SectionHeading>

          <ProjectsGallery items={projects} />
        </div>
      </section>

      <Reveal>
        <ReviewsSection />
      </Reveal>
      <Reveal>
        <BottomCtaSection />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}


