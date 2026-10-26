
"use client";

import { whatsappicon,callicon } from "@/lib/assets";
import { useEffect, useState } from "react";

const phone = "919876543210"; // Replace with your number

export default function FloatingContactButtons() {
    const [activeButton, setActiveButton] = useState<"whatsapp" | "phone">(
        "whatsapp"
    );
    const [showPromo, setShowPromo] = useState(true);
    const [activePromo, setActivePromo] = useState(0);

    const promotions = [
        {
            title: "Download the Service App",
            href: "YOUR_SERVICE_APP_URL",
        },
        {
            title: "Download the Health Expert App",
            href: "YOUR_HEALTH_EXPERT_APP_URL",
        },
    ];

    useEffect(() => {
        // Show the initial promotion for 5 seconds only
        const promoTimer = setTimeout(() => {
            setShowPromo(false);
        }, 5000);

        // Alternate contact icons every 2 seconds
        const iconTimer = setInterval(() => {
            setActiveButton((current) =>
                current === "whatsapp" ? "phone" : "whatsapp"
            );
        }, 2000);

        return () => {
            clearTimeout(promoTimer);
            clearInterval(iconTimer);
        };
    }, []);

    return (
        <div className="fixed bottom-5 right-3 z-[9999] flex flex-col items-end gap-3 sm:bottom-6 sm:right-5">

            {/* Initial download promotion */}
            {/* {showPromo && (
                <a
                    href={promotions[activePromo].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-w-[260px] rounded-xl bg-white px-4 py-3
            text-sm font-semibold text-gray-800 shadow-xl
            ring-1 ring-black/5"
                >
                    {promotions[activePromo].title}
                    <span className="mt-1 block text-[#0875E1]">
                        Download now →
                    </span>
                </a>
            )} */}

            {/* WhatsApp icon */}
            <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with our team"
                className={`group relative transition-all duration-300 ${activeButton === "whatsapp" ? "block" : "hidden"
                    }`}
            >
                <span className="absolute right-full top-1/2 mr-3 hidden
          -translate-y-1/2 whitespace-nowrap rounded-lg bg-white
          px-4 py-3 text-sm font-semibold text-gray-800 shadow-xl
          group-hover:block">
                    Chat with our team
                </span>

                <img
                    src={whatsappicon}
                    alt=""
                    className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                />
            </a>

            {/* Phone icon */}
            <a
                href={`tel:+${phone}`}
                aria-label="Call our team"
                className={`group relative transition-all duration-300 ${activeButton === "phone" ? "block" : "hidden"
                    }`}
            >
                <span className="absolute right-full top-1/2 mr-3 hidden
          -translate-y-1/2 whitespace-nowrap rounded-lg bg-white
          px-4 py-3 text-sm font-semibold text-gray-800 shadow-xl
          group-hover:block">
                    Call our team
                </span>

                <img
                    src={callicon}
                    alt=""
                    className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                />
            </a>
        </div>
    );
}
