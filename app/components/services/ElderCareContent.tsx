import { getServiceFaqs } from "@/lib/faq";
import ServiceDesign, { ServiceData } from "./servicedetailspage/ServiceDesign";

import {
  elderCareBanner,
  elderCareImage,
  elder1,
  elder2,
  elder3,
  elder4,
  elder5,
  elder6,
  elder7,
  elder8,
  elder9,
  imgWhyChoose,
  tick,
  imgStepIcon1,
  imgStepIcon2,
  imgStepIcon3,
  imgStepIcon4,
  imgCtaBanner,
} from "@/lib/assets";

export const elderCareData: ServiceData = {
  hero: {
    badge: "Compassionate Elder Care at Home",
    title: "Elder Care Services at Home",
    description:
      "Compassionate and reliable support for senior citizens, helping them live comfortably, safely and independently at home.",
    image: elderCareBanner,
    imageAlt: "Elder care services at home",
    button: "Book Now",
  },

  introduction: {
    title: "Trusted Elder Care at Home",
    description:
      "At CuroAid, we understand that elderly family members need more than routine assistance. Our elder care services provide personalised support with daily activities, companionship, mobility and healthcare coordination, helping seniors stay comfortable in their familiar home environment.",
    image: elderCareImage,
    imageAlt: "CuroAid elderly care at home",
    button: "Book Elder Care",
  },

  services: {
    badge: "SERVICES",
    title: "Our Elder Care Services",
    description:
      "Dedicated support designed around the individual needs of senior citizens.",
    items: [
      {
        title: "Daily Living Assistance",
        description:
          "Support with appropriate everyday activities to help seniors maintain comfort and independence at home.",
        image: elder1,
        imageAlt: "Daily living assistance for elderly",
      },
      {
        title: "Companionship Care",
        description:
          "Friendly companionship and regular interaction to help seniors feel connected and supported.",
        image: elder2,
        imageAlt: "Companionship for elderly",
      },
      {
        title: "Personal Care Assistance",
        description:
          "Respectful assistance with appropriate personal care routines based on individual requirements.",
        image: elder3,
        imageAlt: "Personal care assistance for seniors",
      },
      {
        title: "Mobility Assistance",
        description:
          "Support with safe movement around the home for seniors who require assistance with mobility.",
        image: elder4,
        imageAlt: "Elderly mobility assistance",
      },
      {
        title: "Medication Support",
        description:
          "Assistance with maintaining medication routines as instructed by the patient's healthcare professional.",
        image: elder5,
        imageAlt: "Medication support for elderly",
      },
      {
        title: "Doctor Visit Coordination",
        description:
          "Help coordinate appropriate doctor consultations and healthcare appointments for senior citizens.",
        image: elder6,
        imageAlt: "Doctor visit coordination for elderly",
      },
      {
        title: "Hospital Support",
        description:
          "Assistance with healthcare coordination when an elderly family member requires hospital-related support.",
        image: elder7,
        imageAlt: "Hospital support for elderly",
      },
      {
        title: "Post-Hospitalisation Support",
        description:
          "Home-based assistance for seniors during their recovery following hospitalisation.",
        image: elder8,
        imageAlt: "Post hospitalisation elder care",
      },
      {
        title: "Regular Care Support",
        description:
          "Ongoing care assistance based on the senior's individual routine and family requirements.",
        image: elder9,
        imageAlt: "Regular elderly care at home",
      },
    ],
  },

  whyChoose: {
    badge: "WHY CHOOSE",
    title: "Why Choose CuroAid Elder Care?",
    description: (
      <>
        At CuroAid, we believe elderly care should provide more than
        assistance. It should give seniors and their families{" "}
        <strong className="font-semibold text-black">
          comfort, dignity, trust and peace of mind.
        </strong>
      </>
    ),
    image: imgWhyChoose,
    imageAlt: "CuroAid elderly care professional",

    items: [
      {
        title: "Compassionate Care",
        description:
          "We focus on respectful and compassionate support for every senior.",
        icon: tick,
      },
      {
        title: "Personalised Support",
        description:
          "Care can be arranged around the individual needs and daily routine of the senior.",
        icon: tick,
      },
      {
        title: "Comfort at Home",
        description:
          "Help seniors receive appropriate support in their familiar home environment.",
        icon: tick,
      },
      {
        title: "Healthcare Coordination",
        description:
          "Support families in coordinating appropriate healthcare services when required.",
        icon: tick,
      },
      {
        title: "Family Peace of Mind",
        description:
          "Reliable support can help families stay connected with the care of their elderly loved ones.",
        icon: tick,
      },
      {
        title: "Reliable Care",
        description:
          "Our services are designed to provide consistent and dependable support based on requirements.",
        icon: tick,
      },
    ],
  },

  booking: {
    badge: "HOW TO BOOK",
    title: "How to Book Elder Care Services",
    description:
      "Getting reliable elder care support at home is simple with CuroAid.",
    image: elderCareBanner,
    imageAlt: "Book elder care service",
    button: "Book Elder Care",

    steps: [
      {
        num: "01",
        title: "Choose Elder Care Service",
        description:
          "Select the type of elderly care or assistance your family member requires.",
        icon: imgStepIcon1,
      },
      {
        num: "02",
        title: "Share Senior's Details",
        description:
          "Tell us about the senior's care requirements, location, preferred schedule and other relevant details.",
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
        title: "Receive Care at Home",
        description:
          "The appropriate care professional provides support at your doorstep based on the confirmed service.",
        icon: imgStepIcon4,
      },
    ],
  },

  cta: {
    title: "Need Reliable Elder Care at Home?",
    description:
      "Give your elderly loved ones compassionate support and care in the comfort of their home.",
    image: imgCtaBanner,
    imageAlt: "Elder care at home",
    button: "Book Elder Care",
  },

  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What elder care services does CuroAid provide?",
        answer:
          "CuroAid provides a range of home-based elder care support including daily assistance, companionship, personal care assistance, mobility support and healthcare coordination based on individual requirements.",
      },
      {
        question: "Can I arrange elder care for my parents?",
        answer:
          "Yes. Elder care services can be arranged for parents or other senior family members based on their individual care requirements and service availability.",
      },
      {
        question: "Can elderly people receive care after hospitalisation?",
        answer:
          "Yes. Home-based support can be arranged for appropriate post-hospitalisation care and recovery requirements.",
      },
      {
        question: "Can elder care include doctor visit coordination?",
        answer:
          "Yes. CuroAid can help coordinate appropriate healthcare services and doctor visits based on the senior's requirements.",
      },
      {
        question: "Can I book elder care for a senior living alone?",
        answer:
          "Home elder care support may be arranged for seniors who live alone, depending on their care requirements and the services available in their location.",
      },
      {
        question: "How do I book elder care services?",
        answer:
          "Choose the required elder care service, provide the senior's details and preferred schedule, and our team will help coordinate the appropriate service.",
      },
    ],
  },
};

export default async function ElderCareContent() {
  const elderCareFaqs = await getServiceFaqs("Eldercare");

  const updatedData: ServiceData = {
    ...elderCareData,
    faq: {
      ...elderCareData.faq,
      items:
        elderCareFaqs.length > 0
          ? elderCareFaqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))
          : elderCareData.faq.items,
    },
  };

  return <ServiceDesign data={updatedData} />;
}