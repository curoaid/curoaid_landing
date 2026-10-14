"use client";

import { useEffect, useRef } from "react";

declare global {
    interface Window {
        instgrm?: {
            Embeds: {
                process: () => void;
            };
        };
    }
}

const REELS = [
    "https://www.instagram.com/p/DdS5XCAPe2v",
    "https://www.instagram.com/p/DeRp9rktztS/",
    "https://www.instagram.com/p/DeMT0yEBmsE/",
    "https://www.instagram.com/p/Dd3t_BwSXPs/",
    "https://www.instagram.com/p/DdtZ2CRSGbf",
    "https://www.instagram.com/p/DcP63fbsDwu/",
    "https://www.instagram.com/p/Db7lAGxS9WM/",
    ""
];

export default function InstagramReels() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scriptId = "instagram-embed-script";

        const processEmbeds = () => {
            window.instgrm?.Embeds.process();
        };

        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            script.onload = processEmbeds;
            document.body.appendChild(script);
        } else {
            processEmbeds();
        }
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left:
                direction === "left"
                    ? -scrollRef.current.clientWidth * 0.8
                    : scrollRef.current.clientWidth * 0.8,
            behavior: "smooth",
        });
    };

    return (
        <section className="overflow-hidden bg-white py-14 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <span className="mb-3 inline-block rounded-full bg-[#eaf8fd] px-4 py-1.5 text-sm font-semibold text-[#1598c3]">
                        CUROAID ON INSTAGRAM
                    </span>

                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                        Follow Us on Instagram
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
                        Discover healthcare tips, service updates, and the care we bring
                        to your home.
                    </p>
                </div>

                <div className="relative">
                    <button
                        type="button"
                        onClick={() => scroll("left")}
                        aria-label="Previous Instagram reels"
                        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg sm:-left-4"
                    >
                        <span className="text-2xl" aria-hidden="true">‹</span>
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
                    >
                        {REELS.map((url) => (
                            <div
                                key={url}
                                className="w-[78%] flex-none snap-start overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm sm:w-[45%] lg:w-[calc((100%-4rem)/5)]"
                            >
                                <blockquote
                                    className="instagram-media !m-0 !w-full !max-w-none"
                                    data-instgrm-permalink={url}
                                    data-instgrm-version="14"
                                    style={{
                                        background: "#fff",
                                        border: 0,
                                        borderRadius: "16px",
                                        margin: 0,
                                        padding: 0,
                                        width: "100%",
                                    }}
                                >
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex aspect-[9/16] items-center justify-center bg-gray-50 text-sm font-medium text-[#1598c3]"
                                    >
                                        View Instagram Reel
                                    </a>
                                </blockquote>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => scroll("right")}
                        aria-label="Next Instagram reels"
                        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg sm:-right-4"
                    >
                        <span className="text-2xl" aria-hidden="true">›</span>
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <a
                        href="https://www.instagram.com/curoaidindia/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#4cc6f0] to-[#74c067] px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Visit Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}