import { getServiceFaqs } from "@/lib/faq";
import ServiceDesign, { ServiceData } from "./servicedetailspage/ServiceDesign";

import {
  nriElderCareBanner,
  nriElderCareImage,
  nri1,
  nri2,
  nri3,
  nri4,
  nri5,
  nri6,
  nri7,
  nri8,
  imgWhyChoose,
  tick,
  imgStepIcon1,
  imgStepIcon2,
  imgStepIcon3,
  imgStepIcon4,
  imgCtaBanner,
} from "@/lib/assets";

export const nriElderCareData: ServiceData = {
  hero: {
    badge: "Trusted Elder Care Support for NRIs",
    title: "NRI Elder Care Services in India",
    description:
      "Reliable healthcare and elder care support for families living abroad who want dependable care for their parents and elderly loved ones in India.",
    image: nriElderCareBanner,
    imageAlt: "NRI elder care services in India",
    button: "Book Now",
  },

  introduction: {
    title: "Care for Your Parents, Even When You Are Abroad",
    description:
      "Being away from your parents can make managing their healthcare and everyday needs difficult. CuroAid helps NRI families coordinate appropriate elder care, healthcare support and home-based services for their loved ones in India.",
    image: nriElderCareImage,
    imageAlt: "CuroAid NRI elder care service",
    button: "Book Elder Care",
  },

  services: {
    badge: "SERVICES",
    title: "Our NRI Elder Care Services",
    description:
      "Dedicated support to help families abroad coordinate care for their elderly loved ones in India.",
    items: [
      {
        title: "Elderly Care at Home",
        description:
          "Arrange reliable home-based support for your parents and elderly family members.",
        image: nri1,
        imageAlt: "Elderly care at home for NRI parents",
      },
      {
        title: "Doctor Visit Coordination",
        description:
          "Coordinate appropriate doctor consultations and home healthcare visits for elderly family members.",
        image: nri2,
        imageAlt: "Doctor visit coordination for NRI parents",
      },
      {
        title: "Nursing Care Support",
        description:
          "Arrange appropriate home nursing support based on your loved one's healthcare requirements.",
        image: nri3,
        imageAlt: "Nursing care for NRI parents",
      },
      {
        title: "Hospital Assistance",
        description:
          "Support with healthcare coordination when your parent or elderly family member requires hospital care.",
        image: nri4,
        imageAlt: "Hospital assistance for elderly parents",
      },
      {
        title: "Post-Hospitalisation Care",
        description:
          "Coordinate appropriate home-based support during recovery after hospitalisation.",
        image: nri5,
        imageAlt: "Post hospitalisation care for NRI parents",
      },
      {
        title: "Medicine & Appointment Support",
        description:
          "Help coordinate appropriate healthcare appointments and medication routines as advised by healthcare professionals.",
        image: nri6,
        imageAlt: "Healthcare appointment support for elderly",
      },
      {
        title: "Diagnostic Test Coordination",
        description:
          "Coordinate appropriate home sample collection and diagnostic testing requirements.",
        image: nri7,
        imageAlt: "Diagnostic testing support for elderly",
      },
      {
        title: "Daily Living Assistance",
        description:
          "Arrange appropriate assistance with everyday activities based on the senior's individual requirements.",
        image: nri8,
        imageAlt: "Daily assistance for NRI parents",
      }

    ],
  },

  whyChoose: {
    badge: "WHY CHOOSE",
    title: "Why Choose CuroAid for NRI Elder Care?",
    description: (
      <>
        When you live abroad, managing your parents' healthcare from a distance
        can be challenging. CuroAid helps bridge that gap by providing{" "}
        <strong className="font-semibold text-black">
          reliable coordination, personalised support, convenience and peace of
          mind for families.
        </strong>
      </>
    ),
    image: imgWhyChoose,
    imageAlt: "CuroAid NRI elder care support",

    items: [
      {
        title: "Support for NRI Families",
        description:
          "Help coordinate appropriate care for your parents while you are living abroad.",
        icon: tick,
      },
      {
        title: "Personalised Care",
        description:
          "Services can be arranged around the individual needs of your elderly loved one.",
        icon: tick,
      },
      {
        title: "Healthcare Coordination",
        description:
          "Coordinate appropriate doctors, nursing, diagnostics and other healthcare services.",
        icon: tick,
      },
      {
        title: "Care at Home",
        description:
          "Help your parents receive appropriate support in their familiar home environment.",
        icon: tick,
      },
      {
        title: "Family Communication",
        description:
          "Help families stay informed about their loved one's care requirements and service coordination.",
        icon: tick,
      },
      {
        title: "Reliable Local Support",
        description:
          "Access coordinated home healthcare support for elderly family members in India.",
        icon: tick,
      },
    ],
  },

  booking: {
    badge: "HOW TO BOOK",
    title: "How to Book NRI Elder Care Services",
    description:
      "Coordinating care for your parents in India is simple with CuroAid.",
    image: nriElderCareBanner,
    imageAlt: "Book NRI elder care services",
    button: "Book Elder Care",

    steps: [
      {
        num: "01",
        title: "Choose a Care Service",
        description:
          "Select the elder care or healthcare support your family member requires.",
        icon: imgStepIcon1,
      },
      {
        num: "02",
        title: "Share Your Parent's Details",
        description:
          "Provide your parent's care requirements, location, preferred schedule and relevant details.",
        icon: imgStepIcon2,
      },
      {
        num: "03",
        title: "Speak With Our Team",
        description:
          "Our team will understand the requirements and help coordinate the appropriate local service.",
        icon: imgStepIcon3,
      },
      {
        num: "04",
        title: "Care at Home",
        description:
          "The selected healthcare or elder care service is coordinated at your loved one's home.",
        icon: imgStepIcon4,
      },
    ],
  },

  cta: {
    title: "Worried About Your Parents Back Home?",
    description:
      "CuroAid helps NRI families coordinate reliable elder care and healthcare support for their loved ones in India.",
    image: imgCtaBanner,
    imageAlt: "NRI elder care support in India",
    button: "Book Elder Care",
  },

  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is NRI elder care?",
        answer:
          "NRI elder care helps families living abroad coordinate appropriate home-based elder care and healthcare support for their parents or elderly family members living in India.",
      },
      {
        question: "Can I arrange elder care for my parents from another country?",
        answer:
          "Yes. CuroAid can help coordinate appropriate elder care and healthcare services based on your parent's requirements and service availability.",
      },
      {
        question: "Can CuroAid arrange doctor visits for my parents?",
        answer:
          "Appropriate doctor consultation and home healthcare services can be coordinated based on your parent's requirements and local service availability.",
      },
      {
        question: "Can I arrange nursing care for my parents?",
        answer:
          "Yes. Home nursing support can be coordinated for appropriate healthcare requirements based on professional assessment and service availability.",
      },
      {
        question: "Can you help after my parent is discharged from hospital?",
        answer:
          "Yes. Appropriate post-hospitalisation home care and healthcare support can be coordinated based on the patient's requirements.",
      },
      {
        question: "Can diagnostic tests be arranged at home?",
        answer:
          "Home sample collection for appropriate diagnostic tests can be coordinated based on availability in the service location.",
      },
      {
        question: "How do I book NRI elder care?",
        answer:
          "Choose the required service, share your parent's details and location, and our team will help coordinate the appropriate care service.",
      },
    ],
  },
};
export default async function NriElderCareContent() {
  const nriFaqs = await getServiceFaqs("NRI Patient Care");

  const updatedData: ServiceData = {
    ...nriElderCareData,
    faq: {
      ...nriElderCareData.faq,
      items:
        nriFaqs.length > 0
          ? nriFaqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))
          : nriElderCareData.faq.items,
    },
  };

  return <ServiceDesign data={updatedData} />;
}