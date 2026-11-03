
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GradientButton from "../ui/GradientButton";
import{imgFinalisedLogo1,vathalalogo} from "@/lib/assets";
const STORAGE_KEY = "curoaid_rebranding_announcement_seen";

export default function VathalaAnnouncementPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const referrer = document.referrer;

        // Check whether visitor came from Google
        const isGoogleVisitor =
            referrer && /(^|\.)google\./i.test(new URL(referrer).hostname);

        const hasSeenPopup = localStorage.getItem(STORAGE_KEY);

        // Show for every Google referral,
        // or for visitors who haven't seen the popup before.
        if (isGoogleVisitor || !hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 800);

            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        localStorage.setItem(STORAGE_KEY, "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center
            overflow-y-auto bg-black/60 p-3 backdrop-blur-sm sm:p-5"
            onClick={closePopup}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="announcement-title"
                className="relative my-auto max-h-[94dvh] w-full max-w-[440px]
                overflow-y-auto rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={closePopup}
                    aria-label="Close announcement"
                    className="absolute right-3 top-3 z-20 flex h-8 w-8
                    items-center justify-center rounded-full bg-white
                    text-xl text-gray-700 shadow-md transition hover:bg-gray-100
                    sm:right-4 sm:top-4 sm:h-9 sm:w-9"
                >
                    &times;
                </button>

                {/* Header */}
                <div className="bg-gradient-to-br from-[#0B6B5A] to-[#159C83]
                    px-4 pb-6 pt-9 text-center text-white sm:px-6 sm:pb-8 sm:pt-10">

                    <p className="mb-4 text-[10px] font-semibold uppercase
                        tracking-[2px] sm:text-xs sm:tracking-[3px]">
                        An Exciting New Chapter
                    </p>

                    {/* Brand Logo Transition */}
                    <div className="mx-auto flex max-w-[340px] items-center
                        justify-center gap-3 sm:gap-5">

                        {/* Old Vathala Logo */}
                        <div className="flex w-[115px] flex-col items-center
                            gap-2 rounded-xl bg-white p-3 sm:w-[135px]">
                            <div className="relative h-12 w-full sm:h-14">
                                <Image
                                    src={vathalalogo}
                                    alt="Vathala logo"
                                    fill
                                    sizes="135px"
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xs font-semibold text-gray-600">
                                Vathala
                            </span>
                        </div>

                        {/* Transition Arrow */}
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-2xl font-bold text-white sm:text-3xl">
                                →
                            </span>
                            <span className="text-[9px] font-medium uppercase
                                tracking-wider text-white/80">
                                Now
                            </span>
                        </div>

                        {/* New CuroAid Logo */}
                        <div className="flex w-[115px] flex-col items-center
                            gap-2 rounded-xl bg-white p-3 sm:w-[135px]">
                            <div className="relative h-12 w-full sm:h-14">
                                <Image
                                    src={imgFinalisedLogo1}
                                    alt="CuroAid logo"
                                    fill
                                    sizes="300px"
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xs font-semibold text-[#0B6B5A]">
                                CuroAid
                            </span>
                        </div>
                    </div>

                    <h2
                        id="announcement-title"
                        className="mt-5 text-xl font-extrabold leading-tight
                        sm:text-xl"
                    >
                        Vathala is now CuroAid!
                    </h2>

                    <p className="mx-auto mt-1 max-w-xs text-xs leading-5
                        text-white/90 sm:text-sm sm:leading-6">
                        A new identity, with the same commitment to
                        trusted healthcare at home.
                    </p>
                </div>

                {/* Content */}
                <div className="px-4 pb-5 pt-4 text-center sm:px-7 sm:pb-8 sm:pt-5">

                    <h3 className="text-base font-bold text-gray-900 sm:text-xl">
                        Same Trusted Care. New Identity.
                    </h3>

                    <p className="mx-auto  max-w-sm text-xs leading-5
                        text-gray-600 sm:mt-1 sm:text-sm sm:leading-6">
                        We are now CuroAid! Continue enjoying the healthcare
                        services you trust, under our new brand name.
                    </p>

                    {/* CTA */}
                    <Link
                        href="https://curoaid.com"
                        onClick={closePopup}
                        className="block"
                    >
                        <GradientButton
                            className="mt-2 flex w-full items-center justify-center
                            rounded-xl px-5 py-3 text-center text-sm font-semibold
                            text-white transition hover:shadow-lg
                            sm:mt-4 sm:py-3.5 sm:text-base"
                            label="Explore CuroAid"
                            onClick={() => {}}
                        />
                    </Link>

                    {/* Continue Browsing */}
                    {/* <button
                        type="button"
                        onClick={closePopup}
                        className="mt-3 min-h-10 px-4 text-xs font-medium
                        text-gray-500 transition hover:text-[#0B6B5A] sm:mt-4 sm:text-sm"
                    >
                        Continue Browsing
                    </button> */}
                </div>
            </div>
        </div>
    );
}
