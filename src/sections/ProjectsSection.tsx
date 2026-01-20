import React from "react";
import { CalendarDays, Clock, Leaf, MapPin } from "lucide-react";

import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { SITE } from "../lib/site";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Our Work" center>
          Recent Projects
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              img: SITE.imagePool[0],
              title: "Front Garden Refresh + Planting",
              loc: "Cotswolds",
              date: "Aug 2025",
              duration: "4 days",
              highlights: ["New borders", "Fresh planting", "Crisp edging"],
            },
            {
              img: SITE.imagePool[2],
              title: "Lawn Repair + Regular Maintenance Setup",
              loc: "Surrey",
              date: "Jul 2025",
              duration: "3 days",
              highlights: ["Mow & edge", "Patch repair", "Seasonal plan"],
            },
            {
              img: SITE.imagePool[4],
              title: "Storm Debris Clearance + Make‑Safe",
              loc: "South London",
              date: "Sep 2025",
              duration: "48 hours",
              highlights: ["Hazards cleared", "Access restored", "Tidy finish"],
            },
          ].map((project, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 bg-white"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={project.img}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 py-1.5 text-xs font-semibold text-slate-900 border border-white/50 shadow-sm">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  Garden project
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-slate-900 text-xl font-extrabold leading-snug">{project.title}</h4>
                <p className="text-slate-600 font-semibold flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-blue-600" /> {project.loc}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">{project.duration}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button as="a" href="/projects" variant="outline">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
