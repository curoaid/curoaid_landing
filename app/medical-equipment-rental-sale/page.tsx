import type { Metadata } from "next";
import MedicalEquipmentContent from "@/app/components/services/MedicalEquipmentContent";
import { medicalEquipmentImage } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Medical Equipment Rental & Sale",

  description:
    "Rent or buy medical equipment with CuroAid. Find reliable healthcare equipment for home use, including mobility aids and essential medical devices, with convenient service and support.",

  keywords: [
    "medical equipment rental",
    "medical equipment sale",
    "medical equipment on rent",
    "medical equipment for sale",
    "hospital equipment rental",
    "hospital bed rental",
    "wheelchair rental",
    "home medical equipment",
    "medical equipment hire",
    "CuroAid",
  ],

  openGraph: {
    title: "Medical Equipment Rental & Sale | CuroAid",

    description:
      "Convenient medical equipment rental and purchase options for home healthcare.",

    images: [
      {
        url: medicalEquipmentImage,
        width: 1200,
        height: 630,
        alt: "CuroAid Medical Equipment Rental and Sale",
      },
    ],
  },
};

export default function MedicalEquipmentPage() {
  return <MedicalEquipmentContent />;
}