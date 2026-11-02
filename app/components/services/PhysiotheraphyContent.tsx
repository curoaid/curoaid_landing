import { physiotherapyBanner, physiotherapyImage, physio1, physio2, physio3, physio4, physio5, physio6, physio7, physio8, physio9, tick, imgStepIcon1, imgStepIcon2, imgStepIcon3, imgStepIcon4, imgCtaBanner } from "@/lib/assets";
import ServiceDesign, { ServiceData } from "./servicedetailspage/ServiceDesign";
import { getServiceFaqs } from "@/lib/faq";

const physiotherapyData: ServiceData = {
    hero: {
        badge: "Professional Physiotherapy at Home",
        title: "Physiotherapy at Home",
        description:
            "Get personalised physiotherapy and rehabilitation support from qualified professionals in the comfort of your home.",
        image: physiotherapyBanner,
        imageAlt: "Physiotherapist providing treatment at home",
        button: "Book Now",
    },

    introduction: {
        title: "Personalised Physiotherapy Care at Home",
        description:
            "CuroAid provides convenient physiotherapy services for patients recovering from injuries, surgeries, mobility problems, movement difficulties and other physical conditions. Our physiotherapy support is designed to make rehabilitation more comfortable and convenient at home.",
        image: physiotherapyImage,
        imageAlt: "Physiotherapist providing treatment at home",
        button: "Book Physiotherapy",
    },

    services: {
        badge: "SERVICES",
        title: "Our Physiotherapy Services",
        description:
            "Professional rehabilitation and mobility support designed around your individual healthcare needs.",
        items: [
            {
                title: "Post-Surgery Rehabilitation",
                description:
                    "Structured physiotherapy support to help patients regain strength, movement and confidence during recovery after surgery.",
                image: physio1,
                imageAlt: "Post surgery physiotherapy",
            },
            {
                title: "Pain Management",
                description:
                    "Professional physiotherapy support focused on improving movement and helping manage appropriate muscle and joint discomfort.",
                image: physio2,
                imageAlt: "Pain management physiotherapy",
            },
            {
                title: "Mobility Training",
                description:
                    "Personalised exercises and mobility support to help improve movement, balance, strength and everyday physical function.",
                image: physio3,
                imageAlt: "Mobility physiotherapy training",
            },
            {
                title: "Elderly Physiotherapy",
                description:
                    "Gentle and personalised physiotherapy support for senior citizens who need help maintaining mobility, strength and independence.",
                image: physio4,
                imageAlt: "Elderly physiotherapy",
            },
            {
                title: "Sports Injury Rehabilitation",
                description:
                    "Physiotherapy support for appropriate sports and activity-related injuries with a focus on safe recovery and movement.",
                image: physio5,
                imageAlt: "Sports injury physiotherapy",
            },
            {
                title: "Stroke Rehabilitation",
                description:
                    "Individualised rehabilitation support for eligible patients working to improve movement and functional abilities after stroke.",
                image: physio6,
                imageAlt: "Stroke rehabilitation physiotherapy",
            },
            {
                title: "Neurological Physiotherapy",
                description:
                    "Specialised physiotherapy support for patients with appropriate neurological conditions affecting movement and daily activities.",
                image: physio7,
                imageAlt: "Neurological physiotherapy",
            },
            {
                title: "Orthopaedic Physiotherapy",
                description:
                    "Professional rehabilitation support for appropriate bone, joint, muscle and movement-related conditions.",
                image: physio8,
                imageAlt: "Orthopaedic physiotherapy",
            },
            {
                title: "Home Exercise Programs",
                description:
                    "Personalised exercise guidance to help patients continue appropriate rehabilitation and mobility activities at home.",
                image: physio9,
                imageAlt: "Home physiotherapy exercise program",
            },
        ],
    },

    whyChoose: {
        badge: "WHY CHOOSE",
        title: "Why Choose CuroAid Physiotherapy?",
        description: (
            <>
                At CuroAid, we make physiotherapy more convenient by bringing
                professional rehabilitation support directly to your home. Our
                approach focuses on{" "}
                <strong className="font-semibold text-black">
                    personalised care, comfort, convenience and consistent support.
                </strong>
            </>
        ),
        image: "https://vathala-bucket.s3.ap-south-1.amazonaws.com/1790157754246/l2.webp",

        imageAlt: "CuroAid physiotherapy care at home",

        items: [
            {
                title: "Qualified Professionals",
                description:
                    "Receive physiotherapy support from trained professionals based on your individual requirements.",
                icon: tick,
            },
            {
                title: "Personalised Care",
                description:
                    "Physiotherapy sessions can be tailored around your condition, mobility and recovery goals.",
                icon: tick,
            },
            {
                title: "Care at Home",
                description:
                    "Get professional physiotherapy support in the comfort and privacy of your home.",
                icon: tick,
            },
            {
                title: "Convenient Scheduling",
                description:
                    "Choose a suitable time for your physiotherapy session based on service availability.",
                icon: tick,
            },
            {
                title: "Recovery Support",
                description:
                    "Get structured support throughout your rehabilitation and recovery journey.",
                icon: tick,
            },
            {
                title: "Family Convenience",
                description:
                    "Home-based physiotherapy makes it easier for family members to support the patient's recovery.",
                icon: tick,
            },
        ],
    },

    booking: {
        badge: "HOW TO BOOK",
        title: "How to Book Physiotherapy at Home",
        description:
            "Getting professional physiotherapy support at home is simple with CuroAid.",
        image: physiotherapyBanner,
        imageAlt: "Book physiotherapy at home",
        button: "Book Physiotherapy",

        steps: [
            {
                num: "01",
                title: "Choose Physiotherapy Service",
                description:
                    "Select the physiotherapy or rehabilitation service that matches your healthcare requirements.",
                icon: imgStepIcon1,
            },
            {
                num: "02",
                title: "Share Patient Details",
                description:
                    "Tell us about the patient's condition, mobility requirements, preferred date, time and location.",
                icon: imgStepIcon2,
            },
            {
                num: "03",
                title: "Speak With Our Team",
                description:
                    "Our care team will understand your requirements and guide you through the booking process.",
                icon: imgStepIcon3,
            },
            {
                num: "04",
                title: "Start Physiotherapy at Home",
                description:
                    "A suitable physiotherapy professional will provide care at your doorstep based on the confirmed service.",
                icon: imgStepIcon4,
            },
        ],
    },

    cta: {
        title: "Need Physiotherapy at Home?",
        description:
            "Get personalised physiotherapy and rehabilitation support without leaving your home.",
        image: imgCtaBanner,
        imageAlt: "Physiotherapy care at home",
        button: "Book Physiotherapy",
    },

    faq: {
        badge: "FAQ",
        title: "Frequently Asked Questions",
        items: [
            {
                question: "What is physiotherapy at home?",
                answer:
                    "Physiotherapy at home allows patients to receive appropriate physiotherapy and rehabilitation support in the comfort of their own home.",
            },
            {
                question: "Who can benefit from home physiotherapy?",
                answer:
                    "Home physiotherapy may be suitable for patients recovering from surgery or injury, elderly individuals with mobility difficulties, and patients requiring rehabilitation support. Suitability depends on the individual's condition and professional assessment.",
            },
            {
                question: "Can I book physiotherapy after surgery?",
                answer:
                    "Yes. Physiotherapy may be part of recovery after certain surgeries. The appropriate exercises and treatment plan should be determined by a qualified healthcare professional based on the patient's condition.",
            },
            {
                question: "Can elderly people receive physiotherapy at home?",
                answer:
                    "Yes. Home physiotherapy can be convenient for elderly individuals who require support with mobility, strength, balance or rehabilitation.",
            },
            {
                question: "How long does a physiotherapy session take?",
                answer:
                    "Session duration can vary depending on the patient's condition, treatment requirements and the physiotherapist's assessment.",
            },
            {
                question: "How do I book a physiotherapist at home?",
                answer:
                    "Choose the physiotherapy service, provide the patient's details and preferred schedule, and our team will help coordinate the appropriate service.",
            },
        ],
    },
};

// export default function PhysiotherapyContent() {
//     return <ServiceDesign data={physiotherapyData} />;
// }

export default async function PhysiotherapyContent() {
    const physiotherapyFaqs = await getServiceFaqs("Physiothraphy");

    const updatedData: ServiceData = {
        ...physiotherapyData,
        faq: {
            ...physiotherapyData.faq,
            items:
                physiotherapyFaqs.length > 0
                    ? physiotherapyFaqs.map((faq) => ({
                        question: faq.question,
                        answer: faq.answer,
                    }))
                    : physiotherapyData.faq.items,
        },
    };

    return <ServiceDesign data={updatedData} />;
}