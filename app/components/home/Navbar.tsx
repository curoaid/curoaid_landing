// "use client";

// import { imgFinalisedLogo1 } from "@/lib/assets";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";



// const services = [
//     {
//         name: "Home Doctor Services",
//         href: "/doctor-visit-athome",
//     },
//     {
//         name: "Nursing Services",
//         href: "/nursing",
//     },
//     {
//         name: "Wound Care Services",
//         href: "/wound-care",
//     },
//     {
//         name: "Elder Care",
//         href: "/elder-care",
//     },
//     {
//         name: "Veterinary Services",
//         href: "/veterinary",
//     },
//     {
//         name: "Physiotherapy",
//         href: "/physiotherapy",
//     },
//     {
//         name: "Yoga",
//         href: "/yoga",
//     },
//     {
//         name: "NRI Patient Care",
//         href: "/nri-patient-care",
//     },
//     {
//         name: "Hospital Equipment",
//         href: "/hospital-equipment",
//     },
//     {
//         name: "Renal Blood Test",
//         href: "/renal-blood-test",
//     },
// ];

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [servicesOpen, setServicesOpen] = useState(false);

//     return (
//         <header className="sticky top-0 z-50 bg-white shadow-sm">
//             <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">

//                 {/* Logo + Brand */}
//                 <Link href="/" className="flex items-center gap-4">

//                     <div className="w-[80px] h-[80px] rounded-[10px] overflow-hidden flex-shrink-0">
//                         <Image
//                             src={imgFinalisedLogo1}
//                             alt="CuroAid Logo"
//                             width={80}
//                             height={80}
//                             priority
//                             className="w-full h-full object-cover"
//                         />
//                     </div>

//                     <div className="flex flex-col justify-center">
//                         <span className="text-[30px] leading-[32px] font-bold text-black">
//                             CuroAid
//                         </span>

//                         <span className="text-[14px] leading-[18px] font-semibold text-black">
//                             Healthcare at Home
//                         </span>
//                     </div>
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden md:flex items-center gap-10">

//                     {/* <Link
//                         href="/"
//                         className="text-[#1b355a] text-[15px] font-medium hover:text-[#4cc6f0] transition-colors"
//                     >
//                         Home
//                     </Link> */}

//                     {/* Services Dropdown */}
//                     <div
//                         className="relative"
//                         onMouseEnter={() => setServicesOpen(true)}
//                         onMouseLeave={() => setServicesOpen(false)}
//                     >
//                         <button
//                             type="button"
//                             className="flex items-center gap-2 text-[#1b355a] text-[15px] font-medium hover:text-[#4cc6f0] transition-colors"
//                         >
//                             Services

//                             <svg
//                                 width="14"
//                                 height="14"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                             >
//                                 <path d="m6 9 6 6 6-6" />
//                             </svg>
//                         </button>

//                         {servicesOpen && (
//                             <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
//                                 <div className="w-[260px] bg-white rounded-xl shadow-xl border border-gray-100 py-2">

//                                     {services.map((service) => (
//                                         <Link
//                                             key={service.href}
//                                             href={service.href}
//                                             className="
//                         block
//                         px-5
//                         py-3
//                         text-[14px]
//                         font-medium
//                         text-[#1b355a]
//                         hover:bg-[#f4fbfd]
//                         hover:text-[#4cc6f0]
//                         transition-colors
//                       "
//                                         >
//                                             {service.name}
//                                         </Link>
//                                     ))}

//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     <Link
//                         href="/blogs"
//                         className="text-[#1b355a] text-[15px] font-medium hover:text-[#4cc6f0] transition-colors"
//                     >
//                         Blogs
//                     </Link>

//                     <Link
//                         href="/about"
//                         className="text-[#1b355a] text-[15px] font-medium hover:text-[#4cc6f0] transition-colors"
//                     >
//                         About Us
//                     </Link>
//                 </nav>

//                 {/* Contact */}
//                 <Link
//                     href="/contact"
//                     className="
//             hidden md:flex
//             items-center
//             justify-center
//             px-8
//             py-3
//             rounded-lg
//             text-white
//             text-[15px]
//             font-semibold
//             hover:opacity-90
//             transition-opacity
//             shadow-md
//           "
//                     style={{
//                         backgroundImage:
//                             "linear-gradient(124deg, #4cc6f0 12.67%, #74c067 85.05%)",
//                     }}
//                 >
//                     Contact Us
//                 </Link>

