
"use client";

import { useState } from "react";
import Navbar from "@/app/components/home/Navbar";
import Footer from "@/app/components/home/Footer";
import EnquiryForm from "@/app/components/enquiryform/EnquiryForm";

export default function EnquiryPageclient() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <>
            {/* Hidden on every fresh page load */}
            {isSubmitted && <Navbar />}

            <EnquiryForm
                onSuccess={() => setIsSubmitted(true)}
            />

            {isSubmitted && <Footer />}
        </>
    );
}
