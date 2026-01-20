import type { Metadata } from "next";
import React from "react";

import { ServiceLandingPage, buildServiceMetadata } from "../../components/ServiceLandingPage";
import { getServiceBySlug } from "../../lib/services";

const service = getServiceBySlug("emergency-garden-call-outs");

export const metadata: Metadata = buildServiceMetadata(service);

export default function EmergencyGardenCallOutsPage() {
  return <ServiceLandingPage service={service} />;
}

