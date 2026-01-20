import React from "react";

import { FAQItem } from "../components/FAQItem";
import { SectionHeading } from "../components/SectionHeading";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Common Questions" center>
          Frequently Asked Questions
        </SectionHeading>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-2">
          <FAQItem
            question="Do you provide free estimates?"
            answer="Yes—quotes are free and no obligation. We’ll assess the work required and provide a clear written breakdown."
          />
          <FAQItem
            question="Are you fully insured?"
            answer="Yes. We’re fully insured for your peace of mind."
          />
          <FAQItem
            question="Do you remove green waste?"
            answer="We can remove waste as part of the job (or leave a tidy pile if you prefer). Your quote will confirm what’s included."
          />
          <FAQItem
            question="Can you do regular maintenance visits?"
            answer="Yes. Many customers book weekly or fortnightly lawn and garden maintenance. We’ll agree a schedule that suits you."
          />
        </div>
      </div>
    </section>
  );
}
