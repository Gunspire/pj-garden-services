import React from "react";

import { ServiceCard } from "../components/ServiceCard";
import { SectionHeading } from "../components/SectionHeading";
import { SERVICES } from "../lib/services";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="Our Expertise" center>
        Gardening & Landscaping Services
      </SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((s) => (
          <ServiceCard
            key={s.slug}
            title={s.label}
            description={s.cardDesc}
            href={`/${s.slug}`}
            linkLabel="Learn more"
          />
        ))}
      </div>
    </section>
  );
}
