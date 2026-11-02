import { getServiceFaqs } from "@/lib/faq";
import ServiceDesign, { ServiceData } from "./servicedetailspage/ServiceDesign";

import {
  yogaBanner,
  yogaImage,
  yoga1,
  yoga2,
  yoga3,
  yoga4,
  yoga5,
  yoga6,
  yoga7,
  yoga8,
  yoga9,
  imgWhyChoose,
  tick,
  imgStepIcon1,
  imgStepIcon2,
  imgStepIcon3,
  imgStepIcon4,
  yoga11,
  yoga12,
  yoga10,
  imgCtaBanner,
} from "@/lib/assets";

export const yogaAtHomeData: ServiceData = {
  hero: {
    badge: "Personalised Yoga Classes at Home",
    title: "Yoga Classes at Home",
    description:
      "Enjoy personalised yoga sessions at home with professional guidance designed around your fitness, mobility and wellness needs.",
    image: yogaBanner,
    imageAlt: "Yoga classes at home",
    button: "Book Now",
  },

  introduction: {
    title: "Personalised Yoga at Home",
    description:
      "CuroAid brings convenient yoga sessions to your doorstep. Our home yoga service is designed for individuals who prefer personalised guidance in the comfort of their own home, including beginners, seniors and those looking to make yoga part of their regular wellness routine.",
    image: yogaImage,
    imageAlt: "Personalised yoga session at home",
    button: "Book Yoga Session",
  },

  services: {
    badge: "SERVICES",
    title: "Our Yoga at Home Services",
    description:
      "Personalised yoga sessions designed around your experience, mobility and wellness goals.",
    items: [
      {
        title: "Beginner Yoga",
        description:
          "Gentle, easy-to-follow yoga sessions for individuals who are new to yoga.",
        image: yoga1,
        imageAlt: "Beginner yoga class at home",
      },
      {
        title: "Senior Citizen Yoga",
        description:
          "Gentle yoga sessions designed around the mobility and comfort needs of senior citizens.",
        image: yoga2,
        imageAlt: "Yoga for senior citizens",
      },
      {
        title: "Flexibility & Mobility",
        description:
          "Yoga practices focused on supporting flexibility, mobility and comfortable movement.",
        image: yoga3,
        imageAlt: "Yoga for flexibility and mobility",
      },
      {
        title: "Strength & Balance",
        description:
          "Appropriate yoga exercises that support strength, balance and body awareness.",
        image: yoga4,
        imageAlt: "Yoga for strength and balance",
      },
      {
        title: "Relaxation Yoga",
        description:
          "Calm and mindful yoga sessions focused on relaxation and creating a peaceful routine.",
        image: yoga5,
        imageAlt: "Relaxation yoga at home",
      },
      {
        title: "Breathing & Mindfulness",
        description:
          "Guided breathing and mindfulness practices that can be incorporated into your yoga routine.",
        image: yoga6,
        imageAlt: "Breathing and mindfulness yoga",
      },
      {
        title: "Women's Yoga",
        description:
          "Personalised yoga sessions designed around individual preferences and wellness requirements.",
        image: yoga7,
        imageAlt: "Women's yoga session at home",
      },
      {
        title: "Personal Yoga Sessions",
        description:
          "One-to-one yoga sessions with guidance tailored to your experience and individual goals.",
        image: yoga8,
        imageAlt: "Personal yoga session at home",
      },
      {
        title: "Wellness Yoga",
        description:
          "Regular yoga sessions to help you build a consistent movement and wellness routine.",
        image: yoga9,
        imageAlt: "Wellness yoga at home",
      },
      {
        title: "Prenatal Yoga",
        description:
          "Gentle yoga sessions designed to support a comfortable pregnancy, improve flexibility, and prepare your body for childbirth.",
        image: yoga11,
        imageAlt: "Prenatal yoga session at home",
      },
      {
        title: "Postnatal Yoga",
        description:
          "Personalized yoga sessions designed to support postpartum recovery, rebuild strength, improve flexibility, and promote overall wellness.",
        image: yoga10,
        imageAlt: "Postnatal yoga session at home",
      },
      {
        title: "Lactation Therapy",
        description:
          "Expert guidance to support comfortable breastfeeding, improve feeding techniques, and address common lactation concerns.",
        image: yoga12,
        imageAlt: "Lactation therapy support at home",
      },
    ],
  },

  whyChoose: {
    badge: "WHY CHOOSE",
    title: "Why Choose CuroAid Yoga at Home?",
    description: (
      <>
        CuroAid makes yoga more convenient by bringing personalised sessions
        directly to your home, with a focus on{" "}
        <strong className="font-semibold text-black">
          comfort, personal attention, flexibility and consistent guidance.
        </strong>
      </>
    ),
    image: imgWhyChoose,
    imageAlt: "CuroAid yoga session at home",

    items: [
      {
        title: "Personalised Sessions",
        description:
          "Yoga sessions can be adapted around your experience, comfort and individual requirements.",
        icon: tick,
      },
      {
        title: "Professional Guidance",
        description:
          "Receive guided yoga sessions from experienced yoga professionals.",
        icon: tick,
      },
      {
        title: "Comfort at Home",
        description:
          "Practice yoga in the comfort and privacy of your own home.",
        icon: tick,
      },
      {
        title: "Flexible Scheduling",
        description:
          "Choose a convenient session time based on service availability.",
        icon: tick,
      },
      {
        title: "One-to-One Attention",
        description:
          "Individual sessions allow the instructor to focus on your specific requirements.",
        icon: tick,
      },
      {
        title: "Consistent Wellness Routine",
        description:
          "Regular home sessions can make it easier to maintain a consistent yoga routine.",
        icon: tick,
      },
    ],
  },

  booking: {
    badge: "HOW TO BOOK",
    title: "How to Book Yoga Classes at Home",
    description:
      "Starting your personalised yoga routine with CuroAid is simple.",
    image: yogaBanner,
    imageAlt: "Book yoga classes at home",
    button: "Book Yoga Session",

    steps: [
      {
        num: "01",
        title: "Choose Your Yoga Service",
        description:
          "Select the type of yoga session that matches your experience and wellness requirements.",
        icon: imgStepIcon1,
      },
      {
        num: "02",
        title: "Share Your Requirements",
        description:
          "Tell us about your experience, preferences, location and preferred session schedule.",
        icon: imgStepIcon2,
      },
      {
        num: "03",
        title: "Speak With Our Team",
        description:
          "Our team will understand your requirements and help coordinate a suitable yoga professional.",
        icon: imgStepIcon3,
      },
      {
        num: "04",
        title: "Start Yoga at Home",
        description:
          "Enjoy your personalised yoga session in the comfort of your home.",
        icon: imgStepIcon4,
      },
    ],
  },

  cta: {
    title: "Ready to Start Yoga at Home?",
    description:
      "Build a comfortable and personalised yoga routine with professional guidance from CuroAid.",
    image: imgCtaBanner,
    imageAlt: "Personalised yoga classes at home",
    button: "Book Yoga Session",
  },

  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can I book yoga classes at home?",
        answer:
          "Yes. CuroAid provides personalised yoga sessions at home based on service availability and your individual requirements.",
      },
      {
        question: "Are yoga classes suitable for beginners?",
        answer:
          "Yes. Beginners can choose sessions designed to introduce basic yoga practices and movements at a comfortable pace.",
      },
      {
        question: "Can senior citizens join yoga classes at home?",
        answer:
          "Yes. Gentle yoga sessions can be arranged for senior citizens based on their individual mobility, comfort and wellness requirements.",
      },
      {
        question: "Are the yoga sessions one-to-one?",
        answer:
          "Home yoga sessions can be personalised based on the selected service and availability.",
      },
      {
        question: "Do I need any special equipment for home yoga?",
        answer:
          "A comfortable and safe space is generally sufficient for many yoga sessions. Your instructor can guide you regarding any additional equipment required for your selected practice.",
      },
      {
        question: "How do I book a yoga session at home?",
        answer:
          "Choose your preferred yoga service, share your requirements and preferred schedule, and our team will help coordinate the session.",
      },
    ],
  },
};

export default async function YogaAtHomeContent() {
  const yogaFaqs = await getServiceFaqs("Yoga");

  const updatedData: ServiceData = {
    ...yogaAtHomeData,
    faq: {
      ...yogaAtHomeData.faq,
      items:
        yogaFaqs.length > 0
          ? yogaFaqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))
          : yogaAtHomeData.faq.items,
    },
  };

  return <ServiceDesign data={updatedData} />;
}