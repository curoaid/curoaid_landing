
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import GradientButton from "../ui/GradientButton";

const STORAGE_KEY = "curoaid_rebranding_announcement_seen";

export default function VathalaAnnouncementPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem(STORAGE_KEY);

        if (!hasSeenPopup) {
            const timer = window.setTimeout(() => {
                setIsVisible(true);
            }, 800);

            return () => window.clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        localStorage.setItem(STORAGE_KEY, "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center
      justify-center overflow-y-auto bg-black/60
      p-3 backdrop-blur-sm sm:p-5 md:p-6"
            onClick={closePopup}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="announcement-title"
                className="relative my-auto max-h-[94dvh] w-full
        max-w-[440px] overflow-y-auto rounded-2xl
        bg-white shadow-2xl sm:max-h-[90dvh] sm:rounded-3xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={closePopup}
                    aria-label="Close announcement"
                    className="absolute right-3 top-3 z-20 flex
          h-8 w-8 items-center justify-center rounded-full
          bg-white/95 text-xl text-gray-700 shadow-md
          transition hover:bg-gray-100 sm:right-4 sm:top-4
          sm:h-9 sm:w-9 sm:text-2xl"
                >
                    &times;
                </button>

                {/* Header */}
                <div
                    className="bg-gradient-to-br from-[#0B6B5A] to-[#159C83]
          px-4 pb-6 pt-9 text-center text-white
          sm:px-6 sm:pb-9 sm:pt-10 md:px-7"
                >
                    <p className="mb-3 text-[10px] font-medium uppercase
          tracking-[2px] sm:text-xs sm:tracking-[3px]">
                        An Exciting New Chapter
                    </p>

                    <h2
                        id="announcement-title"
                        className="text-2xl font-bold leading-tight
            sm:text-3xl"
                    >
                        Vathala is now
                    </h2>

                    <h1 className="mt-1 text-4xl font-extrabold
          tracking-wide sm:text-5xl">
                        CuroAid
                    </h1>

                    <p className="mx-auto mt-3 max-w-xs text-xs
          leading-5 text-white/90 sm:mt-4 sm:text-sm sm:leading-6">
                        A new identity, with the same commitment
                        to trusted healthcare at home.
                    </p>
                </div>

                {/* Content */}
                <div className="px-4 pb-5 pt-5 text-center
        sm:px-7 sm:pb-8 sm:pt-6">

                    {/* Healthcare Icon */}
                    {/* <div className="mx-auto mb-4 flex h-12 w-12
          items-center justify-center rounded-full
          bg-[#E8F5F1] text-[#0B6B5A]
          sm:mb-5 sm:h-16 sm:w-16"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7 sm:h-9 sm:w-9"
              aria-hidden="true"
            >
              <path d="M12 3v18M3 12h18" />
              <path d="M7 7l10 10M17 7L7 17" />
            </svg>
          </div> */}

                    <h3 className="text-base font-bold text-gray-900
          sm:text-xl">
                        Same Trusted Care. New Identity.
                    </h3>

                    <p className="mx-auto mt-2 max-w-sm text-xs
          leading-5 text-gray-600 sm:mt-3 sm:text-sm sm:leading-6">
                        We are now CuroAid! Continue enjoying the
                        healthcare services you trust, under our
                        new brand name.
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="https://curoaid.com"
                        onClick={closePopup}

                    >
                        {/* Explore CuroAid */}
                    </Link>
                    <GradientButton
                        className="mt-5 flex w-full items-center justify-center rounded-xl
    px-5 py-3 text-center text-sm font-semibold text-white
    transition hover:shadow-lg
    sm:mt-7 sm:py-3.5 sm:text-base"
                        label="Explore CuroAid"
                        onClick={closePopup}
                    />
                    {/* Continue Browsing */}
                    <button
                        type="button"
                        onClick={closePopup}
                        className="mt-3 min-h-10 px-4 text-xs
            font-medium text-gray-500 transition
            hover:text-[#0B6B5A] sm:mt-4 sm:text-sm"
                    >
                        Continue Browsing
                    </button>

                </div>
            </div>
        </div>
    );
}
