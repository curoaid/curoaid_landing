
"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import {
    HeartPulse,
    UserRound,
    Phone,
    MapPin,
    MessageSquare,
    ShieldCheck,
    Send,
    CheckCircle2,
    LoaderCircle,
    Stethoscope,
    House,
    HeartHandshake,
} from "lucide-react";
import { enquirybanner } from "@/lib/assets";

const services = [
    "Doctor at Home",
    "Home Nursing Services",
    "Physiotherapy at Home",
    "Elder Care",
    "Wound Care at Home",
    "Veterinary Doctor at Home",
    "Yoga at Home",
    "Blood Test at Home",
    "NRI Patient Care",
    "Medical Equipment Rental",
    "Medicine Delivery"

];

type FormValues = {
    name: string;
    mobile: string;
    service: string;
    location: string;
    message: string;
    consent: boolean;
    source: string;
    urgency: string;
    cfTurnstileToken: string;
};
type EnquiryFormProps = {
    onSuccess: () => void;
};

const initialValues: FormValues = {
    name: "",
    mobile: "",
    service: "",
    location: "",
    message: "",
    consent: false,
    source: "google-form",
    urgency: "normal",
    cfTurnstileToken: "",
};

const inputClass =
    "box-border h-10 w-full min-w-0 rounded-xl border border-[#d8e1eb] bg-[#f7f9fb] pl-10 pr-3 text-sm text-[#153d50] outline-none transition placeholder:text-sm placeholder:text-[#8792a2] focus:border-[#19b9ba] focus:ring-2 focus:ring-[#19b9ba]/15 sm:h-11 sm:pl-11 sm:pr-4 sm:text-sm";

const labelClass =
    "mb-1 block text-xs font-semibold text-[#153d50] sm:mb-1.5 sm:text-sm";

const iconClass =
    "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400";

