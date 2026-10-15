"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionBadge from "../ui/SectionBadge";
import { imgGroup43, imgStars } from "@/lib/assets";

const testimonials = [
  {
    name: "Suresh",
    location: "Chennai",
    text: "I booked a veterinary doctor through CuroAid when my dog was unwell. Excellent check-up and treatment at home. Highly recommend!",
  },
  {
    name: "Priya Rajesh",
    location: "Chennai",
    text: "The home nursing service from CuroAid was exceptional. The nurse was professional, caring, and always on time.",
  },
  {
    name: "Ramesh Kumar",
    location: "Chennai",
    text: "Outstanding physiotherapy sessions at home. The therapist helped my father recover quickly after surgery. Great service!",
  },
  {
    name: "Lakshmi",
    location: "Tenkasi",
    text: "The caregiver was kind, patient, and attentive to my mother's daily needs. The service made our family feel supported.",
  },
  {
    name: "Arun Prakash",
    location: "Chennai",
    text: "Booking a doctor for a home visit was simple and convenient. The team communicated clearly throughout the process.",
  },
  {
    name: "Meena Devi",
    location: "Tirunelveli",
    text: "The wound care service was convenient for our family. The care team explained the process and treated us respectfully.",
  },
  {
    name: "Karthik",
    location: "Chennai",
    text: "The home blood test booking process was straightforward and saved us a trip to the clinic.",
  },
  {
    name: "Anitha",
    location: "Madurai",
    text: "The home healthcare team was supportive and professional. Arranging care at home was much more convenient for us.",
  },
  {
    name: "Mohamed Ismail",
    location: "Tenkasi",
    text: "CuroAid helped us explore home nursing support for an elderly family member. The booking process was easy to follow.",
  },
  {
    name: "Divya S",
    location: "Chennai",
    text: "The team was responsive to our enquiry and helped us understand the available home healthcare services.",
  },
];
export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive number of visible testimonials
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Keep current page valid when screen size changes
  useEffect(() => {
    setCurrentPage((page) => Math.min(page, Math.max(0, totalPages - 1)));
  }, [totalPages]);

  // Automatic sliding; pauses while hovered
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentPage((page) => (page + 1) % totalPages);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPaused, totalPages]);

  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const goToPrevious = () => {
    setCurrentPage((page) => (page - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrentPage((page) => (page + 1) % totalPages);
  };

  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-gray-50 py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionBadge label="Testimonial" />

        <div className="mb-10 mt-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
          <h2
            id="testimonials-title"
            className="text-3xl font-bold leading-tight text-black lg:text-[40px]"
          >
            Testimonials
          </h2>

          <p className="text-base leading-relaxed text-[#454646] lg:max-w-lg lg:text-right">
            Real experiences from patients and families who have trusted
            CuroAid for their home healthcare needs.
          </p>
        </div>

        {/* Testimonial cards */}
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          aria-live="off"
        >
          {visibleTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${currentPage}-${index}`}
              className="animate-testimonial-in rounded-xl border border-black/5 bg-[rgba(207,244,255,0.26)] p-6 shadow-md"
            >
              {/* <Image
                src={imgStars}
                alt="5 star rating"
                width={100}
                height={20}
                className="mb-4 h-5 w-auto object-contain"
              /> */}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={imgGroup43}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 object-contain"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-base font-semibold text-black">
                    {testimonial.name}
                  </p>

                  <p className="text-xs font-bold text-[#4cc6f0]">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-[#454646]">
                “{testimonial.text}”
              </p>
            </article>
          ))}
        </div>

        {/* Manual controls */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-xl text-gray-700 transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4cc6f0]"
            >
              &#8592;
            </button>

            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Go to testimonial page ${index + 1}`}
                  aria-current={currentPage === index ? "true" : undefined}
                  className={`h-3 rounded-full transition-all duration-300 ${currentPage === index
                    ? "w-8 bg-[#4cc6f0]"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-xl text-gray-700 transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4cc6f0]"
            >
              &#8594;
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes testimonialIn {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-testimonial-in {
          animation: testimonialIn 450ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-testimonial-in {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}