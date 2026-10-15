import type { Metadata } from "next";
import Contact from "@/app/components/contact/contact";
import JsonLd from "../components/seo/JsonLd";
import { createPageSchema } from "@/lib/seo-schema";


export const metadata: Metadata = {
  title: "Contact CuroAid | Home Healthcare Support & Assistance",

  description:
    "Contact CuroAid for trusted home healthcare services. Get assistance with doctor visits, nursing, physiotherapy, elder care and other healthcare needs at home.",

  keywords: [
    "Contact CuroAid",
    "CuroAid contact",
    "CuroAid healthcare",
    "home healthcare services",
    "healthcare at home",
    "CuroAid appointment",
    "home healthcare Chennai",
    "healthcare services Chennai",
  ],

  alternates: {
    canonical: "https://curoaid.com/contact",
  },

  openGraph: {
    title: "Contact CuroAid | Home Healthcare Services",
    description:
      "Get in touch with CuroAid for trusted home healthcare services, appointment support, and patient assistance.",
    url: "https://curoaid.com/contact",
    siteName: "CuroAid",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://curoaid.com/assets/contact-banner.webp",
        width: 1800,
        height: 650,
        alt: "Contact CuroAid for home healthcare services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact CuroAid | Home Healthcare Services",
    description:
      "Contact CuroAid for trusted home healthcare services and patient support.",
    images: ["https://curoaid.com/assets/contact-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
const schema = createPageSchema({
  name: "Contact CuroAid",
  path: "contact",
  description: "Contact CuroAid for information about our services.",
  type: "ContactPage",
});
export default function ContactPage() {
  return (


    <>
      <JsonLd data={schema} />

      <Contact />
    </>
  )

}