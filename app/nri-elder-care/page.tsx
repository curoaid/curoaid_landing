import type { Metadata } from "next";
import NriElderCareContent from "@/app/components/services/NriElderCareContent";
import { nriElderCareImage } from "@/lib/assets";

export const metadata: Metadata = {
  title: "NRI Elder Care Services in India",

  description:
    "Stay connected to your parents' well-being from abroad with CuroAid NRI elder care services. Get trusted elderly care, medical assistance and personalised support for your loved ones in India.",

  keywords: [
    "NRI elder care",
    "NRI parents care",
    "elder care for NRI parents",
    "parents care in India",
    "NRI healthcare services",
    "elderly care in India",
    "home care for NRI parents",
    "CuroAid",
  ],

  openGraph: {
    title: "NRI Elder Care Services in India | CuroAid",

    description:
      "Reliable elder care and healthcare support for NRI families and their parents in India.",

    images: [
      {
        url: nriElderCareImage,
        width: 1200,
        height: 630,
        alt: "CuroAid NRI Elder Care Services in India",
      },
    ],
  },
};

export default function NriElderCarePage() {
  return <NriElderCareContent />;
}