//                 {/* Mobile Menu Button */}
//                 <button
//                     type="button"
//                     className="md:hidden p-2"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                     aria-label="Toggle menu"
//                     aria-expanded={menuOpen}
//                 >
//                     <div className="w-6 h-0.5 bg-[#1b355a] mb-1.5" />
//                     <div className="w-6 h-0.5 bg-[#1b355a] mb-1.5" />
//                     <div className="w-6 h-0.5 bg-[#1b355a]" />
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {menuOpen && (
//                 <div className="md:hidden bg-white border-t px-6 py-4">

//                     <div className="flex flex-col gap-4">

//                         <Link
//                             href="/"
//                             onClick={() => setMenuOpen(false)}
//                             className="text-[#1b355a] text-[15px] font-medium"
//                         >
//                             Home
//                         </Link>

//                         {/* Mobile Services */}
//                         <button
//                             type="button"
//                             onClick={() => setServicesOpen(!servicesOpen)}
//                             className="flex items-center justify-between text-[#1b355a] text-[15px] font-medium"
//                         >
//                             <span>Services</span>

//                             <svg
//                                 width="16"
//                                 height="16"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 className={`transition-transform ${servicesOpen ? "rotate-180" : ""
//                                     }`}
//                             >
//                                 <path d="m6 9 6 6 6-6" />
//                             </svg>
//                         </button>

//                         {servicesOpen && (
//                             <div className="ml-4 flex flex-col gap-3 border-l-2 border-[#4cc6f0] pl-4">

//                                 {services.map((service) => (
//                                     <Link
//                                         key={service.href}
//                                         href={service.href}
//                                         onClick={() => setMenuOpen(false)}
//                                         className="text-[#1b355a] text-[14px] font-medium hover:text-[#4cc6f0]"
//                                     >
//                                         {service.name}
//                                     </Link>
//                                 ))}

//                             </div>
//                         )}

//                         <Link
//                             href="/blogs"
//                             onClick={() => setMenuOpen(false)}
//                             className="text-[#1b355a] text-[15px] font-medium"
//                         >
//                             Blogs
//                         </Link>

//                         <Link
//                             href="/about"
//                             onClick={() => setMenuOpen(false)}
//                             className="text-[#1b355a] text-[15px] font-medium"
//                         >
//                             About Us
//                         </Link>

//                         <Link
//                             href="/contact"
//                             onClick={() => setMenuOpen(false)}
//                             className="
//                 self-start
//                 px-6
//                 py-2.5
//                 rounded-lg
//                 text-white
//                 text-sm
//                 font-semibold
//               "
//                             style={{
//                                 backgroundImage:
//                                     "linear-gradient(124deg, #4cc6f0 12.67%, #74c067 85.05%)",
//                             }}
//                         >
//                             Contact Us
//                         </Link>

//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }

"use client";

import { imgFinalisedLogo1, imglogo, logo } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import GradientButton from "../ui/GradientButton";
import { useBooking } from "../booking/bookingprovider";


export const services = [
    { name: "Doctor at Home", href: "/doctor-at-home" },
    { name: "Home Nursing Services", href: "/home-nursing-services" },
    { name: "Physiotherapy at Home", href: "/physiotherapy-at-home" },
    { name: "Elder Care at Home", href: "/elder-care-at-home" },
    { name: "Yoga at Home", href: "/yoga-at-home" },
    { name: "Wound Care at Home", href: "/wound-care-at-home" },
    { name: "Blood Test at Home", href: "/blood-test-at-home" },
    { name: "NRI Elder Care", href: "/nri-elder-care" },
    { name: "Veterinary Doctor at Home", href: "veterinary-doctor-home-visit" },
    { name: "Medical Equipment Rental And Sale", href: "/medical-equipment-rental-sale" },
    { name: "Home Medicine Delivery  ", href: "/home-medicine-delivery" },


];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMobileMenu = () => {
        setMenuOpen(false);
        setMobileServicesOpen(false);
    };

    const toggleMobileMenu = () => {
        setMenuOpen((open) => {
            const nextState = !open;
            setMobileServicesOpen(nextState);
            return nextState;
        });
    };
    const{openBooking} = useBooking();

    return (
        <header className="relative z-50 w-full transition-all duration-300">
            <div className="relative mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-12">

                {/* Logo + Brand */}
                <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={`flex min-w-0 items-center transition-all duration-300 ease-in-out
                    ${scrolled
                            ? "max-md:pointer-events-none max-md:-translate-x-8 max-md:opacity-0"
                            : ""
                        }`}
                >
                    <Image
                        src={imglogo}
                        alt="CuroAid Healthcare at Home"
                        width={273}
                        height={68}
                        priority
                        sizes="(max-width: 640px) 190px, (max-width: 1024px) 225px, 273px"
                        className="h-auto w-[180px] object-contain sm:w-[210px] lg:w-[248px]"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-7 md:flex lg:gap-10">

                    {/* Services */}
                    <div
                        className="relative"
                        onMouseEnter={() => setDesktopServicesOpen(true)}
                        onMouseLeave={() => setDesktopServicesOpen(false)}
                    >
                        <button
                            type="button"
                            className="flex items-center gap-2 text-[16px] font-medium transition-colors hover:text-white/80"
                        >
                            Services

                            <ChevronDown
                                size={15}
                                strokeWidth={2}
                                className={`transition-transform duration-200 ${desktopServicesOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Services Dropdown */}
                        {desktopServicesOpen && (
                            <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                                <div className="w-[260px] overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                                    {services.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="block px-5 py-3 text-[14px] font-medium text-[#1b355a] transition-colors hover:bg-[#f4fbfd] hover:text-[#4cc6f0]"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Blogs */}
                    <Link
                        href="/blogs"
                        className="text-[16px] font-medium text-white transition-colors hover:text-white/80"
                    >
                        Blogs
                    </Link>

                    {/* About Us */}
                    <Link
                        href="/about-us"
                        className="text-[16px] font-medium text-white transition-colors hover:text-white/80"
                    >
                        About Us
                    </Link>

                    {/* Team */}
                    <Link
                        href="/our-team"
                        className="text-[16px] font-medium text-white transition-colors hover:text-white/80"
                    >
                        Team
                    </Link>
                     <Link
                        href="/contact"
                        className="text-[16px] font-medium text-white transition-colors hover:text-white/80"
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Desktop Contact */}
                <div
                    
                    className="hidden items-center justify-center md:flex"
                >
                    <GradientButton
                        className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
                        label="Book Now"
                        onClick={() => openBooking()}
                    />
                </div>

                {/* Mobile Menu Button */}
                <div className="fixed right-3 top-0 z-[100] flex h-[72px] items-center justify-end sm:right-5 md:hidden">
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1b355a] shadow-md transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/70 sm:h-12 sm:w-12"
                        aria-expanded={menuOpen}
                        aria-controls="curoaid-mobile-menu"
                        aria-haspopup="true"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? (
                            <X
                                className="h-5 w-5 sm:h-6 sm:w-6"
                                strokeWidth={2.25}
                            />
                        ) : (
                            <Menu
                                className="h-5 w-5 sm:h-6 sm:w-6"
                                strokeWidth={2.25}
                            />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Backdrop */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-[80] bg-black/10 backdrop-blur-[2px] md:hidden"
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Floating Menu */}
            {menuOpen && (
                <div
                    id="curoaid-mobile-menu"
                    className="fixed right-3 top-[72px] z-[90] max-h-[calc(100vh-88px)] w-[calc(100%-5rem)] max-w-[320px] overflow-y-auto overscroll-contain rounded-[24px] border border-white/80 bg-white/95 shadow-[0_15px_50px_rgba(27,53,90,0.16)] backdrop-blur-xl sm:right-4 sm:w-[calc(100%-5.5rem)] sm:max-w-[330px] md:hidden"
                    role="menu"
                    aria-label="Mobile navigation"
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className="px-5 py-5 sm:px-6 sm:py-6">

                        {/* Services */}
                        <button
                            type="button"
                            onClick={() =>
                                setMobileServicesOpen((open) => !open)
                            }
                            className="flex min-h-[44px] w-full items-center justify-between text-left text-[16px] font-medium leading-6 text-[#1b355a] sm:text-[17px]"
                            aria-expanded={mobileServicesOpen}
                        >
                            <span>Services</span>

                            <ChevronDown
                                className={`h-[18px] w-[18px] shrink-0 text-[#74a98c] transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                                    }`}
                                strokeWidth={1.8}
                            />
                        </button>

                        {/* Services Submenu */}
                        {mobileServicesOpen && (
                            <div className="mb-2 ml-1 border-l-2 border-[#dce7e3] pl-4 sm:pl-5">
                                {services.map((service) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        role="menuitem"
                                        onClick={closeMobileMenu}
                                        className="flex min-h-[40px] items-center text-[14px] font-medium leading-5 text-[#4b5554] transition-colors duration-200 hover:text-[#4cc6f0] sm:min-h-[42px] sm:text-[15px]"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Blogs */}
                        <Link
                            href="/blogs"
                            role="menuitem"
                            onClick={closeMobileMenu}
                            className="flex min-h-[44px] items-center text-[16px] font-medium leading-6 text-[#3f4847] transition-colors hover:text-[#4cc6f0] sm:text-[17px]"
                        >
                            Blogs
                        </Link>

                        {/* About */}
                        <Link
                            href="/about-us"
                            role="menuitem"
                            onClick={closeMobileMenu}
                            className="flex min-h-[44px] items-center text-[16px] font-medium leading-6 text-[#3f4847] transition-colors hover:text-[#4cc6f0] sm:text-[17px]"
                        >
                            About Us
                        </Link>
                         <Link
                            href="/contact"
                            role="menuitem"
                            onClick={closeMobileMenu}
                            className="flex min-h-[44px] items-center text-[16px] font-medium leading-6 text-[#3f4847] transition-colors hover:text-[#4cc6f0] sm:text-[17px]"
                        >
                            Contact Us
                        </Link>


                        {/* Contact */}
                        <div
                           
                            role="menuitem"
                            onClick={closeMobileMenu}
                            className="flex items-center text-[16px] font-medium leading-6 text-[#3f4847] transition-colors hover:text-[#4cc6f0]"
                        >
                            <GradientButton
                                className="px-4 py-2 text-xs sm:px-5 sm:py-2 sm:text-sm"
                                label="Book Now"
                            />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
