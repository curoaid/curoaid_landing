import type { Metadata } from "next";
import ElderCareContent from "@/app/components/services/ElderCareContent";
import { elderCareImage } from "@/lib/assets";

export const metadata: Metadata = {
    title: "Elder Care Services at Home",

    description:
        "Compassionate and reliable elder care services at home for senior citizens, including daily assistance, companionship, mobility support and healthcare coordination with CuroAid.",

    keywords: [
        "elder care",
        "elder care services",
        "elderly care at home",
        "senior citizen care",
        "elderly care services",
        "old age care",
        "parents care at home",
        "CuroAid",
    ],

    openGraph: {
        title: "Elder Care Services at Home | CuroAid",

        description:
            "Choose CuroAid for trusted elder care services at home. Get personalised elderly care, daily living assistance, medication support and compassionate care for seniors.",

        images: [
            {
                url: elderCareImage,
                width: 1200,
                height: 630,
                alt: "CuroAid Elder Care Services",
            },
        ],
    },
};

export default function ElderCarePage() {
    return <ElderCareContent />;
}