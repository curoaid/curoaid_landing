import type { Metadata } from "next";

import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import { ourTeamData } from "../components/Team/OurTeamData";
import OurTeamPage from "../components/Team/OurTeamPage";

export const metadata: Metadata = {
    title: "Our Team",
    description:
        "Meet the dedicated healthcare professionals and care team behind CuroAid, committed to providing trusted healthcare services at home.",

    keywords: [
        "CuroAid team",
        "CuroAid healthcare team",
        "healthcare professionals",
        "home healthcare team",
        "home healthcare professionals",
        "CuroAid doctors",
        "CuroAid nurses",
    ],

    alternates: {
        canonical: "https://curoaid.com/our-team",
    },

    openGraph: {
        title: "Our Team | CuroAid",
        description:
            "Meet the dedicated healthcare professionals behind CuroAid, providing trusted and compassionate healthcare services at home.",
        url: "https://curoaid.com/our-team",
        siteName: "CuroAid",
        type: "website",
        locale: "en_IN",
    },

    twitter: {
        card: "summary_large_image",
        title: "Our Team | CuroAid",
        description:
            "Meet the healthcare professionals behind CuroAid and our mission to deliver trusted healthcare at home.",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function OurTeam() {
    return (
        <>
            <Navbar />
            <OurTeamPage data={ourTeamData} />
            <Footer />
        </>
    );
}