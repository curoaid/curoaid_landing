import { getServiceFaqs } from "@/lib/faq";
import ServiceDesign, { ServiceData } from "./servicedetailspage/ServiceDesign";

import {
    bloodTestBanner,
    bloodTestImage,
    blood1,
    blood2,
    blood3,
    blood4,
    blood5,
    blood6,
    blood7,
    blood8,
    imgWhyChoose,
    tick,
    imgStepIcon1,
    imgStepIcon2,
    imgStepIcon3,
    imgStepIcon4,
    imgCtaBanner,
} from "@/lib/assets";

export const bloodTestData: ServiceData = {
    hero: {
        badge: "Professional Blood Test at Home",
        title: "Blood Test at Home",
        description:
            "Get convenient blood sample collection at your doorstep with CuroAid, making routine diagnostic testing easier and more comfortable.",
        image: "https://vathala-bucket.s3.ap-south-1.amazonaws.com/1790166431091/bloodTestBanner.webp",
        imageAlt: "Blood test sample collection at home",
        button: "Book Now",
    },

    introduction: {
        title: "Convenient Blood Testing at Home",
        description:
            "CuroAid helps you access convenient diagnostic sample collection from the comfort of your home. Our home blood test service is suitable for individuals who prefer doorstep sample collection for routine and other appropriate diagnostic tests.",
        image: bloodTestImage,
        imageAlt: "CuroAid blood sample collection at home",
        button: "Book Blood Test",
    },

    services: {
        badge: "SERVICES",
        title: "Our Home Blood Test Services",
        description:
            "Convenient diagnostic sample collection designed around your healthcare needs.",
        items: [
            {
                title: "Routine Blood Tests",
                description:
                    "Convenient home sample collection for appropriate routine blood investigations.",
                image: blood1,
                imageAlt: "Routine blood test at home",
            },
            {
                title: "Complete Blood Count",
                description:
                    "Home sample collection for CBC testing when recommended by a healthcare professional.",
                image: blood2,
                imageAlt: "Complete blood count test",
            },
            {
                title: "Blood Sugar Testing",
                description:
                    "Convenient sample collection for appropriate blood glucose investigations.",
                image: blood3,
                imageAlt: "Blood sugar test",
            },
            {
                title: "Lipid Profile",
                description:
                    "Home sample collection for cholesterol and lipid-related laboratory testing.",
                image: blood4,
                imageAlt: "Lipid profile blood test",
            },
            {
                title: "Thyroid Testing",
                description:
                    "Convenient blood sample collection for appropriate thyroid-related investigations.",
                image: blood5,
                imageAlt: "Thyroid blood test",
            },
            {
                title: "Vitamin Testing",
                description:
                    "Home sample collection for selected vitamin and nutritional investigations.",
                image: blood6,
                imageAlt: "Vitamin blood test",
            },
            {
                title: "Health Screening Tests",
                description:
                    "Convenient sample collection for selected preventive and health screening packages.",
                image: blood7,
                imageAlt: "Health screening blood test",
            },
            {
                title: "Diagnostic Blood Tests",
                description:
                    "Access home sample collection for a range of appropriate diagnostic blood investigations.",
                image: blood8,
                imageAlt: "Diagnostic blood testing",
            },

        ],
    },

    whyChoose: {
        badge: "WHY CHOOSE",
        title: "Why Choose CuroAid for Blood Tests?",
        description: (
            <>
                CuroAid makes diagnostic sample collection more convenient by bringing
                the service closer to you, with a focus on{" "}
                <strong className="font-semibold text-black">
                    convenience, comfort, professional support and reliable coordination.
                </strong>
            </>
        ),
        image: imgWhyChoose,
        imageAlt: "CuroAid home blood test service",

        items: [
            {
                title: "Home Sample Collection",
                description:
                    "Get your blood sample collected conveniently at your doorstep.",
                icon: tick,
            },
            {
                title: "Convenient Scheduling",
                description:
                    "Choose a suitable appointment based on service availability.",
                icon: tick,
            },
            {
                title: "Professional Collection",
                description:
                    "Sample collection is handled by trained healthcare personnel.",
                icon: tick,
            },
            {
                title: "Comfort at Home",
                description:
                    "Avoid unnecessary travel and waiting at a diagnostic centre.",
                icon: tick,
            },
            {
                title: "Support for Elderly Patients",
                description:
                    "Home collection can be particularly convenient for senior citizens.",
                icon: tick,
            },
            {
                title: "Easy Coordination",
                description:
                    "Our team helps coordinate your sample collection requirements.",
                icon: tick,
            },
        ],
    },

    booking: {
        badge: "HOW TO BOOK",
        title: "How to Book a Blood Test at Home",
        description:
            "Booking a home blood test with CuroAid is simple and convenient.",
        image: bloodTestBanner,
        imageAlt: "Book blood test at home",
        button: "Book Blood Test",

        steps: [
            {
                num: "01",
                title: "Choose Your Test",
                description:
                    "Select the blood test or diagnostic service you require.",
                icon: imgStepIcon1,
            },
            {
                num: "02",
                title: "Share Patient Details",
                description:
                    "Provide the patient's details, location and preferred date and time for sample collection.",
                icon: imgStepIcon2,
            },
            {
                num: "03",
                title: "Confirm Your Appointment",
                description:
                    "Our team will review your requirements and coordinate the home sample collection.",
                icon: imgStepIcon3,
            },
            {
                num: "04",
                title: "Sample Collection at Home",
                description:
                    "A trained healthcare professional visits your home for the required sample collection.",
                icon: imgStepIcon4,
            },
        ],
    },

    cta: {
        title: "Need a Blood Test at Home?",
        description:
            "Make diagnostic sample collection easier with convenient home blood testing from CuroAid.",
        image: imgCtaBanner,
        imageAlt: "Blood test sample collection at home",
        button: "Book Blood Test",
    },

    faq: {
        badge: "FAQ",
        title: "Frequently Asked Questions",
        items: [
            {
                question: "Can I get a blood test at home?",
                answer:
                    "Yes. CuroAid provides home sample collection for selected blood and diagnostic tests based on service availability.",
            },
            {
                question: "What blood tests can be done at home?",
                answer:
                    "Depending on availability, home sample collection may be available for routine blood investigations, CBC, blood sugar, lipid profile, thyroid tests, vitamin tests and other appropriate diagnostic tests.",
            },
            {
                question: "Is fasting required for a blood test?",
                answer:
                    "Some blood tests may require fasting while others may not. Please follow the preparation instructions provided for the specific test or by your healthcare professional.",
            },
            {
                question: "Can elderly patients book blood tests at home?",
                answer:
                    "Yes. Home sample collection can be a convenient option for elderly patients who may have difficulty travelling to a diagnostic centre.",
            },
            {
                question: "How do I book a blood test at home?",
                answer:
                    "Choose the required test, provide the patient's details and preferred appointment information, and our team will help coordinate the sample collection.",
            },
            {
                question: "How will I receive my test results?",
                answer:
                    "Test reports are provided according to the process followed by the associated diagnostic laboratory. Our team can help coordinate the required service.",
            },
        ],
    },
};

export default async function BloodTestContent() {

    // Fetch Blood Test FAQs from API
    const bloodTestFaqs = await getServiceFaqs("Blood Test");

    // Update only FAQ data
    const updatedData: ServiceData = {
        ...bloodTestData,

        faq: {
            ...bloodTestData.faq,

            items:
                bloodTestFaqs.length > 0
                    ? bloodTestFaqs.map((faq) => ({
                        question: faq.question,
                        answer: faq.answer,
                    }))
                    : bloodTestData.faq.items,
        },
    };

    return <ServiceDesign data={updatedData} />;
}