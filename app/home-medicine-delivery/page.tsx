import type { Metadata } from "next";
import HomeMedicineDeliveryContent from "@/app/components/services/HomeMedicineDeliveryContent";
import { medicineImage } from "@/lib/assets";

export const metadata: Metadata = {
    title: "Home Medicine Delivery | Medicines Delivered ",

    description:
        "Get home medicine delivery with CuroAid. Enjoy convenient medicine delivery to your doorstep with reliable service for your healthcare and prescription medication needs.",

    keywords: [
        "home medicine delivery",
        "medicine delivery at home",
        "online medicine delivery",
        "medicine delivery service",
        "prescription medicine delivery",
        "medicine home delivery",
        "CuroAid",
    ],

    openGraph: {
        title: "Home Medicine Delivery | CuroAid",

        description:
            "Get your medicines delivered conveniently to your doorstep with CuroAid Home Medicine Delivery.",

        images: [
            {
                url: medicineImage,
                width: 1200,
                height: 630,
                alt: "CuroAid Home Medicine Delivery",
            },
        ],
    },
};

export default function HomeMedicineDeliveryPage() {
    return <HomeMedicineDeliveryContent />;
}