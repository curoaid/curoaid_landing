"use client";

import { useEffect, useState } from "react";

import CuroAidHero from "./components/home/CuroAidHero";
import Navbar from "./components/home/Navbar";
import WhoWeAreSection from "./components/home/WhoWeAreSection";
import ServicesSection from "./components/home/ServiceSection";
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

  return (
    <div className="bg-white min-h-screen w-full">
      <main>
        <Navbar />

        <CuroAidHero />

        <WhoWeAreSection />

        <ServicesSection />

        <HowToBookSection {...homeHowToBook} />

        <WhyChooseSection {...homeWhyChoose} />
        <InstagramReels />

        <TestimonialsSection />

        <BlogsSection />

        <CTABannerSection {...homeCTA} />

        <FAQSection {...homeFAQ} />

        <Footer />
      </main>
    </div>
  );
}