export default function EnquiryForm({ onSuccess }: EnquiryFormProps) {
    const [form, setForm] = useState<FormValues>(initialValues);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function updateField<K extends keyof FormValues>(
        field: K,
        value: FormValues[K]
    ) {
        setForm((previous) => ({ ...previous, [field]: value }));
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        const phone = form.mobile.replace(/\D/g, "");

        if (phone.length < 10 || phone.length > 15) {
            setError("Please enter a valid mobile number.");
            return;
        }

        if (!form.consent) {
            setError("Please accept the consent to continue.");
            return;
        }

        setLoading(true);

        try {
            // Replace this with your existing backend endpoint if different.
            const response = await fetch("https://api.vathala.com/general/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...form,
                    enquiryType: form.service
                }),
            });
            if (!response.ok) {
                throw new Error("Unable to submit your enquiry. Please try again.");
            }

            setSubmitted(true);
            setForm(initialValues);
            setTimeout(() => {
                onSuccess();
            }, 1000);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    }


    return (

        <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#effaff] via-white to-[#f3fbf2] px-3 py-6 sm:px-6 sm:py-10">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">
                <section
                    id="enquiry-form"
                    className="order-1 mx-auto w-full min-w-0 max-w-2xl rounded-2xl border border-white bg-white p-4 shadow-[0_12px_45px_rgba(21,61,80,0.09)] sm:rounded-3xl sm:p-8 lg:order-2"
                >
                    <div className="mb-5 text-center sm:mb-7">
                        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4cc6f0] to-[#74c067] text-white sm:h-12 sm:w-12">
                            <HeartPulse size={23} />
                        </div>

                        <h1 className="text-2xl font-extrabold tracking-tight text-[#153d50] sm:text-3xl">
                            Healthcare Enquiry
                        </h1>

                        <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                            Tell us what you need. Our team will get in touch with you.
                        </p>
                    </div>



                    {submitted ? (
                        <div className="py-8 text-center">
                            <CheckCircle2
                                size={42}
                                className="mx-auto mb-3 text-emerald-500"
                            />
                            <h3 className="text-lg font-bold text-[#153d50]">
                                Enquiry Submitted!
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">
                                Thank you for contacting CuroAid. Our team will get in touch
                                with you.
                            </p>

                            <button
                                type="button"
                                onClick={() => setSubmitted(false)}
                                className="mt-4 rounded-xl bg-gradient-to-r from-[#4cc6f0] to-[#74c067] px-4 py-2.5 text-sm font-semibold text-white"
                            >
                                Submit Another Enquiry
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-3 sm:space-y-4"
                        >
                            {/* Full Name */}
                            <div>
                                <label htmlFor="name" className={labelClass}>
                                    Full Name <span className="text-red-500">*</span>
                                </label>

                                <div className="relative min-w-0">
                                    <UserRound aria-hidden="true" className={iconClass} />
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Enter your full name"
                                        value={form.name}
                                        onChange={(e) =>
                                            updateField("name", e.target.value)
                                        }
                                        className={inputClass}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Mobile Number */}
                            <div>
                                <label htmlFor="mobile" className={labelClass}>
                                    Mobile Number <span className="text-red-500">*</span>
                                </label>

                                <div className="relative min-w-0">
                                    <Phone aria-hidden="true" className={iconClass} />

                                    <input
                                        id="mobile"
                                        name="mobile"
                                        type="tel"
                                        inputMode="numeric"
                                        autoComplete="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        value={form.mobile}
                                        onChange={(e) => {
                                            let digits = e.target.value.replace(/\D/g, "");

                                            // Remove India's country code if entered
                                            if (digits.startsWith("91") && digits.length > 10) {
                                                digits = digits.slice(2);
                                            }

                                            // Limit to 10 digits
                                            digits = digits.slice(0, 10);

                                            updateField("mobile", digits);
                                        }}
                                        className={inputClass}
                                        maxLength={10}
                                        pattern="[6-9][0-9]{9}"
                                        title="Enter a valid 10-digit Indian mobile number"
                                        required
                                    />

                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                                        +91
                                    </span>
                                </div>
                            </div>

                            {/* Healthcare Service */}
                            <div>
                                <label htmlFor="service" className={labelClass}>
                                    Healthcare Service <span className="text-red-500">*</span>
                                </label>

                                <div className="relative min-w-0">
                                    <Stethoscope
                                        aria-hidden="true"
                                        className={iconClass}
                                    />

                                    <select
                                        id="service"
                                        name="service"
                                        value={form.service}
                                        onChange={(e) =>
                                            updateField("service", e.target.value)
                                        }
                                        className={`${inputClass} appearance-none pr-9`}
                                        required
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>

                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <label htmlFor="location" className={labelClass}>
                                    City / Area <span className="text-red-500">*</span>
                                </label>

                                <div className="relative min-w-0">
                                    <MapPin aria-hidden="true" className={iconClass} />
                                    <input
                                        id="location"
                                        name="location"
                                        type="text"
                                        autoComplete="address-level2"
                                        placeholder="Enter your city or area"
                                        value={form.location}
                                        onChange={(e) =>
                                            updateField("location", e.target.value)
                                        }
                                        className={inputClass}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className={labelClass}>
                                    Your Message{" "}
                                    <span className="font-normal text-gray-400">
                                        (Optional)
                                    </span>
                                </label>

                                <div className="relative min-w-0">
                                    <MessageSquare
                                        aria-hidden="true"
                                        className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-gray-400"
                                    />
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={2}
                                        placeholder="Tell us briefly how we can help"
                                        value={form.message}
                                        onChange={(e) =>
                                            updateField("message", e.target.value)
                                        }
                                        className="box-border min-h-[58px] w-full min-w-0 resize-y rounded-xl border border-[#d8e1eb] bg-[#f7f9fb] py-2 pl-10 pr-3 text-sm text-[#153d50] outline-none placeholder:text-sm placeholder:text-[#8792a2] focus:border-[#19b9ba] focus:ring-2 focus:ring-[#19b9ba]/15 sm:min-h-[68px]"
                                    />
                                </div>
                            </div>

                            {/* Consent */}
                            <label className="flex cursor-pointer items-start gap-2 text-[11px] leading-relaxed text-gray-500 sm:text-xs">
                                <input
                                    type="checkbox"
                                    checked={form.consent}
                                    onChange={(e) =>
                                        updateField("consent", e.target.checked)
                                    }
                                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#20b9ad]"
                                    required
                                />

                                <span>
                                    I agree that CuroAid may contact me regarding my enquiry.
                                    Please see our{" "}
                                    <a
                                        href="/privacy-policy"
                                        className="font-medium text-[#238fa9] underline"
                                    >
                                        Privacy Policy
                                    </a>
                                    .
                                </span>
                            </label>

                            {/* Error */}
                            {error && (
                                <p
                                    role="alert"
                                    className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600"
                                >
                                    {error}
                                </p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0cba87] to-[#06b9cf] px-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(0,190,180,0.18)] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60 sm:h-12 sm:text-base"
                            >
                                {loading ? (
                                    <>
                                        <LoaderCircle size={17} className="animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} />
                                        Submit Enquiry
                                    </>
                                )}
                            </button>

                            <p className="flex items-center justify-center gap-1 text-[10px] text-gray-400 sm:text-xs">
                                <ShieldCheck size={13} />
                                Your information is handled with care.
                            </p>
                        </form>
                    )}



                    {/* Keep your existing form and success message here.
            Move the complete {submitted ? (...) : (...)} block
            from your current component into this location. */}
                </section>

                {/* LEFT ON DESKTOP, BELOW FORM ON MOBILE */}
                <section className="order-2 min-w-0 lg:order-1">
                    <div className="relative h-48 overflow-hidden rounded-2xl shadow-md sm:h-72 lg:h-80">
                        <Image
                            src={enquirybanner}
                            alt="Healthcare at home"
                            fill
                            priority
                            sizes="(max-width: 1023px) 100vw, 80vw"
                            className="object-cover object-top"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102f3b]/85 to-transparent p-4 pt-12 sm:p-6 sm:pt-16">
                            <h2 className="text-xl font-bold text-white sm:text-2xl">
                                Care that feels like home
                            </h2>
                            <p className="mt-1 text-xs text-white/90 sm:text-sm">
                                Compassionate support for you and your family.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#168f9d] shadow-sm sm:text-sm">
                            <HeartPulse size={16} />
                            CuroAid Healthcare at Home
                        </span>

                        <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#153d50] sm:text-3xl lg:text-4xl">
                            Quality Healthcare,
                            <span className="block bg-gradient-to-r from-[#20bce1] to-[#70bd65] bg-clip-text text-transparent">
                                Right at Your Home
                            </span>
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                            Get convenient healthcare services at home with care and support
                            tailored to your needs. Submit your enquiry and let our team help
                            you find the right service.
                        </p>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                        <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                            <House className="shrink-0 text-cyan-600" size={22} />
                            <div>
                                <h3 className="text-sm font-bold text-[#153d50]">Care at Home</h3>
                                <p className="text-xs text-gray-500">
                                    Healthcare in your comfort zone.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                            <HeartHandshake className="shrink-0 text-green-600" size={22} />
                            <div>
                                <h3 className="text-sm font-bold text-[#153d50]">
                                    Personalised Support
                                </h3>
                                <p className="text-xs text-gray-500">
                                    Support for your care requirements.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                            <ShieldCheck className="shrink-0 text-blue-600" size={22} />
                            <div>
                                <h3 className="text-sm font-bold text-[#153d50]">
                                    Your Care Matters
                                </h3>
                                <p className="text-xs text-gray-500">
                                    A simple way to request the service you need.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RIGHT ON DESKTOP, TOP ON MOBILE */}

            </div>
        </main>

    );

}
