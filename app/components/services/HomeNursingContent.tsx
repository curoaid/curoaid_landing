import ServiceDesign, { ServiceData, } from "./servicedetailspage/ServiceDesign";
import { l12, l10, l11, l2, l3, l4, l5, l6, l8, l9, nursebanner, r1, l1, imgWhyChoose, tick, imgCtaBanner } from "@/lib/assets";
import {
  imgStepIcon1,
  imgStepIcon2,
  imgStepIcon3,
  imgStepIcon4,
} from "@/lib/assets";
import { getServiceFaqs } from "@/lib/faq";

const homeNursingData: ServiceData = {
  hero: {
    badge: "Professional Nursing Care, Right at Your Doorstep",
    title: "Home Nursing Services",
    description:
      "Get compassionate and professional nursing support at home, tailored to your healthcare needs.",
    image: nursebanner,
    imageAlt: "Home nursing service",
    button: "Book Now",
  },

  introduction: {
    title: "Curoaid Home Nursing Service",
    description:
      "At Curoaid, we provide reliable and compassionate nursing care at home for elderly patients, post-surgical recovery, chronic conditions and more.",
    image: r1,
    imageAlt: "CuroAid home nursing",
    button: "Book Now",
  },

  services: {
    badge: "SERVICES",
    title: "Our Home Nursing Services",
    description:
      "From recovery and rehabilitation to long-term healthcare support, Curoaid provides personalised nursing care to help patients and families manage healthcare needs comfortably at home.",
    items: [
      {
        title: "Elderly Nursing Care",
        description:
          "Compassionate nursing support for senior citizens who require assistance with their healthcare and daily needs at home.",
        image: l3,
        imageAlt: "Elderly nursing care",
      },
      {
        title: "Post-Hospitalization Nursing Care",
        description:
          "Receive professional nursing assistance after hospital discharge to support a safe and comfortable recovery at home.",
        image: l4,
        imageAlt: "Post hospitalization nursing care",
        featured: true,
      },
      {
        title: "Chronic Disease Care",
        description:
          "Ongoing nursing support for patients managing long-term conditions such as diabetes, hypertension, and other chronic health concerns.",
        image: l5,
        imageAlt: "Chronic disease care",
        featured: true,
      },
      {
        title: "Post-Surgical Care",
        description:
          "Get dedicated nursing assistance during the recovery period following surgery, including routine monitoring and care support.",
        image: l6,
        imageAlt: "Post surgical care",
        featured: true,
      },
      // {
      //   title: "Medication Assistance",
      //   description:
      //     "Professional support with medication schedules and administration as prescribed by your doctor.",
      //   image: l1,
      //   imageAlt: "Medication assistance",
      //   featured: true,
      // },
      {
        title: "Wound & Dressing Care",
        description:
          "Receive appropriate nursing support for wound care, dressing changes, and recovery-related healthcare needs at home.",
        image: l8,
        imageAlt: "Wound and dressing care",
        featured: true,
      },
      {
        title: "Vital Signs Monitoring",
        description:
          "Regular monitoring of essential health parameters such as blood pressure, temperature, pulse, and oxygen levels as required.",
        image: l9,
        imageAlt: "Vital signs monitoring",
        featured: true,
      },
      {
        title: "Personal Care Assistance",
        description:
          "Support with everyday personal care needs for individuals who require additional assistance during recovery or due to limited mobility.",
        image: l10,
        imageAlt: "Personal care assistance",
        featured: true,
      },
      {
        title: "Bedridden Patient Care",
        description:
          "Compassionate nursing support for patients who are bedridden and require regular attention and assistance at home.",
        image: l11,
        imageAlt: "Bedridden patient care",
        featured: true,
      },
      {
        title: "Family Healthcare Support",
        description:
          "Reliable nursing assistance that helps families manage the healthcare needs of their loved ones with greater comfort and confidence.",
        image: l12,
        imageAlt: "Family healthcare support",
        featured: true,
      },
    ],

  },

  whyChoose: {
    badge: "WHY CHOOSE",
    title: "Why Choose Curoaid?",
    description: (
      <>
        At CuroAid, we believe healthcare should be more than just a
        service — it should provide{" "}
        <strong className="font-semibold text-black">
          comfort, trust, dignity, and peace of mind.
        </strong>{" "}
        Our home healthcare services are designed to bring professional
        care closer to patients while making the experience easier for
        families.
      </>
    ),
    image: "https://vathala-bucket.s3.ap-south-1.amazonaws.com/1790157754246/l2.webp",
    imageAlt: "CuroAid healthcare team",
    items: [
      {
        title: "Nursing Support",
        description:
          "Experienced nursing professionals providing reliable home care.",
        icon: tick
      },
      {
        title: "Professional Care",
        description:
          "Qualified professionals focused on safe and personalized care.",
        icon: tick

      },
      {
        title: "Home Environment",
        description:
          "Receive healthcare support in the comfort of your own home.",
        icon: tick

      },
      {
        title: "Support for Recovery",
        description:
          "Continuous support throughout your recovery journey.",
        icon: tick

      },
      {
        title: "Care for Elderly",
        description:
          "Dedicated support for seniors requiring assistance.",
        icon: tick

      },
      {
        title: "Convenient & Reliable",
        description:
          "Flexible home healthcare support around your needs.",
        icon: tick

      },
    ],
  },

  booking: {
    badge: "HOW TO BOOK",
    title: "How to Book Our Home Nursing Service",
    description:
      "Getting professional healthcare at home is simple with CuroAid.",
    image:
      nursebanner,
    imageAlt: "CuroAid home healthcare booking",
    button: "Book a Service",
    steps: [
      {
        num: "01",
        title: "Choose Nursing Service",
        description: "Select the home nursing service that matches your patient's care requirements.",
        icon: imgStepIcon1,
      },
      {
        num: "02",
        title: "Share Patient Details",
        description: "Tell us about the patient's condition, care needs, preferred date, time, and location.",
        icon: imgStepIcon2,
      },
      {
        num: "03",
        title: "Speak With Our Team",
        description: "Our care team will contact you, understand your requirements, and guide you through the next steps.",
        icon: imgStepIcon3,
      },
      {
        num: "04",
        title: "Get Nursing Care at Home",
        description: "We arrange the appropriate nursing professional and provide care at your doorstep.",
        icon: imgStepIcon4,
      },
    ],
  },

  cta: {
    title: "Need Medical Care at Home?",
    description:
      "CuroAid brings trusted healthcare to your doorstep.",
    image:
      imgCtaBanner,
    imageAlt: "Healthcare at home",
    button: "Book Free Consultation",
  },

  faq: {
    badge: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        question:
          "Is home healthcare better than visiting a hospital?",
        answer:
          "Home healthcare can provide convenient professional support for patients who are appropriate for care at home.",
      },
      {
        question:
          "What home nursing services are available?",
        answer:
          "Home nursing services can include elderly care, post-hospitalisation care, medication assistance, wound care and other appropriate support.",
      },
      {
        question:
          "Can I book nursing care for an elderly family member?",
        answer:
          "Yes, nursing support can be arranged based on the individual's care requirements.",
      },
    ],
  },
};

export default async function HomeNursing() {
  const nursingFaqs = await getServiceFaqs("Nursingcare");

  const updatedData: ServiceData = {
    ...homeNursingData,
    faq: {
      ...homeNursingData.faq,
      items:
        nursingFaqs.length > 0
          ? nursingFaqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))
          : homeNursingData.faq.items,
    },
  };

  return <ServiceDesign data={updatedData} />;
}