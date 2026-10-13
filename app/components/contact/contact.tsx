"use client"

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
    Mail,
    MapPin,
    Phone,
    MessageCircle,
} from "lucide-react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

function ContactInfo() {
    return (
        <div className="contact-info">

            <span className="section-label">
                WE'RE HERE TO HELP
            </span>

            <h2>We’re Here to Help You</h2>

            <p className="contact-info-description">
                Whether you need medical assistance, appointment support, or general
                inquiries, our team is ready to guide you. Contact us through any of
                the channels below and we&apos;ll respond as quickly as possible.
            </p>

            <div className="contact-details">
                <a href="tel:+919150064364" className="contact-detail">
                    <Phone size={20} />
                    <span>+91 9150064364</span>
                </a>

                <a
                    href="mailto:support@vathala.com"
                    className="contact-detail"
                >
                    <Mail size={20} />
                    <span>support@vathala.com</span>
                </a>

                <div className="contact-detail">
                    <MapPin size={20} />
                    <span>Chennai, India</span>
                </div>

                <a
                    href="https://wa.me/919150064364"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-detail"
                >
                    <MessageCircle size={20} />
                    <span>9150064364</span>
                </a>
            </div>

            <div className="contact-map">
                <iframe
                    title="CuroAid location"
                    src="https://www.google.com/maps?q=Chennai,India&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}

const testimonials = [
    {
        name: "Suresh",
        location: "Chennai",
        text: "I booked a veterinary doctor through CuroAid when my dog was unwell. Excellent check-up and treatment at home.",
    },
    {
        name: "Suresh",
        location: "Chennai",
        text: "I booked a veterinary doctor through CuroAid when my dog was unwell. Excellent check-up and treatment at home.",
    },
    {
        name: "Suresh",
        location: "Chennai",
        text: "I booked a veterinary doctor through CuroAid when my dog was unwell. Excellent check-up and treatment at home.",
    },
];

function ContactTestimonials() {
    return (
        <section className="contact-testimonials">
            <div className="contact-container">
                <div className="testimonial-heading">
                    <div>
                        <span className="section-label testimonial-label">
                            • TESTIMONIAL
                        </span>

                        <h2>Testimonials</h2>
                    </div>

                    <p>
                        Real experiences from patients and families who have trusted
                        CuroAid for their home healthcare needs.
                    </p>
                </div>

                <div className="testimonial-grid">
                    {testimonials.map((testimonial, index) => (
                        <article
                            key={`${testimonial.name}-${index}`}
                            className="testimonial-card"
                        >
                            <div className="testimonial-stars">
                                ★★★★★
                            </div>

                            <div className="testimonial-user">
                                <div className="testimonial-avatar">
                                    <span>●</span>
                                </div>

                                <div>
                                    <strong>{testimonial.name}</strong>
                                    <small>{testimonial.location}</small>
                                </div>

                                <span className="quote-icon">”</span>
                            </div>

                            <p>“{testimonial.text}”</p>
                        </article>
                    ))}
                </div>

                <div className="testimonial-dots">
                    <span />
                    <span />
                </div>
            </div>
        </section>
    );
}
function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (loading) return;

        const form = event.currentTarget;
        const formData = new FormData(form);

        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const data = {
                name: String(formData.get("name") || "").trim(),
                email: String(formData.get("email") || "").trim(),
                mobile: String(formData.get("phone") || "").replace(/\D/g, ""),
                location: String(formData.get("location") || "").trim(),
                message: String(formData.get("message") || "").trim(),
                enquiryType: "general-enquiry",
                source: "contact-us-form",
                urgency: "normal",
            };

            const response = await fetch(
                "https://api.vathala.com/general/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json().catch(() => null);

            if (!response.ok) {
                throw new Error(
                    result?.message ||
                    result?.error ||
                    `Request failed (${response.status}). Please try again.`
                );
            }

            setSuccessMessage(
                result?.message ||
                "Thank you! Your enquiry has been submitted successfully."
            );

            form.reset();
        } catch (error: unknown) {
            console.error("Contact form submission error:", error);

            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Unable to submit your enquiry. Please try again."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="contact-form-card">
            <div className="contact-form-heading">
                <div className="contact-form-icon">▣</div>

                <div>
                    <span>BOOK A CONSULTATION</span>
                    <h2>Get in Touch With Us</h2>
                </div>
            </div>

            <p className="contact-form-description">
                Fill in the details below and our care team will reach out to you promptly.
            </p>

            {successMessage && (
                <p
                    role="status"
                    aria-live="polite"
                    className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-700"
                >
                    {successMessage}
                </p>
            )}

            {errorMessage && (
                <p
                    role="alert"
                    aria-live="assertive"
                    className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700"
                >
                    {errorMessage}
                </p>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
                <label className="contact-input">
                    <span className="input-icon">♙</span>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        autoComplete="name"
                        maxLength={100}
                        required
                        disabled={loading}
                    />
                </label>

                <label className="contact-input">
                    <span className="input-icon">✉</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        autoComplete="email"
                        required
                        disabled={loading}
                    />
                </label>

                <label className="contact-input">
                    <span className="input-icon">⌕</span>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="+91 Enter your phone number"
                        autoComplete="tel"
                        maxLength={20}
                        required
                        disabled={loading}
                    />
                </label>

                <label className="contact-input">
                    <span className="input-icon">⌖</span>
                    <input
                        type="text"
                        name="location"
                        placeholder="Enter your city or location"
                        autoComplete="address-level2"
                        maxLength={250}
                        required
                        disabled={loading}
                    />
                </label>

                <label className="contact-textarea">
                    <span className="input-icon">□</span>
                    <textarea
                        name="message"
                        placeholder="Tell us about your care needs..."
                        rows={4}
                        maxLength={2000}
                        required
                        disabled={loading}
                    />
                </label>

                <button
                    type="submit"
                    className="contact-submit-button"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit Request"}
                </button>
            </form>

            <p className="contact-privacy">
                <span>♧</span>
                Your data is safe and 100% confidential
            </p>
        </div>
    );
}
const data = {
    hero: {
        badge: "Contact Us",
        title: "Get in Touch With CuroAid",
        description:
            "Have questions about our services or need to schedule an appointment? Our team is here to help. Reach out to us and experience responsive, patient-focused support from the CuroAid healthcare team.",
        image: "/assets/contact-banner.webp",
        imageAlt:
            "Contact CuroAid for trusted home healthcare services and patient support",
    },
};


export default function Contact() {
    return (
        <main className="contact-page">
            <Navbar />

            {/* <section className="contact-hero">
        <Image
          src="/assets/contact-banner.webp"
          alt="CuroAid healthcare support"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="contact-hero-image"
        />

        <div className="contact-hero-overlay" />

        <div className="contact-hero-content">
          <span className="contact-hero-badge">
            Contact Us
          </span>

          <h1>Get in Touch With Curoaid</h1>

          <p>
            Have questions about our services or need to schedule an appointment?
            Our team is here to help. Reach out to us and experience responsive,
            patient-focused support from the CuroAid healthcare team.
          </p>

          <div className="contact-hero-actions">
            <Link href="/book-appointment" className="contact-book-button">
              Book Now
              <span>→</span>
            </Link>

            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="store-badge"
            >
              <Image
                src="/assets/google-play.webp"
                alt="Get it on Google Play"
                width={135}
                height={40}
              />
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="store-badge"
            >
              <Image
                src="/assets/app-store.webp"
                alt="Download on the App Store"
                width={135}
                height={40}
              />
            </a>
          </div>
        </div>
      </section> */}
            <section className="px-2 sm:px-3 lg:px-5">
                <div className="relative mx-auto w-full overflow-hidden rounded-xl sm:rounded-2xl">
                    {/* Hero Image */}
                    <Image
                        src={data.hero.image}
                        alt={data.hero.imageAlt}
                        width={1800}
                        height={650}
                        priority
                        className="h-[360px] w-full object-cover object-center sm:h-[400px] lg:h-[430px]"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/10" />

                    {/* Hero content */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 py-6 text-center sm:px-6">
                        <div className="w-full max-w-[760px] text-white">

                            {/* Badge */}
                            <span
                                className="
                        mb-2 inline-flex
                        rounded-full
                        bg-[#55d7ef]/90
                        px-3 py-1
                        text-[9px] font-medium
                        sm:mb-3 sm:px-4 sm:py-1.5 sm:text-xs
                    "
                            >
                                {data.hero.badge}
                            </span>

                            {/* Title */}
                            <h1
                                className="
                        mx-auto
                        max-w-[340px]
                        text-2xl
                        font-extrabold
                        leading-[1.15]
                        sm:max-w-[600px]
                        sm:text-4xl
                        lg:max-w-[760px]
                        lg:text-5xl
                    "
                            >
                                {data.hero.title}
                            </h1>

                            {/* Description */}
                            <p
                                className="
                        mx-auto
                        mt-2
                        max-w-[330px]
                        text-[11px]
                        leading-[1.5]
                        text-white
                        sm:mt-3
                        sm:max-w-[600px]
                        sm:text-sm
                        sm:leading-6
                    "
                            >
                                {data.hero.description}
                            </p>


                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-main-section">
                <div className="contact-container contact-grid">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </section>

            <ContactTestimonials />
            <Footer />
        </main>
    );
}