import Image from "next/image";
import Link from "next/link";

import SectionBadge from "../ui/SectionBadge";
import {
    imgDoctorAtHome,
    imgHomeNursing,
    imgPhysiotherapy,
    imgPhysioIcon,
    imgWoundCare,
    bloodTestImage,
    imgNRI,
    imgEldercare,
    veterinaryImage,
    yogaImage,
    medicalEquipmentImage,
} from "@/lib/assets";

const services = [
    {
        title: "DOCTOR AT HOME",
        subtitle:
            "Professional medical consultation and care at your doorstep.",
        image: imgDoctorAtHome,
        icon: imgPhysioIcon,
        link: "/doctor-at-home",
    },
    {
        title: "HOME NURSING SERVICES",
        subtitle:
            "Professional nursing care and medical support delivered conveniently at your doorstep.",
        image: imgHomeNursing,
        icon: imgPhysioIcon,
        link: "/home-nursing-services",
    },
    {
        title: "PHYSIOTHERAPY AT HOME",
        subtitle:
            "Professional rehabilitation and physiotherapy services at home.",
        image: imgPhysiotherapy,
        icon: imgPhysioIcon,
        link: "/physiotherapy-at-home",
    },
    {
        title: "WOUND CARE SERVICES",
        subtitle:
            "Expert wound care and dressing services to support safe and effective healing at home.",
        image: imgWoundCare,
        icon: imgPhysioIcon,
        link: "/wound-care--at-home",
    },
    {
        title: "ELDER CARE",
        subtitle:
            "Compassionate and personalized care services to support the comfort and well-being of seniors at home.",
        image: imgEldercare,
        icon: imgPhysioIcon,
        link: "/elder-care-at-home",
    },
    {
        title: "VETERINARY SERVICES",
        subtitle:
            "Convenient veterinary consultation and healthcare services for your pets at home.",
        image: veterinaryImage,
        icon: imgPhysioIcon,
        link: "/veterinary-doctor-at-home",
    },
    {
        title: "YOGA AT HOME",
        subtitle:
            "Personalized yoga sessions at home to support flexibility, relaxation, fitness, and overall well-being.",
        image: yogaImage,
        icon: imgPhysioIcon,
        link: "/yoga-at-home",
    },
    {
        title: "NRI PATIENT CARE",
        subtitle:
            "Reliable healthcare support for your loved ones in India, with personalized assistance and regular care.",
        image: imgNRI,
        icon: imgPhysioIcon,
        link: "/nri-elder-care",
    },
    {
        title: "HOSPITAL EQUIPMENT",
        subtitle:
            "Quality medical equipment available for rental or purchase to support comfortable care at home.",
        image: medicalEquipmentImage,
        icon: imgPhysioIcon,
        link: "/medical-equipment-rental-sale",
    },
    {
        title: "BLOOD TEST AT HOME",
        subtitle:
            "Convenient blood sample collection at home for renal health monitoring and diagnostic testing.",
        image: bloodTestImage,
        icon: imgPhysioIcon,
        link: "/blood-test-at-home",
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12">

                {/* Section Header */}
                <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row">

                    <div>
                        <SectionBadge label="Services" />

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-black lg:text-[40px]">
                            Our Services
                        </h2>
                    </div>

                    <div className="lg:max-w-sm lg:pt-4 lg:text-right">
                        <p className="mb-2 text-[18px] font-semibold leading-relaxed text-black">
                            Complete Care, Designed Around Your Needs
                        </p>

                        <p className="text-sm leading-relaxed text-[#454646]">
                            Explore CuroAid&apos;s comprehensive range of home healthcare
                            services designed to meet different patient and family needs
                        </p>
                    </div>
                </div>

                {/* Services */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.link}
                            aria-label={`Learn more about ${service.title}`}
                            className="
                                relative
                                block
                                h-[380px]
                                cursor-pointer
                                overflow-hidden
                                rounded-2xl
                                shadow-md
                                group
                                focus:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-[#4cc6f0]
                                focus-visible:ring-offset-2
                            "
                        >
                            {/* Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="
                                    (max-width: 768px) 100vw,
                                    (max-width: 1024px) 50vw,
                                    33vw
                                "
                                className="
                                    object-cover
                                    transition-transform
                                    duration-700
                                    ease-out
                                    group-hover:scale-105
                                "
                            />

                            {/* Hover Content */}
                            <div
                                className="
                                    absolute
                                    bottom-4
                                    left-4
                                    right-4
                                    h-[68px]
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-white/20
                                    bg-black/55
                                    backdrop-blur-sm
                                    transition-all
                                    duration-500
                                    ease-out
                                    group-hover:h-[150px]
                                "
                            >
                                {/* Title */}
                                <div className="flex h-[68px] items-center gap-3 px-4">

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white/10
                                            transition-all
                                            duration-500
                                            group-hover:scale-105
                                            group-hover:bg-white/20
                                        "
                                    >
                                        <Image
                                            src={service.icon}
                                            alt=""
                                            width={40}
                                            height={40}
                                            className="h-10 w-10 object-contain"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <span
                                        className="
                                            text-base
                                            font-bold
                                            text-white
                                            transition-transform
                                            duration-500
                                            group-hover:translate-x-1
                                        "
                                    >
                                        {service.title}
                                    </span>
                                </div>

                                {/* Description */}
                                <div
                                    className="
                                        translate-y-3
                                        px-4
                                        opacity-0
                                        transition-all
                                        duration-500
                                        ease-out
                                        group-hover:translate-y-0
                                        group-hover:opacity-100
                                    "
                                >
                                    <p
                                        className="
                                            line-clamp-3
                                            text-sm
                                            leading-relaxed
                                            text-white/90
                                        "
                                    >
                                        {service.subtitle}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}