
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/home/Navbar";
import Footer from "@/app/components/home/Footer";
import EnquiryForm from "@/app/components/enquiryform/EnquiryForm";
import { redirectToThankYou } from "@/lib/thank-you";

export default function EnquiryPageclient() {
    const router = useRouter();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSuccess = () => {
        setIsSubmitted(true);
        router.push("/thank-you");
        redirectToThankYou(router);
    }

    return (
        <>
            {/* Hidden on every fresh page load */}
            {isSubmitted && <Navbar />}

            <EnquiryForm
                onSuccess={handleSuccess}
            />

            {isSubmitted && <Footer />}
        </>
    );
}
