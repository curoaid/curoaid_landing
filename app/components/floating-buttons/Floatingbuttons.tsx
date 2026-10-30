
"use client";

import { whatsappicon, callicon } from "@/lib/assets";

const phone = "919876543210";

export default function FloatingContactButtons() {
    return (
        <div className="fixed bottom-5 right-3 z-[9999] flex flex-col items-end gap-3 sm:bottom-6 sm:right-5">

            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with our team"
                className="group relative transition-all duration-300 hover:scale-110"
            >
                <span className="absolute right-full top-1/2 mr-3 hidden
                    -translate-y-1/2 whitespace-nowrap rounded-lg bg-white
                    px-4 py-3 text-sm font-semibold text-gray-800 shadow-xl
                    group-hover:block">
                    Chat with our team
                </span>

                <img
                    src={whatsappicon}
                    alt="WhatsApp"
                    className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                />
            </a>

            {/* Phone Button */}
            <a
                href={`tel:+${phone}`}
                aria-label="Call our team"
                className="group relative transition-all duration-300 hover:scale-110"
            >
                <span className="absolute right-full top-1/2 mr-3 hidden
                    -translate-y-1/2 whitespace-nowrap rounded-lg bg-white
                    px-4 py-3 text-sm font-semibold text-gray-800 shadow-xl
                    group-hover:block">
                    Call our team
                </span>

                <img
                    src={callicon}
                    alt="Call"
                    className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                />
            </a>

        </div>
    );
}
