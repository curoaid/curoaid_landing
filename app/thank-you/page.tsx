
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thank You | CuroAid",
    description:
        "Your enquiry has been submitted successfully. The CuroAid care team will contact you shortly.",
    robots: {
        index: false,
        follow: false,
    },
};

const steps = [
    {
        number: "01",
        title: "Request Received",
        description: "Your enquiry has reached our team.",
    },
    {
        number: "02",
        title: "We'll Contact You",
        description: "Our team will connect with you shortly.",
    },
    {
        number: "03",
        title: "Personalized Care",
        description: "We'll help you find the right care.",
    },
];

export default function ThankYouPage() {
    return (
        <main className="min-h-[100svh] w-full bg-[#F5FAF8] flex flex-col">

            {/* Main Content */}
            <section className="flex-1 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-10">

                <div className="w-full max-w-3xl mx-auto">

                    <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(11,107,90,0.08)] overflow-hidden">

                        {/* Brand Gradient */}
                        <div className="h-1.5 bg-gradient-to-r from-[#4cc6f0] to-[#74c067]" />

                        <div className="px-5 py-8 sm:px-10 sm:py-12 md:px-14 md:py-14 text-center">

                            {/* Logo */}
                            <Link
                                href="/"
                                className="inline-block text-2xl sm:text-3xl font-bold text-[#0B6B5A] tracking-tight mb-7 sm:mb-9"
                            >
                                curoaid
                            </Link>

                            {/* Success Icon */}
                            <div className="mx-auto mb-6 sm:mb-8 w-[76px] h-[76px] sm:w-24 sm:h-24 rounded-full bg-[#E6F5EE] flex items-center justify-center border-[5px] border-[#D3EBDD]">

                                <svg
                                    className="w-10 h-10 sm:w-12 sm:h-12 text-[#0B6B5A]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m5 12 4 4L19 6" />
                                </svg>

                            </div>

                            {/* Success Label */}
                            <span className="inline-block bg-[#EAF6F0] text-[#0B6B5A] text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                                Submission Successful
                            </span>

                            {/* Heading */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                                Thank You!
                            </h1>

                            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-3">
                                Your enquiry has been submitted successfully.
                            </h2>

                            <p className="text-sm sm:text-base text-gray-500 leading-6 sm:leading-7 max-w-xl mx-auto">
                                Thank you for choosing CuroAid. We have received
                                your request, and our dedicated care team will
                                contact you shortly to assist you with your
                                healthcare needs.
                            </p>

                            {/* Divider */}
                            <div className="border-t border-gray-100 my-7 sm:my-10" />

                            {/* Next Steps */}
                            <div>

                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
                                    What Happens Next?
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">

                                    {steps.map((step) => (
                                        <div
                                            key={step.number}
                                            className="flex sm:flex-col items-center sm:items-center text-left sm:text-center gap-4 sm:gap-3 bg-[#F5FAF8] rounded-xl p-4 sm:p-5"
                                        >
                                            <div className="shrink-0 w-11 h-11 rounded-full bg-[#0B6B5A] text-white flex items-center justify-center font-bold text-sm">
                                                {step.number}
                                            </div>

                                            <div className="flex-1 sm:flex-none">
                                                <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">
                                                    {step.title}
                                                </h4>

                                                <p className="text-xs sm:text-sm text-gray-500 leading-5">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">

                                <Link
                                    href="/"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B6B5A] hover:bg-[#095748] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m3 10 9-7 9 7" />
                                        <path d="M5 9v12h14V9" />
                                        <path d="M9 21v-8h6v8" />
                                    </svg>
                                    Back to Home
                                </Link>

                                <Link
                                    href="/contact-us"
                                    className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-[#0B6B5A] text-[#0B6B5A] hover:bg-[#EAF6F0] font-semibold text-sm sm:text-base px-8 py-3 rounded-full transition-all duration-300"
                                >
                                    Contact Us
                                </Link>

                            </div>

                            {/* Footer Text */}
                            <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-100">

                                <p className="text-[#0B6B5A] font-semibold text-base sm:text-lg">
                                    CuroAid – We're Here to Care for You.
                                </p>

                                <p className="text-gray-400 text-xs sm:text-sm mt-2">
                                    Your health and well-being are our priority.
                                </p>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Copyright */}
            <footer className="text-center px-4 pb-4 sm:pb-5">
                <p className="text-gray-400 text-[11px] sm:text-xs">
                    © {new Date().getFullYear()} CuroAid. All rights reserved.
                </p>
            </footer>

        </main>
    );
}
