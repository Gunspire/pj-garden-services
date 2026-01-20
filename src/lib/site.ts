export const SITE = {
  companyName: "PJ Garden Services",
  phoneDisplay: "0800 123 4567",
  phoneTel: "08001234567",
  email: "hello@pjgardenservices.co.uk",
  whatsappNumberE164: "447700900000",
  whatsappPrefillText: "Hi PJ Garden Services — I'd like a free quote please.",
  serviceAreaPrimary: "London & the Home Counties",
  addressLine: "123 High Street, London, SW1A 1AA",
  hoursLine: "Mon–Fri: 8am - 6pm",
  imagePool: [
    "/bcc1cf07-cd42-45ed-b15b-ed9b314787d4.jpeg",
    "/a9020f9e-63a4-48ab-883f-901640e09209.jpeg",
    "/912ddbb7-5a7d-4700-94ad-2e6865dc9eb3.jpeg",
    "/9d33a0b7-c374-49f6-90d7-2cebcb73d53b.jpeg",
    "/d1a10833-9b63-4997-b481-eb914be31481.jpeg",
  ],
} as const;

function hashStringToInt(input: string) {
  // small deterministic hash (not for security)
  let h = 0;
  for (let i = 0; i < input.length; i += 1) h = (h * 31 + input.charCodeAt(i)) >>> 0;
  return h;
}

export function pickSiteImage(key: string, offset = 0) {
  const pool = SITE.imagePool;
  const idx = (hashStringToInt(key) + offset) % pool.length;
  return pool[idx];
}
