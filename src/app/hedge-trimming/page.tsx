import type { Metadata } from "next";
import React from "react";

import { ServiceLandingPage, buildServiceMetadata } from "../../components/ServiceLandingPage";
import { getServiceBySlug } from "../../lib/services";

const service = getServiceBySlug("hedge-trimming");

export const metadata: Metadata = buildServiceMetadata(service);

export default function HedgeTrimmingPage() {
  return <ServiceLandingPage service={service} />;
}

