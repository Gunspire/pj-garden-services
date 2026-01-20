import React from "react";

import { Button } from "../components/Button";
import { SITE } from "../lib/site";

export function CtaBand() {
  const bg = SITE.imagePool[1] ?? SITE.imagePool[0];
  return (
    <section className="relative overflow-hidden py-10 lg:py-12">
      <div className="absolute inset-0">
        <img src={bg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-900/55 to-slate-900/35" />
        <div className="absolute inset-0 bg-slate-950/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Gardener You Can Trust?</h2>
        <p className="text-blue-100 text-base md:text-lg mb-6 max-w-2xl mx-auto">
          {"From tidy-ups to full garden transformations, we make it easy to get a clear quote and a tidy finish."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="white" size="md" as="a" href="#contact">
            Get a Free Quote
          </Button>
          <Button
            variant="outline"
            size="md"
            className="border-white text-white hover:bg-white/10"
            as="a"
            href={`tel:${SITE.phoneTel}`}
          >
            Call {SITE.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
