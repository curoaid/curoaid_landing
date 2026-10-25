import type { Metadata } from "next";
import HomeNursingContent from "@/app/components/services/HomeNursingContent";
import { imgHomeNursing } from "@/lib/assets";

export const metadata: Metadata = {
    title: "Home Nursing Services | Professional Home Care ",

    description:
        "Get reliable home nursing services with CuroAid. Receive professional nursing care, medication assistance, wound care and personalised support in the comfort of your home.",

    keywords: [
        "home nursing",
        "home nursing services",
        "nurse at home",
        "elderly care",
        "CuroAid",
    ],

    openGraph: {
        title: "Home Nursing Services | CuroAid",

        description:
            "Professional nursing care delivered to your doorstep.",

        images: [
            {
                url: imgHomeNursing,
                width: 1200,
                height: 630,
                alt: "CuroAid Home Nursing Services",
            },
        ],
    },
};

export default function HomeNursingPage() {
    return <HomeNursingContent />;
}