"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import BookingModal from "../ui/BookingModel";
import VathalaAnnouncementPopup from "../VathalaAnnouncementPopup/VathalaAnnouncementPopup";


export default function PopupManager() {
    const pathname = usePathname();

    const [isBookingOpen, setIsBookingOpen] = useState(false);

    // Exclude all enquiry pages
    const isExcluded =
        pathname === "/enquiry" ||
        pathname.startsWith("/enquiry/");

    if (isExcluded) return null;

    return (
        <>
            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
            />
            <VathalaAnnouncementPopup />
        </>
    );
}