import { bloodTestImage, imgDoctorAtHome, imgEldercare, imgHomeNursing, imgPhysiotherapy, medicalEquipmentImage, medicineImage, nriElderCareImage, veterinaryImage, woundCareImage, yogaImage } from "@/lib/assets";



export type EnquiryService = {
    slug: string;
    title: string;
    shortTitle: string;
    headline: string;
    description: string;
    benefits: string[];
    image: string;
    seoTitle: string;
    seoDescription: string;
};

export const enquiryServices: EnquiryService[] = [
    {
        slug: "doctor-at-home",
        title: "Doctor at Home",
        shortTitle: "Home Doctor Consultation",
        headline: "Quality Medical Care, Right at Your Home",
        description:
            "Arrange convenient doctor consultations at home for routine check-ups, follow-up visits, and non-emergency health concerns.",
        benefits: [
            "Convenient consultations at home",
            "Personalized medical attention",
            "Support with follow-up care",
        ],
        image: imgDoctorAtHome,
        seoTitle: "Doctor at Home Enquiry | CuroAid",
        seoDescription:
            "Enquire about doctor consultations at home with CuroAid.",
    },
    {
        slug: "home-nursing-services",
        title: "Home Nursing Services",
        shortTitle: "Home Nursing",
        headline: "Professional Nursing Care at Home",
        description:
            "Enquire about nursing assistance for recovery, ongoing care, and everyday healthcare needs in the comfort of home.",
        benefits: [
            "Personalized nursing support",
            "Convenient care at home",
            "Assistance with recovery needs",
        ],
        image: imgHomeNursing,
        seoTitle: "Home Nursing Enquiry | CuroAid",
        seoDescription:
            "Enquire about professional home nursing services with CuroAid.",
    },
    {
        slug: "physiotherapy-at-home",
        title: "Physiotherapy at Home",
        shortTitle: "Home Physiotherapy",
        headline: "Move Better with Physiotherapy at Home",
        description:
            "Enquire about home-based physiotherapy to support mobility, rehabilitation, and movement goals with qualified professionals.",
        benefits: [
            "Convenient home sessions",
            "Individual rehabilitation support",
            "Personalized exercise guidance",
        ],
        image: imgPhysiotherapy,
        seoTitle: "Home Physiotherapy Enquiry | CuroAid",
        seoDescription:
            "Enquire about home physiotherapy and rehabilitation services.",
    },
    {
        slug: "elder-care-at-home",
        title: "Elder Care at Home",
        shortTitle: "Elderly Care",
        headline: "Compassionate Care for Your Loved Ones",
        description:
            "Explore personalized support for older adults, helping them access appropriate care and assistance in a familiar environment.",
        benefits: [
            "Personalized care arrangements",
            "Everyday assistance options",
            "Support for families and caregivers",
        ],
        image: imgEldercare,
        seoTitle: "Eldercare Enquiry | CuroAid",
        seoDescription:
            "Enquire about eldercare and home support services with CuroAid.",
    },
    {
        slug: "yoga-at-home",
        title: "Yoga at Home",
        shortTitle: "Yoga and Wellness",
        headline: "Bring Balance and Wellness into Your Life",
        description:
            "Explore guided yoga sessions suited to your experience, comfort, and personal wellness goals.",
        benefits: [
            "Guided movement and breathing",
            "Sessions suited to your needs",
            "Convenient wellness support",
        ],
        image: yogaImage,
        seoTitle: "Yoga Service Enquiry | CuroAid",
        seoDescription:
            "Enquire about yoga and wellness sessions with CuroAid.",
    },
    {
        slug: "wound-care-at-home",
        title: "Wound Care at Home",
        shortTitle: "Wound Care",
        headline: "Professional Wound Care at Home",
        description:
            "Arrange professional wound assessment, dressing support, and follow-up care according to the patient's needs.",
        benefits: [
            "Convenient dressing visits",
            "Professional wound care support",
            "Follow-up care coordination",
        ],
        image: woundCareImage,
        seoTitle: "Wound Care Enquiry | CuroAid",
        seoDescription:
            "Enquire about home-based wound care and dressing services.",
    },
    {
        slug: "blood-test-at-home",
        title: "Blood Test at Home",
        shortTitle: "Home Blood Testing",
        headline: "Convenient Blood Testing at Home",
        description:
            "Enquire about home blood sample collection and available testing services, subject to test availability and clinical requirements.",
        benefits: [
            "Enquire about home sample collection",
            "Convenient testing arrangements",
            "Support for routine monitoring",
        ],
        image: bloodTestImage,
        seoTitle: "Blood Test at Home Enquiry | CuroAid",
        seoDescription:
            "Enquire about blood tests and home sample collection with CuroAid.",
    },
    {
        slug: "nri-elder-care",
        title: "NRI Elder Care",
        shortTitle: "NRI Family Care",
        headline: "Reliable Healthcare Coordination for Families Abroad",
        description:
            "Enquire about healthcare arrangements and care coordination for parents and loved ones living in India while you are abroad.",
        benefits: [
            "Care coordination assistance",
            "Support for families living abroad",
            "Enquiries about available home services",
        ],
        image: nriElderCareImage,
        seoTitle: "NRI Elder Care Enquiry | CuroAid",
        seoDescription:
            "Enquire about healthcare coordination for families living abroad.",
    },
    {
        slug: "veterinary-doctor-home-visit",
        title: "Veterinary Doctor at Home",
        shortTitle: "Pet Healthcare",
        headline: "Convenient Veterinary Care for Your Pets",
        description:
            "Enquire about veterinary consultations and suitable home visit options for your pet, subject to local availability.",
        benefits: [
            "Convenient care arrangements",
            "Personalized attention for pets",
            "Consultation options for pet owners",
        ],
        image: veterinaryImage,
        seoTitle: "Veterinary Service Enquiry | CuroAid",
        seoDescription:
            "Enquire about veterinary care arrangements through CuroAid.",
    },
    {
        slug: "medical-equipment-rental-sale",
        title: "Medical Equipment Rental And Sale",
        shortTitle: "Medical Equipment",
        headline: "Medical Equipment for Home Care",
        description:
            "Enquire about medical equipment for home recovery and ongoing care, including available rental or purchase options.",
        benefits: [
            "Enquire about available equipment",
            "Explore rental or purchase options",
            "Arrange delivery information where available",
        ],
        image:medicalEquipmentImage,
        seoTitle: "Medical Equipment Enquiry | CuroAid",
        seoDescription:
            "Enquire about medical and hospital equipment for home care.",
    },
    {
        slug: "home-medicine-delivery",
        title: "Home Medicine Delivery",
        shortTitle: "Medicine Delivery",
        headline: "Convenient Medicine Delivery to Your Home",
        description:
            "Enquire about medicine delivery options and availability through CuroAid.",
        benefits: [
            "Convenient delivery enquiries",
            "Information about medicine availability",
            "Support with delivery arrangements",
        ],
        image: medicineImage,
        seoTitle: "Home Medicine Delivery Enquiry | CuroAid",
        seoDescription:
            "Enquire about home medicine delivery services with CuroAid.",
    },
];

export function getEnquiryService(slug: string) {
    return enquiryServices.find((service) => service.slug === slug);
}