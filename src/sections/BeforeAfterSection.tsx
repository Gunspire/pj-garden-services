import React from "react";
import { CheckCircle2, Clock, MapPin, Star } from "lucide-react";

import { Button } from "../components/Button";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { SectionHeading } from "../components/SectionHeading";
import { SITE } from "../lib/site";

export function BeforeAfterSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading subtitle="Transformation">
              Overgrown → Fresh & Usable
            </SectionHeading>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              When a garden gets away from you, it can feel like a big job. We cleared the overgrowth,
              cut back shrubs, removed the waste, and left a clean, usable space ready for planting and
              relaxing.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-slate-700 font-medium">
                  Overgrowth cut back + access restored
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-slate-700 font-medium">
                  Hedges and shrubs trimmed neatly
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-slate-700 font-medium">
                  Waste removed + final tidy and sweep
                </span>
              </li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Location</p>
                  <p className="text-sm font-bold text-slate-900">Cotswolds, UK</p>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Turnaround</p>
                  <p className="text-sm font-bold text-slate-900">48 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button as="a" href="#contact">
                Get a Free Quote
              </Button>
              <Button variant="outline" as="a" href={`tel:${SITE.phoneTel}`}>
                Call {SITE.phoneDisplay}
              </Button>
            </div>
          </div>

          <div className="relative">
            <BeforeAfterSlider />
            <p className="text-center text-sm text-slate-500 mt-4 italic">
              Drag the slider to see the transformation
            </p>

            <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-500">Completed last week</span>
              </div>
              <p className="text-slate-700 leading-relaxed italic">
                “We’d put the garden off for months. They cleared it quickly, shaped everything
                beautifully, and left it spotless. It finally feels like a garden again.”
              </p>
              <div className="flex items-center gap-3 mt-5">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                  H
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm">Helen P.</p>
                  <p className="text-slate-500 text-xs">Cotswolds • Garden clearance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
