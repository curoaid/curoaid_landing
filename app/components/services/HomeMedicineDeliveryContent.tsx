import { getServiceFaqs } from "@/lib/faq";
import ServiceDesign, {
    ServiceData,
} from "./servicedetailspage/ServiceDesign";

import {
    nursebanner,
    r1,
    l3,
    l4,
    l5,
    l6,
    l8,
    l9,
    l10,
    l11,
    l12,
    tick,
    imgStepIcon1,
    imgStepIcon2,
    imgStepIcon3,
    imgStepIcon4,
    imgCtaBanner,
    medicineImage,
    medicineBannerImage,
} from "@/lib/assets";

const homeMedicineDeliveryData: ServiceData = {
    /* =========================
       HERO
    ========================= */
    hero: {
        badge: "Convenient Medicine Delivery, Right at Your Doorstep",
        title: "Home Medicine Delivery at Your Doorstep",
        description:
            "Get your medicines delivered conveniently to your home, making it easier to manage your healthcare without unnecessary trips to a pharmacy.",
        image: medicineImage,
        imageAlt: "Home medicine delivery service",
        button: "Order Medicines",
    },

    /* =========================
       INTRODUCTION
    ========================= */
    introduction: {
        title: "CuroAid Home Medicine Delivery",
        description:
            "At CuroAid Home Healthcare, we believe getting your medicines should be simple, convenient, and reliable. Our Home Medicine Delivery Service helps you receive your required medicines at your doorstep, so you can focus on your health without the hassle of visiting a pharmacy.",
        image: medicineBannerImage,
        imageAlt: "CuroAid home medicine delivery",
        button: "Order Now",
    },

    /* =========================
       SERVICES
    ========================= */
    services: {
        badge: "SERVICES",
        title: "Our Home Medicine Delivery Services",
        description:
            "Convenient medicine delivery designed to make managing your healthcare easier.",
        items: [
            {
                title: "Prescription Medicine Delivery",
                description:
                    "Get your prescribed medicines delivered conveniently to your home, subject to prescription and availability requirements.",
                image: l3,
                imageAlt: "Prescription medicine delivery",
            },
            {
                title: "Regular Medicine Delivery",
                description:
                    "Make managing your regular medications easier with convenient home delivery for ongoing healthcare needs.",
                image: l4,
                imageAlt: "Regular medicine delivery",
                featured: true,
            },
            {
                title: "Medicine Refills",
                description:
                    "Avoid last-minute pharmacy visits by arranging delivery of medicines that need to be refilled regularly.",
                image: l5,
                imageAlt: "Medicine refill delivery",
                featured: true,
            },
            {
                title: "Medicines for Elderly Family Members",
                description:
                    "Help your parents and elderly loved ones receive their required medicines at home without the need for frequent pharmacy visits.",
                image: l6,
                imageAlt: "Medicine delivery for elderly",
                featured: true,
            },
            {
                title: "Post-Hospitalization Medicines",
                description:
                    "Make recovery more convenient by arranging delivery of prescribed medicines needed after hospital discharge.",
                image: l8,
                imageAlt: "Post hospitalization medicine delivery",
                featured: true,
            },
            {
                title: "Family Medicine Delivery",
                description:
                    "Order medicines for your family members and have them conveniently delivered to your doorstep.",
                image: l9,
                imageAlt: "Family medicine delivery",
                featured: true,
            },
            {
                title: "Chronic Medication Support",
                description:
                    "Make it easier to manage long-term medications for conditions that require regular treatment and ongoing prescriptions.",
                image: l10,
                imageAlt: "Chronic medication support",
                featured: true,
            },
            {
                title: "Convenient Doorstep Delivery",
                description:
                    "Receive your medicines at your preferred delivery location, helping save time and reduce unnecessary travel.",
                image: l11,
                imageAlt: "Convenient doorstep medicine delivery",
                featured: true,
            },
        ],
    },

    /* =========================
       WHY CHOOSE CUROAID
    ========================= */
    whyChoose: {
        badge: "WHY CHOOSE",
        title: "Why Choose CuroAid?",
        description: (
            <>
                Getting your medicines should be simple and convenient. CuroAid
                helps bring essential medicine delivery closer to you, providing{" "}
                <strong className="font-semibold text-black">
                    convenience, reliability, and healthcare support
                </strong>{" "}
                for individuals, families, and elderly loved ones.
            </>
        ),
        image:
            "https://vathala-bucket.s3.ap-south-1.amazonaws.com/1790157754246/l2.webp",
        imageAlt: "CuroAid medicine delivery support",

        items: [
            {
                title: "Convenient Home Delivery",
                description:
                    "Get your required medicines delivered conveniently to your doorstep.",
                icon: tick,
            },
            {
                title: "Simple & Hassle-Free",
                description:
                    "Make ordering medicines easier without visiting a pharmacy every time.",
                icon: tick,
            },
            {
                title: "Support for Elderly Patients",
                description:
                    "Help senior citizens and loved ones receive their medicines conveniently at home.",
                icon: tick,
            },
            {
                title: "Prescription-Based Support",
                description:
                    "Prescription medicines can be arranged based on valid prescriptions and applicable requirements.",
                icon: tick,
            },
            {
                title: "Reliable Healthcare Convenience",
                description:
                    "Access essential healthcare support from the comfort of your home.",
                icon: tick,
            },
            {
                title: "Support for Families",
                description:
                    "Conveniently arrange medicine delivery for your family members when needed.",
                icon: tick,
            },
        ],
    },

    /* =========================
       HOW TO BOOK
    ========================= */
    booking: {
        badge: "HOW TO BOOK",
        title: "How to Book Our Home Medicine Delivery Service",
        description:
            "Getting your medicines delivered is simple and convenient with CuroAid.",
        image: nursebanner,
        imageAlt: "CuroAid home medicine delivery booking",
        button: "Order Medicines",

        steps: [
            {
                num: "01",
                title: "Login / Sign Up",
                description:
                    "Log in to your CuroAid account or create a new account to get started.",
                icon: imgStepIcon1,
            },
            {
                num: "02",
                title: "Choose Medicine Delivery",
                description:
                    "Select Home Medicine Delivery and provide the required details about your medicine needs.",
                icon: imgStepIcon2,
            },
            {
                num: "03",
                title: "Upload Prescription",
                description:
                    "If your medicines require a prescription, upload or provide a valid prescription as requested.",
                icon: imgStepIcon3,
            },
            {
                num: "04",
                title: "Confirm Your Order",
                description:
                    "Review your medicine details, delivery information, and order requirements before confirming.",
                icon: imgStepIcon4,
            },
        ],
    },

    /* =========================
       CTA
    ========================= */
    cta: {
        title: "Need Medicines Delivered to Your Home?",
        description:
            "CuroAid makes medicine delivery simple, convenient, and accessible from your doorstep.",
        image: imgCtaBanner,
        imageAlt: "Home medicine delivery",
        button: "Order Medicines",
    },

    /* =========================
       FAQ
    ========================= */
    faq: {
        badge: "FAQ",
        title: "Frequently asked questions",
        items: [
            {
                question: "Can I get my medicines delivered to my home?",
                answer:
                    "Yes. CuroAid Home Medicine Delivery helps you receive required medicines conveniently at your doorstep, subject to availability and applicable requirements.",
            },
            {
                question: "Do I need a prescription for all medicines?",
                answer:
                    "Prescription requirements depend on the medicine. Medicines that require a prescription can be arranged based on a valid prescription and applicable regulations.",
            },
            {
                question: "Can I order medicines for my elderly parents?",
                answer:
                    "Yes. You can arrange medicine delivery for elderly parents and family members based on their healthcare and medication requirements.",
            },
            {
                question: "Can I order regular medicines repeatedly?",
                answer:
                    "Yes. Regular medicine delivery and refills can help make ongoing medication management more convenient, subject to availability and prescription requirements.",
            },
            {
                question: "Can I order medicines after hospital discharge?",
                answer:
                    "Yes. You can arrange delivery of prescribed medicines required during post-hospitalization recovery, subject to prescription and availability requirements.",
            },
        ],
    },
};

export default async function HomeMedicineDelivery() {
    const medicineFaqs = await getServiceFaqs("Medicine Delivery");

    const updatedData: ServiceData = {
        ...homeMedicineDeliveryData,
        faq: {
            ...homeMedicineDeliveryData.faq,
            items:
                medicineFaqs.length > 0
                    ? medicineFaqs.map((faq) => ({
                        question: faq.question,
                        answer: faq.answer,
                    }))
                    : homeMedicineDeliveryData.faq.items,
        },
    };

    return <ServiceDesign data={updatedData} />;
}