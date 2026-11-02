import { getServiceFaqs } from "@/lib/faq";
import ServiceDesign, { ServiceData } from "./servicedetailspage/ServiceDesign";

import {
  woundCareBanner,
  woundCareImage,
  wound1,
  wound2,
  wound3,
  wound4,
  wound5,
  wound6,
  wound7,
  wound8,
  wound9,
  imgWhyChoose,
  tick,
  imgStepIcon1,
  imgStepIcon2,
  imgStepIcon3,
  imgStepIcon4,
  imgCtaBanner,
} from "@/lib/assets";

export const woundCareData: ServiceData = {
  hero: {
    badge: "Professional Wound Care at Home",
    title: "Wound Care Services at Home",
    description:
      "Get professional wound dressing and ongoing wound care support at home, helping make appropriate wound management more convenient and comfortable.",
    image: woundCareBanner,
    imageAlt: "Professional wound care at home",
    button: "Book Now",
  },

  introduction: {
    title: "Professional Wound Care at Home",
    description:
      "CuroAid provides convenient home-based wound care and dressing support for appropriate wounds. Our services are designed to help patients who require regular wound management, especially those recovering after procedures or who find frequent travel to a healthcare facility difficult.",
    image: woundCareImage,
    imageAlt: "CuroAid wound care service at home",
    button: "Book Wound Care",
  },

  services: {
    badge: "SERVICES",
    title: "Our Wound Care Services",
    description:
      "Professional wound management and dressing support based on individual patient requirements.",
    items: [
      {
        title: "Wound Dressing",
        description:
          "Professional wound dressing support according to the patient's care requirements and clinical instructions.",
        image: wound1,
        imageAlt: "Wound dressing at home",
      },
      {
        title: "Post-Surgical Wound Care",
        description:
          "Convenient home-based wound care support for appropriate post-surgical wounds during recovery.",
        image: wound2,
        imageAlt: "Post surgical wound care",
      },
      {
        title: "Chronic Wound Care",
        description:
          "Ongoing dressing and wound management support for appropriate chronic wound cases.",
        image: wound3,
        imageAlt: "Chronic wound care at home",
      },
      {
        title: "Diabetic Wound Support",
        description:
          "Appropriate wound care support for patients with diabetes, based on professional assessment and care instructions.",
        image: wound4,
        imageAlt: "Diabetic wound care",
      },
      {
        title: "Pressure Sore Care",
        description:
          "Home-based support for appropriate pressure-related wounds and ongoing dressing requirements.",
        image: wound5,
        imageAlt: "Pressure sore wound care",
      },
      {
        title: "Bedridden Patient Wound Care",
        description:
          "Convenient wound management support for patients who have limited mobility or are confined to bed.",
        image: wound6,
        imageAlt: "Wound care for bedridden patient",
      },
      {
        title: "Wound Cleaning",
        description:
          "Professional wound cleaning and dressing support as recommended by the treating healthcare professional.",
        image: wound7,
        imageAlt: "Wound cleaning service",
      },
      {
        title: "Wound Monitoring",
        description:
          "Regular observation and care support to help monitor the wound according to the patient's care plan.",
        image: wound8,
        imageAlt: "Wound monitoring at home",
      },
      {
        title: "Elderly Wound Care",
        description:
          "Convenient home wound care support for senior citizens who require regular dressing assistance.",
        image: wound9,
        imageAlt: "Elderly wound care at home",
      },
    ],
  },

  whyChoose: {
    badge: "WHY CHOOSE",
    title: "Why Choose CuroAid Wound Care?",
    description: (
      <>
        CuroAid makes appropriate wound care more convenient by bringing
        professional support closer to patients, with a focus on{" "}
        <strong className="font-semibold text-black">
          comfort, hygiene, personalised care and reliable support.
        </strong>
      </>
    ),
    image: imgWhyChoose,
    imageAlt: "CuroAid professional wound care at home",

    items: [
      {
        title: "Professional Care",
        description:
          "Receive wound care support from trained healthcare professionals.",
        icon: tick,
      },
      {
        title: "Care at Home",
        description:
          "Get appropriate wound dressing support without unnecessary travel.",
        icon: tick,
      },
      {
        title: "Personalised Support",
        description:
          "Care is provided according to the patient's wound care requirements and instructions.",
        icon: tick,
      },
      {
        title: "Hygiene-Focused Care",
        description:
          "Professional wound care with appropriate attention to hygiene and cleanliness.",
        icon: tick,
      },
      {
        title: "Support for Elderly",
        description:
          "Convenient wound care support for senior citizens who may have difficulty travelling.",
        icon: tick,
      },
      {
        title: "Regular Care",
        description:
          "Home visits can help patients manage appropriate ongoing dressing requirements.",
        icon: tick,
      },
    ],
  },

  booking: {
    badge: "HOW TO BOOK",
    title: "How to Book Wound Care at Home",
    description:
      "Getting professional wound care support at home is simple with CuroAid.",
    image: woundCareBanner,
    imageAlt: "Book wound care at home",
    button: "Book Wound Care",

    steps: [
      {
        num: "01",
        title: "Choose Wound Care Service",
        description:
          "Select the wound dressing or wound care service you require.",
        icon: imgStepIcon1,
      },
      {
        num: "02",
        title: "Share Patient Details",
        description:
          "Tell us about the patient's wound care requirements, location and preferred date and time.",
        icon: imgStepIcon2,
      },
      {
        num: "03",
        title: "Speak With Our Team",
        description:
          "Our care team will understand your requirements and help coordinate the appropriate service.",
        icon: imgStepIcon3,
      },
      {
        num: "04",
        title: "Receive Wound Care at Home",
        description:
          "A suitable healthcare professional provides the required wound care support at your doorstep.",
        icon: imgStepIcon4,
      },
    ],
  },

  cta: {
    title: "Need Wound Care at Home?",
    description:
      "Get convenient professional wound dressing and care support at your doorstep with CuroAid.",
    image: imgCtaBanner,
    imageAlt: "Wound care service at home",
    button: "Book Wound Care",
  },

  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can wound dressing be done at home?",
        answer:
          "Yes. Appropriate wound dressing and care can be provided at home by trained healthcare professionals based on the patient's requirements and clinical instructions.",
      },
      {
        question: "What types of wounds can receive home care?",
        answer:
          "Home wound care may be suitable for certain post-surgical wounds, chronic wounds, pressure-related wounds and other appropriate cases. The suitability of home care depends on the patient's condition.",
      },
      {
        question: "Can I book wound care after surgery?",
        answer:
          "Yes. Home wound dressing support may be arranged for appropriate post-surgical wounds according to the treating healthcare professional's instructions.",
      },
      {
        question: "Can elderly patients receive wound care at home?",
        answer:
          "Yes. Home wound care can be a convenient option for elderly patients who require regular dressing support or have difficulty travelling to a healthcare facility.",
      },
      {
        question: "How often does a wound need dressing?",
        answer:
          "The required dressing frequency depends on the type and condition of the wound and should be determined by the treating healthcare professional.",
      },
      {
        question: "How do I book wound care at home?",
        answer:
          "Choose the wound care service, provide the patient's details and preferred appointment information, and our team will help coordinate the appropriate home visit.",
      },
    ],
  },
};

export default async function WoundCareContent() {
  const woundCareFaqs = await getServiceFaqs("Woundcare");

  const updatedData: ServiceData = {
    ...woundCareData,
    faq: {
      ...woundCareData.faq,
      items:
        woundCareFaqs.length > 0
          ? woundCareFaqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))
          : woundCareData.faq.items,
    },
  };

  return <ServiceDesign data={updatedData} />;
}