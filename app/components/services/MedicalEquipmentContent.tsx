import { getServiceFaqs } from "@/lib/faq";
import ServiceDesign, { ServiceData } from "./servicedetailspage/ServiceDesign";

import {
  medicalEquipmentBanner,
  medicalEquipmentImage,
  equipment1,
  equipment2,
  equipment3,
  equipment4,
  equipment5,
  equipment6,
  equipment7,
  equipment8,
  imgCtaBanner,
  imgWhyChoose,
  tick,
  imgStepIcon1,
  imgStepIcon2,
  imgStepIcon3,
  imgStepIcon4,
} from "@/lib/assets";

export const medicalEquipmentData: ServiceData = {
  hero: {
    badge: "Medical Equipment Rental & Sale",
    title: "Medical Equipment Rental & Sale",
    description:
      "Get access to essential medical equipment for home healthcare through convenient rental and purchase options with CuroAid.",
    image: medicalEquipmentBanner,
    imageAlt: "Medical equipment rental and sale",
    button: "Enquire Now",
  },

  introduction: {
    title: "Medical Equipment for Home Healthcare",
    description:
      "CuroAid helps patients and families access essential medical equipment for home healthcare needs. Depending on the equipment and availability, you can choose a suitable rental or purchase option based on your requirements.",
    image: medicalEquipmentImage,
    imageAlt: "Medical equipment for home healthcare",
    button: "Enquire Now",
  },

  services: {
    badge: "EQUIPMENT",
    title: "Our Medical Equipment",
    description:
      "Explore medical equipment suitable for different home healthcare and patient-care requirements.",
    items: [
      {
        title: "Hospital Beds",
        description:
          "Medical beds designed to support appropriate patient care and recovery requirements at home.",
        image: equipment1,
        imageAlt: "Hospital bed for home healthcare",
      },
      {
        title: "Wheelchairs",
        description:
          "Mobility equipment for patients who require assistance with movement at home or during travel.",
        image: equipment2,
        imageAlt: "Wheelchair for home healthcare",
      },
      {
        title: "Patient Care Equipment",
        description:
          "Selected equipment designed to support appropriate patient-care requirements at home.",
        image: equipment3,
        imageAlt: "Patient care medical equipment",
      },
      {
        title: "Mobility Aids",
        description:
          "Equipment designed to provide mobility support for patients and elderly individuals.",
        image: equipment4,
        imageAlt: "Medical mobility aids",
      },
      {
        title: "Oxygen Equipment",
        description:
          "Selected oxygen-related equipment available based on healthcare requirements and availability.",
        image: equipment5,
        imageAlt: "Oxygen equipment for home care",
      },
      {
        title: "Respiratory Care Equipment",
        description:
          "Equipment for appropriate respiratory care requirements at home, subject to availability.",
        image: equipment6,
        imageAlt: "Respiratory care equipment",
      },
      {
        title: "Patient Support Equipment",
        description:
          "Practical equipment designed to support everyday patient care and comfort.",
        image: equipment7,
        imageAlt: "Patient support equipment",
      },
      {
        title: "Recovery Equipment",
        description:
          "Selected medical equipment to support appropriate recovery and rehabilitation needs.",
        image: equipment8,
        imageAlt: "Medical recovery equipment",
      }

    ],
  },

  whyChoose: {
    badge: "WHY CHOOSE",
    title: "Why Choose CuroAid Medical Equipment?",
    description: (
      <>
        CuroAid makes access to medical equipment more convenient by providing
        suitable rental and purchase options, with a focus on{" "}
        <strong className="font-semibold text-black">
          convenience, reliability, flexibility and patient-care needs.
        </strong>
      </>
    ),
    image: imgWhyChoose,
    imageAlt: "CuroAid medical equipment service",

    items: [
      {
        title: "Rental & Purchase Options",
        description:
          "Choose between renting or purchasing selected equipment based on your requirements.",
        icon: tick,
      },
      {
        title: "Flexible Rental",
        description:
          "Rental options can be convenient for temporary recovery and short-term care requirements.",
        icon: tick,
      },
      {
        title: "Home Healthcare Support",
        description:
          "Access equipment suitable for appropriate patient-care requirements at home.",
        icon: tick,
      },
      {
        title: "Convenient Service",
        description:
          "Make it easier to arrange essential medical equipment without unnecessary effort.",
        icon: tick,
      },
      {
        title: "Equipment Guidance",
        description:
          "Our team can help you understand available equipment options and service details.",
        icon: tick,
      },
      {
        title: "Suitable for Different Needs",
        description:
          "Equipment options are available for different patient-care and recovery requirements.",
        icon: tick,
      },
    ],
  },

  booking: {
    badge: "HOW TO BOOK",
    title: "How to Rent or Buy Medical Equipment",
    description:
      "Getting the medical equipment you need is simple with CuroAid.",
    image: medicalEquipmentBanner,
    imageAlt: "Medical equipment rental and purchase",
    button: "Enquire Now",

    steps: [
      {
        num: "01",
        title: "Choose Your Equipment",
        description:
          "Select the medical equipment you require for your home healthcare needs.",
        icon: imgStepIcon1,
      },
      {
        num: "02",
        title: "Choose Rental or Purchase",
        description:
          "Tell us whether you are looking for a rental or purchase option.",
        icon: imgStepIcon2,
      },
      {
        num: "03",
        title: "Share Your Requirements",
        description:
          "Provide the equipment, quantity, location and duration required.",
        icon: imgStepIcon3,
      },
      {
        num: "04",
        title: "Confirm Your Order",
        description:
          "Our team will confirm availability, pricing and the next steps for rental or purchase.",
        icon: imgStepIcon4,
      },
    ],
  },

  cta: {
    title: "Need Medical Equipment at Home?",
    description:
      "Rent or purchase suitable medical equipment for your home healthcare requirements with CuroAid.",
    image: imgCtaBanner,
    imageAlt: "Medical equipment rental and sale",
    button: "Enquire Now",
  },

  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can I rent medical equipment from CuroAid?",
        answer:
          "Yes. Selected medical equipment may be available for rental depending on the equipment type, location and availability.",
      },
      {
        question: "Can I purchase medical equipment?",
        answer:
          "Yes. Selected medical equipment may also be available for purchase depending on availability.",
      },
      {
        question: "What medical equipment can I rent or buy?",
        answer:
          "Available equipment may include hospital beds, wheelchairs, mobility aids, patient-care equipment and other home healthcare equipment, depending on current availability.",
      },
      {
        question: "Is medical equipment available for short-term rental?",
        answer:
          "Selected equipment may be available for short-term rental, making it convenient for temporary recovery or home-care requirements.",
      },
      {
        question: "Can I rent equipment after hospital discharge?",
        answer:
          "Yes. Medical equipment may be arranged for appropriate post-hospitalisation home-care requirements, subject to equipment availability.",
      },
      {
        question: "How do I know which equipment I need?",
        answer:
          "The appropriate equipment depends on the patient's condition and care requirements. Where appropriate, consult your healthcare professional before selecting medical equipment.",
      },
      {
        question: "How do I enquire about medical equipment?",
        answer:
          "Select the equipment you require, tell us whether you want to rent or purchase it, and share your location and requirements. Our team will help confirm availability and the next steps.",
      },
    ],
  },
};

export default async function MedicalEquipmentContent() {
  const equipmentFaqs = await getServiceFaqs("Medical Equipment");

  const updatedData: ServiceData = {
    ...medicalEquipmentData,
    faq: {
      ...medicalEquipmentData.faq,
      items:
        equipmentFaqs.length > 0
          ? equipmentFaqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))
          : medicalEquipmentData.faq.items,
    },
  };

  return <ServiceDesign data={updatedData} />;
}