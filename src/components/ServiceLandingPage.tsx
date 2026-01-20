import type { Metadata } from "next";
import React from "react";

import { Button } from "./Button";
import { FAQItem } from "./FAQItem";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ServiceHero } from "./ServiceHero";
import type { Service } from "../lib/services";
import { SERVICE_OPTIONS } from "../lib/services";
import { pickSiteImage, SITE } from "../lib/site";
import { BottomCtaSection } from "../sections/BottomCtaSection";
import { Footer } from "../sections/Footer";
import { ProjectsSection } from "../sections/ProjectsSection";
import { ReviewsSection } from "../sections/ReviewsSection";
import { ServiceAreaSection } from "../sections/ServiceAreaSection";

export function buildServiceMetadata(service: Pick<Service, "slug" | "label" | "heroDescription">): Metadata {
  const title = `${service.label} | ${SITE.companyName}`;
  return {
    title,
    description: service.heroDescription,
    alternates: { canonical: `/${service.slug}` },
    openGraph: { title, description: service.heroDescription, type: "website", url: `/${service.slug}` },
    twitter: { card: "summary_large_image", title, description: service.heroDescription },
    robots: { index: true, follow: true },
  };
}

export function ServiceLandingPage({ service }: { service: Service }) {
  const heroImageSrc = pickSiteImage(service.slug);
  return (
    <main className="font-sans">
      <ServiceHero
        serviceName={service.label}
        headline={service.heroHeadline}
        description={service.heroDescription}
        backgroundImageSrc={heroImageSrc}
        defaultServiceNeeded={service.label}
        serviceOptions={SERVICE_OPTIONS}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <SectionHeading subtitle={service.label}>What’s included</SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-xl">
                Clear scope, tidy workmanship, and a finish you’ll be happy with. Here’s what a typical
                job includes.
              </p>
              <ul className="mt-6 space-y-3">
                {service.includedBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-600 shrink-0" />
                    <span className="text-sm font-semibold text-slate-700 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button as="a" href="/quote">
                  Build a Quote
                </Button>
                <Button as="a" href="/#projects" variant="outline">
                  View recent work
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <div className="relative aspect-[4/3]">
                  <img
                    src={heroImageSrc}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur px-4 py-4 text-white">
                    <div className="text-sm font-extrabold">{SITE.companyName}</div>
                    <div className="mt-1 text-sm font-semibold text-white/90">
                      Serving {SITE.serviceAreaPrimary}. Tidy finish, clear pricing.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Clear scope</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Written quote so you know what’s included.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-extrabold text-slate-900">Tidy work</div>
                  <div className="mt-1 text-sm font-semibold text-slate-600">
                    Careful around paths, plants and property.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <SectionHeading subtitle="Our process">How it works</SectionHeading>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-xl">
                Calm, predictable steps—from the first message to a tidy finish.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <ol className="space-y-4">
                  {service.processSteps.map((s, idx) => (
                    <li key={s.title}>
                      <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <div className="absolute top-4 right-4 h-8 w-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-extrabold">
                          {idx + 1}
                        </div>
                        <div className="text-sm font-extrabold text-slate-900">{s.title}</div>
                        <p className="mt-2 text-sm font-semibold text-slate-600 leading-relaxed">
                          {s.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="FAQ" center>
            {service.label} FAQs
          </SectionHeading>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm px-6">
            {service.faqs.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <ProjectsSection />
      </Reveal>
      <Reveal>
        <ReviewsSection />
      </Reveal>
      <Reveal>
        <ServiceAreaSection />
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

