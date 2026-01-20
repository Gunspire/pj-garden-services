import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";

import { Logo } from "../components/Logo";
import { SERVICES } from "../lib/services";
import { SITE } from "../lib/site";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo variant="inverse" className="h-[66px] sm:h-[72px]" />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Professional gardening and landscaping services. Tidy workmanship, fully insured, and
              customer-focused.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <a href={`/${s.slug}`} className="hover:text-emerald-300 transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {SITE.addressLine}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {SITE.hoursLine}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Accreditations</h4>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center text-xs font-bold text-slate-600">
                NFRC
              </div>
              <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center text-xs font-bold text-slate-600">
                FMB
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} {SITE.companyName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/review" className="hover:text-white">
              Leave a Review
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
