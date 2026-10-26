"use client";

import { useEffect, useState } from "react";

import CuroAidHero from "./components/home/CuroAidHero";
import Navbar from "./components/home/Navbar";
import WhoWeAreSection from "./components/home/WhoWeAreSection";
import ServiceSection from "./components/home/ServiceSection";
import HowToBookSection from "./components/home/HowToBookSection";
import WhyChooseSection from "./components/home/WhyChooseSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import BlogsSection from "./components/home/BlogsSection";
import CTABannerSection from "./components/home/CTABAnnerSection";
import FAQSection from "./components/home/FAQSection";
import Footer from "./components/home/Footer";

import {
  homeCTA,
  homeHowToBook,
  homeWhyChoose,
} from "./components/home/homehowtobook";
import InstagramReels from "./components/instareels/InstgramReels";
import { createPageSchema } from "@/lib/seo-schema";
import JsonLd from "./components/seo/JsonLd";
import BookingModal from "./components/ui/BookingModel";

const API_URL = "https://api.vathala.com/users/getHomeFaq";

interface FAQItem {
  question: string;
  answer: string;
  service: string;
}

interface HomeFAQ {
  badge: string;
  title: string;
  items: FAQItem[];
}

const defaultFAQ: HomeFAQ = {
  badge: "FAQ",
  title: "Frequently Asked Questions",
  items: [],
};

export default function Home() {
  const [homeFAQ, setHomeFAQ] = useState<HomeFAQ>(defaultFAQ);
  const [isOpen, setIsOpen] = useState(false);
  const [popupCount, setPopupCount] = useState(0);


  useEffect(() => {
    if (popupCount >= 2 || isOpen) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setPopupCount((count) => count + 1);
    }, 10000);

    return () => clearTimeout(timer);
  }, [popupCount, isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchHomeFAQ = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch home FAQ: ${response.status}`
          );
        }

        const result = await response.json();

        const homePageFAQs = (result?.data ?? []).filter((item: FAQItem) => item.service === "Home Page");

        // console.log("Home FAQ:", homePageFAQs)

        setHomeFAQ({
          badge: homePageFAQs?.badge ?? "FAQ",
          title:
            homePageFAQs?.title ?? "Frequently Asked Questions",
          items: homePageFAQs.map((item: FAQItem) => ({
            question: item.question,
            answer: item.answer,
          }))
        });
      } catch (error) {
        console.error("Home FAQ API Error:", error);
      }
    };

    fetchHomeFAQ();
  }, []);
  const schema = createPageSchema({
    name: "CuroAid – Healthcare at Home",
    path: "/",
    description:
      "Home doctor visits, nursing, physiotherapy, elder care and other healthcare services.",
  });
  return (
    <div className="bg-white min-h-screen w-full">
      <main>
        <JsonLd data={schema} />
        <Navbar />

        <CuroAidHero />

        <WhoWeAreSection />

        <ServiceSection />
        <HowToBookSection {...homeHowToBook} />

        <WhyChooseSection {...homeWhyChoose} />
        <InstagramReels />

        <TestimonialsSection />

        <BlogsSection />

        <CTABannerSection {...homeCTA} />

        <FAQSection {...homeFAQ} />

        <Footer />
        {
          isOpen && (
            <BookingModal isOpen={isOpen}
              onClose={handleClose}
              defaultService={undefined} />
          )
        }
      </main>
    </div>
  );
}