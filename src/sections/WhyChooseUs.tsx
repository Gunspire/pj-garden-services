import React from "react";
import {
  Award,
  BadgeCheck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Star,
} from "lucide-react";

import { SectionHeading } from "../components/SectionHeading";
import { SITE } from "../lib/site";

export function WhyChooseUs() {
  const photo = SITE.imagePool[0];
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <SectionHeading subtitle={`Why ${SITE.companyName}`} className="mb-8">
              Built on Trust & Quality
            </SectionHeading>

            <p className="text-slate-600 leading-relaxed text-base md:text-lg max-w-2xl">
              Tidy workmanship, transparent pricing, and a team you can rely on. We treat your
              garden like it’s our own—clear communication, clean finish, and no surprises.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              {[
                { value: "15+", label: "Years experience", icon: Award },
                { value: "500+", label: "Jobs completed", icon: BadgeCheck },
                { value: "4.9★", label: "Google average", icon: Star },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xl font-extrabold text-slate-900 leading-none">{s.value}</p>
                    <p className="text-xs font-semibold text-slate-500 mt-1">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Fully insured & accountable</p>
                    <p className="text-slate-600 text-sm mt-1">
                      Public Liability cover and clear documentation — no grey areas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Clear written quotes</p>
                    <p className="text-slate-600 text-sm mt-1">
                      We keep the scope clear—so you know what’s included and what it costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">No surprises</p>
                    <p className="text-slate-600 text-sm mt-1">
                      Itemised quotes, photo evidence where helpful, and clear timelines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Respect for your property</p>
                    <p className="text-slate-600 text-sm mt-1">
                      Daily tidy-up, careful access, and communication you don’t have to chase.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 shadow-lg overflow-hidden">
              <div className="aspect-[4/5] relative">
                {photo ? (
                  <img
                    src={photo}
                    alt="A tidy garden after professional maintenance"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-emerald-600 to-lime-500" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
