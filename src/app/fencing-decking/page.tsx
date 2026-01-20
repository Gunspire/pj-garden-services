import type { Metadata } from "next";
import React from "react";

import { ServiceLandingPage, buildServiceMetadata } from "../../components/ServiceLandingPage";
import { getServiceBySlug } from "../../lib/services";

const service = getServiceBySlug("fencing-decking");

export const metadata: Metadata = buildServiceMetadata(service);

export default function FencingDeckingPage() {
  return <ServiceLandingPage service={service} />;
}

