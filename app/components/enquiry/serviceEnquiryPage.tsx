
"use client"
import { useState } from "react";
import Image from "next/image";
import ServiceEnquiryForm from "./ServiceEnquiryForm";
import { EnquiryService } from "@/lib/enquiryServices";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";

type Props = {
  service: EnquiryService;
};

export default function ServiceEnquiryPage({ service }: Props) {

  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      {isSubmitted && <Navbar />}
      <main className="min-h-screen bg-[#F4FAF9]">
        {/* Campaign banner */}
        <section className="bg-gradient-to-r from-[#4CC6F0] to-[#74C067] px-4 py-7 text-center sm:py-9">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
            CuroAid Healthcare at Home
          </p>

          <h1 className="mt-2 text-2xl font-bold text-white sm:text-4xl">
            Let&apos;s Arrange Your Care
          </h1>

          <p className="mx-auto mt-2 max-w-2xl text-sm text-white sm:text-base">
            Share your details and enquire about the right service for you.
          </p>
        </section>

        {/* Form and service content */}
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">

            {/* Mobile: form first. Desktop: service content left. */}
            <div className="order-1 overflow-hidden rounded-2xl border border-[#DCECE7] bg-white shadow-sm lg:order-2">
              <div className="h-1.5 bg-gradient-to-r from-[#4CC6F0] to-[#74C067]" />

              <div className="p-5 sm:p-8">
                <div className="mb-6">
                  <span className="rounded-full bg-[#EAF8F5] px-3 py-1.5 text-xs font-semibold text-[#0B6B5A]">
                    SERVICE ENQUIRY
                  </span>

                  <h2 className="mt-4 text-2xl font-bold text-[#183B36]">
                    Enquire About {service.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Complete the form below. Our team can contact you
                    about your enquiry.
                  </p>
                </div>

                <ServiceEnquiryForm service={service} onSuccess={() => setIsSubmitted(true)} />
              </div>
            </div>

            {/* Service content */}
            <div className="order-2 lg:order-1 lg:sticky lg:top-8">
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative aspect-[16/9] w-full bg-[#EAF8F5]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#183B36]/70 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#0B6B5A]">
                      CUROAID CARE
                    </span>

                    <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                      {service.shortTitle}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <h2 className="text-2xl font-bold leading-tight text-[#183B36] sm:text-3xl">
                    {service.headline}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                    {service.description}
                  </p>

                  <h3 className="mt-6 text-base font-bold text-[#183B36]">
                    Why enquire with CuroAid?
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#EAF8F5] text-[#0B6B5A]">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="size-4"
                            aria-hidden="true"
                          >
                            <path
                              d="m5 10 3 3 7-7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>

                        <span className="text-sm leading-6 text-gray-700">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 rounded-xl bg-[#EAF8F5] p-4">
                    <p className="font-semibold text-[#0B6B5A]">
                      Need help choosing a service?
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#355C54]">
                      Send us your enquiry and let our team guide you
                      through the available options.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-gray-500">
                CuroAid Healthcare at Home
              </p>
            </div>
          </div>
        </section>
      </main>
      {isSubmitted && <Footer />}
    </>
  );
}