

import HomeDoctorContent from "@/app/components/services/HomeDoctorContent";
import { imgDoctorAtHome } from "@/lib/assets";


import type { Metadata } from "next";
import JsonLd from "../components/seo/JsonLd";
import { createPageSchema } from "@/lib/seo-schema";
const BASE_URL = "https://curoaid.com";
const PAGE_URL = `${BASE_URL}/doctor-at-home`;
export const metadata: Metadata = {
  title: "Doctor at Home | Book a Home Visit Doctor – CuroAid",

  description:
    "Need a doctor at home? CuroAid connects you with professional doctors for convenient home visits, personalised medical care and healthcare support at home.",

  keywords: [
    "doctor at home",
    "doctor home visit",
    "doctor consultation at home",
    "home doctor",
    "doctor home service",
    "medical care at home",
    "CuroAid",
  ],

  openGraph: {
    title: "Doctor at Home | CuroAid",

    description:
      "Professional doctor consultation and medical care delivered to your doorstep.",

    images: [
      {
        url: imgDoctorAtHome,
        width: 1200,
        height: 630,
        alt: "CuroAid Doctor at Home Services",
      },
    ],
  },
};

const schema = createPageSchema({
  name: "Doctor at Home",
  path: "doctor-at-home",
  description:
    "Home doctor visits and healthcare support provided through CuroAid.",
});
export default function DoctorAtHomePage() {
  return (
    <>

      <JsonLd data={schema} />
      <HomeDoctorContent />
    </>
  );
}