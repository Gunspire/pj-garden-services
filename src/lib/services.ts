export type Service = {
  slug:
    | "landscaping"
    | "lawn-care"
    | "hedge-trimming"
    | "garden-clearance"
    | "fencing-decking"
    | "emergency-garden-call-outs";
  label: string;
  navDesc: string;
  cardDesc: string;
  heroHeadline: string;
  heroDescription: string;
  includedBullets: string[];
  processSteps: Array<{ title: string; description: string }>;
  faqs: Array<{ q: string; a: string }>;
};

export const SERVICES: Service[] = [
  {
    slug: "landscaping",
    label: "Landscaping & Garden Design",
    navDesc: "Garden redesigns, planting & tidy finishes",
    cardDesc:
      "From layout tweaks to full transformations—paths, borders, planting plans and clean, crisp edges.",
    heroHeadline: "Transform your garden—thoughtful landscaping with a tidy finish",
    heroDescription:
      "Whether you want a low‑maintenance garden, better flow, or a fresh new look, we plan it clearly and deliver clean, reliable workmanship.",
    includedBullets: [
      "Site visit and simple design plan",
      "Borders, edging and planting beds",
      "Soil improvement and planting",
      "Tidy finish and aftercare advice",
    ],
    processSteps: [
      {
        title: "Visit & plan",
        description: "We walk the space, discuss goals, access, budget and timing.",
      },
      {
        title: "Written quote",
        description: "Clear scope and materials so you know what’s included.",
      },
      {
        title: "Build & plant",
        description: "We install with care and keep the site tidy day to day.",
      },
      {
        title: "Handover",
        description: "Final checks and simple aftercare guidance.",
      },
    ],
    faqs: [
      {
        q: "Do you help with ideas and design?",
        a: "Yes. We can suggest a simple layout and planting approach based on your space and how you want to use it.",
      },
      {
        q: "Can you make the garden low maintenance?",
        a: "Absolutely. We can reduce high-maintenance areas and recommend planting and materials that look good year-round with minimal upkeep.",
      },
      {
        q: "Do you remove waste?",
        a: "Yes—waste removal can be included in the written quote.",
      },
    ],
  },
  {
    slug: "lawn-care",
    label: "Lawn Care & Mowing",
    navDesc: "Regular mowing, feeding and lawn fixes",
    cardDesc:
      "Regular mowing, edging, feeding and weed control to keep your lawn thick, green and neat.",
    heroHeadline: "A lawn that looks sharp—mowing, edging and care done properly",
    heroDescription:
      "We keep lawns tidy with consistent mowing heights, crisp edging, and the right seasonal treatments for healthier growth.",
    includedBullets: [
      "Mowing and strimming",
      "Edging for clean borders",
      "Seasonal feeding (optional)",
      "Weed/moss control advice",
    ],
    processSteps: [
      { title: "Quick assessment", description: "We check lawn condition and set a plan and frequency." },
      { title: "Tidy service", description: "Mow, edge, strim and leave paths clean." },
      { title: "Ongoing care", description: "Seasonal tweaks to keep growth healthy." },
      { title: "Optional extras", description: "Seeding, aeration and patch repair as needed." },
    ],
    faqs: [
      { q: "How often should a lawn be cut?", a: "In peak growing season, weekly or fortnightly is typical. We’ll recommend what suits your lawn and budget." },
      { q: "Do you take away grass cuttings?", a: "Yes—either bagged and removed or mulched where appropriate, depending on your preference." },
      { q: "Can you fix bald patches?", a: "Yes. We can seed and top-dress patches and advise on watering and mowing height to help it recover." },
    ],
  },
  {
    slug: "hedge-trimming",
    label: "Hedge Trimming & Pruning",
    navDesc: "Hedges, shrubs and small tree pruning",
    cardDesc:
      "Neat hedges and healthy shrubs—trimmed evenly, shaped well, and cleared up properly after.",
    heroHeadline: "Neat hedges, healthier growth—trimmed evenly and cleared away",
    heroDescription:
      "From quick tidy-ups to reductions and reshaping, we cut cleanly, manage access safely, and leave the garden looking sharp.",
    includedBullets: [
      "Hedge trimming and shaping",
      "Shrub pruning and cut-back",
      "Height reduction where suitable",
      "Green waste removal (optional)",
    ],
    processSteps: [
      { title: "Scope & access", description: "We confirm height, shape and any access needs." },
      { title: "Trim & shape", description: "Clean lines, even faces, and careful cuts." },
      { title: "Clean-up", description: "Rake, bag and tidy so you’re not left with a mess." },
      { title: "Aftercare", description: "Simple advice to keep growth healthy." },
    ],
    faqs: [
      { q: "Can you reduce the height of a hedge?", a: "Often yes, depending on the hedge type and condition. We’ll advise on what’s healthy and achievable." },
      { q: "Do you take the waste away?", a: "Yes—waste removal can be included." },
      { q: "Will you shape hedges neatly?", a: "Yes. We aim for crisp, even lines and a tidy finish." },
    ],
  },
  {
    slug: "garden-clearance",
    label: "Garden Clearance & Waste Removal",
    navDesc: "Overgrown gardens cleared and reset",
    cardDesc:
      "Overgrown garden? We clear brambles, cut back, remove waste and leave you with a usable space again.",
    heroHeadline: "Overgrown garden cleared fast—cut back, cleared out, and reset",
    heroDescription:
      "Ideal for end-of-tenancy, house sales, or seasonal reset. We clear responsibly and leave the space tidy and usable.",
    includedBullets: ["Cut back overgrowth", "Brambles/ivy removal", "Bagging and waste removal", "Final tidy and sweep"],
    processSteps: [
      { title: "Walkthrough", description: "We confirm what’s staying, what’s going, and access." },
      { title: "Clear & cut back", description: "Systematic clearance with safe tool use." },
      { title: "Load & remove", description: "Waste removal included if requested." },
      { title: "Final tidy", description: "Paths/patios swept and the space left neat." },
    ],
    faqs: [
      { q: "Can you do same-day clearances?", a: "Sometimes—depending on workload. Send your postcode and a couple of photos for quickest advice." },
      { q: "Do you remove all the waste?", a: "Yes, if included in the quote. We can also leave a neat pile if you prefer." },
      { q: "Can you clear brambles and ivy?", a: "Yes. We cut back and remove where practical and safe, then tidy the area." },
    ],
  },
  {
    slug: "fencing-decking",
    label: "Fencing & Decking",
    navDesc: "Repairs, replacements and new installs",
    cardDesc:
      "New fence panels, posts and gates—or decking repairs and refreshes—installed straight and built to last.",
    heroHeadline: "Fencing and decking—installed straight, finished neatly",
    heroDescription:
      "We repair and replace damaged fencing and tidy up tired decking so your outdoor space looks smart and feels secure.",
    includedBullets: ["Fence panel replacement", "Posts and gravel boards", "Gate fitting and adjustments", "Decking repairs and maintenance"],
    processSteps: [
      { title: "Measure & assess", description: "We check spans, levels, and what needs replacing." },
      { title: "Written quote", description: "Clear materials and scope so you can compare." },
      { title: "Install", description: "Straight lines, secure fixings, tidy work area." },
      { title: "Finish", description: "Final alignment checks and clean-up." },
    ],
    faqs: [
      { q: "Can you replace just a few panels?", a: "Yes—spot replacements are common if posts are still sound." },
      { q: "Do you repair storm-damaged fencing?", a: "Yes. We can make it safe quickly and follow up with a proper repair or replacement." },
      { q: "Can you supply materials?", a: "Yes. Supply and fit can be included in the quote." },
    ],
  },
  {
    slug: "emergency-garden-call-outs",
    label: "Emergency Garden Call-outs",
    navDesc: "Storm clear-ups and urgent make-safe work",
    cardDesc:
      "Fallen branches, storm mess, unsafe panels—rapid make-safe and clean-up to prevent further problems.",
    heroHeadline: "Urgent garden help—storm clean-up and make‑safe call‑outs",
    heroDescription:
      "If something’s unsafe or causing damage, we can make it safe quickly, clear hazards, and advise on next steps.",
    includedBullets: [
      "Storm debris and fallen branch clearance",
      "Make-safe loose panels/gates",
      "Urgent cut-back to restore access",
      "Tidy-up and disposal options",
    ],
    processSteps: [
      { title: "Quick details", description: "Postcode + photos if possible for fastest advice." },
      { title: "Attend & make safe", description: "We prioritise safety and preventing further damage." },
      { title: "Clear hazards", description: "Debris removed and access restored where possible." },
      { title: "Follow-up plan", description: "If more work is needed, we provide a clear scope." },
    ],
    faqs: [
      { q: "What counts as an emergency call-out?", a: "Anything unsafe or causing damage—fallen branches, storm debris, broken panels, blocked access." },
      { q: "Do you work weekends?", a: "Emergency availability varies—send details and we’ll advise quickly." },
      { q: "Can you remove waste on the day?", a: "Often yes. If not, we’ll leave it safe and tidy and arrange follow-up removal." },
    ],
  },
];

export const SERVICE_OPTIONS = SERVICES.map((s) => s.label);

export function getServiceBySlug(slug: Service["slug"]): Service {
  const found = SERVICES.find((s) => s.slug === slug);
  if (!found) throw new Error(`Unknown service slug: ${slug}`);
  return found;
}

