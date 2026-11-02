import { getServiceFaqs } from "@/lib/faq";
import ServiceDesign, { ServiceData } from "./servicedetailspage/ServiceDesign";

import {
  veterinaryBanner,
  veterinaryImage,
  veterinary1,
  veterinary2,
  veterinary3,
  veterinary4,
  veterinary5,
  veterinary6,
  veterinary7,
  veterinary8,
  imgCtaBanner,
  imgWhyChoose,
  tick,
  imgStepIcon1,
  imgStepIcon2,
  imgStepIcon3,
  imgStepIcon4,
} from "@/lib/assets";

export const veterinaryCareData: ServiceData = {
  hero: {
    badge: "Professional Veterinary Care at Home",
    title: "Veterinary Care at Home",
    description:
      "Get convenient veterinary consultation and pet healthcare support at home from qualified veterinary professionals.",
    image: veterinaryBanner,
    imageAlt: "Veterinary doctor providing pet care at home",
    button: "Book Now",
  },

  introduction: {
    title: "Trusted Veterinary Care at Home",
    description:
      "CuroAid makes pet healthcare more convenient by bringing veterinary support closer to your home. Our service is designed for pet owners who prefer professional veterinary consultation and appropriate pet care support in a familiar environment.",
    image: veterinaryImage,
    imageAlt: "Veterinary consultation at home",
    button: "Book Veterinary Care",
  },

  services: {
    badge: "SERVICES",
    title: "Our Veterinary Care Services",
    description:
      "Convenient veterinary support designed around the healthcare needs of your pets.",
    items: [
      {
        title: "Veterinary Consultation",
        description:
          "Professional veterinary consultation for appropriate pet health concerns from the comfort of your home.",
        image: veterinary1,
        imageAlt: "Veterinary doctor consultation at home",
      },
      {
        title: "Pet Health Check",
        description:
          "Routine health assessment and professional guidance for your pet based on their individual needs.",
        image: veterinary2,
        imageAlt: "Pet health check at home",
      },
      {
        title: "Puppy & Kitten Care",
        description:
          "Professional guidance and appropriate healthcare support for young puppies and kittens.",
        image: veterinary3,
        imageAlt: "Puppy and kitten veterinary care",
      },
      {
        title: "Senior Pet Care",
        description:
          "Dedicated veterinary support for older pets who may require additional attention and monitoring.",
        image: veterinary4,
        imageAlt: "Senior pet veterinary care",
      },
      {
        title: "Pet Vaccination Support",
        description:
          "Convenient veterinary support for appropriate vaccination requirements based on your pet's healthcare plan.",
        image: veterinary5,
        imageAlt: "Pet vaccination service",
      },
      {
        title: "Pet Medication Guidance",
        description:
          "Professional guidance regarding prescribed medications and appropriate care routines for your pet.",
        image: veterinary6,
        imageAlt: "Pet medication guidance",
      },
      {
        title: "Pet Nutrition Guidance",
        description:
          "Professional guidance to help pet owners understand appropriate nutrition and feeding requirements.",
        image: veterinary7,
        imageAlt: "Pet nutrition consultation",
      },
      {
        title: "Post-Treatment Pet Care",
        description:
          "Home-based veterinary support for pets requiring appropriate follow-up care after treatment.",
        image: veterinary8,
        imageAlt: "Post treatment pet care",
      },

    ],
  },

  whyChoose: {
    badge: "WHY CHOOSE",
    title: "Why Choose CuroAid Veterinary Care?",
    description: (
      <>
        CuroAid makes pet healthcare more convenient by bringing professional
        veterinary support closer to your home, with a focus on{" "}
        <strong className="font-semibold text-black">
          comfort, convenience, professional care and personalised attention.
        </strong>
      </>
    ),
    image: imgWhyChoose,
    imageAlt: "CuroAid veterinary care at home",

    items: [
      {
        title: "Professional Veterinary Care",
        description:
          "Access veterinary support based on your pet's individual healthcare requirements.",
        icon: tick,
      },
      {
        title: "Care at Home",
        description:
          "Get appropriate pet healthcare support in a familiar home environment.",
        icon: tick,
      },
      {
        title: "Less Travel Stress",
        description:
          "Home consultations can reduce the need to travel with your pet for appropriate services.",
        icon: tick,
      },
      {
        title: "Personalised Attention",
        description:
          "Veterinary care can be tailored around your pet's age, condition and individual needs.",
        icon: tick,
      },
      {
        title: "Convenient Scheduling",
        description:
          "Arrange veterinary visits based on service availability and your preferred schedule.",
        icon: tick,
      },
      {
        title: "Support for Pet Owners",
        description:
          "Get professional guidance to help you understand and manage your pet's healthcare needs.",
        icon: tick,
      },
    ],
  },

  booking: {
    badge: "HOW TO BOOK",
    title: "How to Book Veterinary Care at Home",
    description:
      "Getting professional veterinary support at home is simple with CuroAid.",
    image: veterinaryBanner,
    imageAlt: "Book veterinary care at home",
    button: "Book Veterinary Care",

    steps: [
      {
        num: "01",
        title: "Choose Veterinary Service",
        description:
          "Select the veterinary consultation or pet care service you require.",
        icon: imgStepIcon1,
      },
      {
        num: "02",
        title: "Share Pet Details",
        description:
          "Tell us about your pet, including their age, species, healthcare requirement, location and preferred schedule.",
        icon: imgStepIcon2,
      },
      {
        num: "03",
        title: "Speak With Our Team",
        description:
          "Our team will understand your requirements and help coordinate the appropriate veterinary service.",
        icon: imgStepIcon3,
      },
      {
        num: "04",
        title: "Get Veterinary Care at Home",
        description:
          "A suitable veterinary professional provides the confirmed service at your doorstep.",
        icon: imgStepIcon4,
      },
    ],
  },

  cta: {
    title: "Need a Veterinary Doctor at Home?",
    description:
      "Get convenient professional veterinary support for your pet without unnecessary travel.",
    image: imgCtaBanner,
    imageAlt: "Veterinary doctor at home",
    button: "Book Veterinary Care",
  },

  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can I book a veterinary doctor at home?",
        answer:
          "Yes. CuroAid provides veterinary consultation and appropriate pet healthcare services at home based on service availability.",
      },
      {
        question: "What pets can receive veterinary care at home?",
        answer:
          "Veterinary home services may be available for common household pets depending on the service and veterinary professional's availability.",
      },
      {
        question: "Can I book a health check for my pet?",
        answer:
          "Yes. You can request a veterinary health check based on your pet's healthcare requirements and service availability.",
      },
      {
        question: "Can senior pets receive veterinary care at home?",
        answer:
          "Yes. Home veterinary consultation can be a convenient option for older pets that may find travel stressful or difficult.",
      },
      {
        question: "Can I get vaccination support for my pet?",
        answer:
          "Appropriate vaccination services may be available depending on the veterinary service and local availability. The veterinarian can advise on your pet's vaccination requirements.",
      },
      {
        question: "How do I book a veterinary doctor at home?",
        answer:
          "Choose the veterinary service, provide your pet's details and preferred appointment information, and our team will help coordinate the visit.",
      },
    ],
  },
};

export default async function VeterinaryCareContent() {
  const veterinaryFaqs = await getServiceFaqs("Veterinary");

  const updatedData: ServiceData = {
    ...veterinaryCareData,
    faq: {
      ...veterinaryCareData.faq,
      items:
        veterinaryFaqs.length > 0
          ? veterinaryFaqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))
          : veterinaryCareData.faq.items,
    },
  };

  return <ServiceDesign data={updatedData} />;
}