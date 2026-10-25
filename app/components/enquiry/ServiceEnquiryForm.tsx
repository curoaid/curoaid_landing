"use client";

import { EnquiryService } from "@/lib/enquiryServices";
import { useState, type FormEvent } from "react";

type Props = {
    service: EnquiryService;
    onSuccess: () => void;
};

type FormState = {
    name: string;
    mobile: string;
    email: string;
    location: string;
    message: string;
};

const initialForm: FormState = {
    name: "",
    mobile: "",
    email: "",
    location: "",
    message: "",
};

const inputClass =
    "mt-1.5 block w-full min-w-0 rounded-xl border border-[#D9E2E8] bg-white px-4 py-3 text-base text-[#183B36] outline-none transition placeholder:text-gray-400 focus:border-[#0B6B5A] focus:ring-2 focus:ring-[#0B6B5A]/15";

export default function ServiceEnquiryForm({ service, onSuccess, }: Props) {
    const [form, setForm] = useState<FormState>(initialForm);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function updateField(field: keyof FormState, value: string) {
        setForm((previous) => ({ ...previous, [field]: value }));
        setError("");
        setSuccess("");
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setSuccess("");

        const normalizedMobile = form.mobile.replace(/[\s()-]/g, "");

        if (!/^\+?[0-9]{10,15}$/.test(normalizedMobile)) {
            setError("Please enter a valid mobile number.");
            return;
        }

        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://api.vathala.com/general/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...form,
                    mobile: normalizedMobile,
                    serviceSlug: service.slug,
                    enquiryType: service.title,
                    source: "Google-form",
                    pageUrl:
                        typeof window !== "undefined" ? window.location.href : "",
                }),
            });

            const data = await response.json().catch(() => null);

            if (!response.ok) {
                throw new Error(
                    data?.message || "Unable to submit your enquiry. Please try again."
                );
            }

            setSuccess(
                data?.message ||
                "Thank you! Your enquiry has been submitted successfully."
            );

            setForm(initialForm);
            onSuccess();
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
        <>
            {success ? (
                <div
                    role="status"
                    className="rounded-2xl border border-[#C9EDE3] bg-gradient-to-br from-[#EAF8F5] to-white p-6 text-center shadow-md sm:p-8"
                >
                    {/* Success icon */}
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D5F3E8]">
                        <svg
                            className="h-9 w-9 text-[#0B6B5A]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12l4 4L19 6"
                            />
                        </svg>
                    </div>

                    <h2 className="mb-2 text-xl font-bold text-[#183B36] sm:text-2xl">
                        Thank You!
                    </h2>

                    <p className="mb-2 text-base font-semibold text-[#0B6B5A]">
                        Your enquiry has been submitted successfully.
                    </p>

                    <p className="mb-6 text-sm leading-6 text-gray-600">
                        {success}
                        {" "}Our CuroAid team will contact you soon.
                    </p>

                    <a
                        href="https://curoaid.com"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4CC6F0] to-[#74C067] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#0B6B5A] focus:ring-offset-2"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 10.5L12 3l9 7.5M5.5 9v11h13V9M9 20v-6h6v6"
                            />
                        </svg>
                        Go to Home
                    </a>
                </div>
            ) :
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="enquiry-name"
                            className="text-sm font-semibold text-[#183B36]"
                        >
                            Full name <span className="text-red-600">*</span>
                        </label>
                        <input
                            id="enquiry-name"
                            name="name"
                            autoComplete="name"
                            maxLength={100}
                            value={form.name}
                            onChange={(event) => updateField("name", event.target.value)}
                            placeholder="Enter your full name"
                            className={inputClass}
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="enquiry-mobile"
                            className="text-sm font-semibold text-[#183B36]"
                        >
                            Mobile number <span className="text-red-600">*</span>
                        </label>

                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-sm font-semibold text-[#183B36]">
                                +91
                            </span>

                            <input
                                id="enquiry-mobile"
                                name="mobile"
                                type="tel"
                                inputMode="numeric"
                                autoComplete="tel-national"
                                maxLength={10}
                                pattern="[0-9]{10}"
                                value={form.mobile}
                                onChange={(event) =>
                                    updateField(
                                        "mobile",
                                        event.target.value.replace(/\D/g, "").slice(0, 10)
                                    )
                                }
                                placeholder="Enter 10-digit mobile number"
                                className={`${inputClass} pl-14`}
                                required
                            />
                        </div>
                    </div>
                    {/* <div>
                <label
                    htmlFor="enquiry-email"
                    className="text-sm font-semibold text-[#183B36]"
                >
                    Email address <span className="font-normal text-gray-500">(optional)</span>
                </label>
                <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder="Enter your email"
                    className={inputClass}
                />
            </div> */}

                    <div>
                        <label
                            htmlFor="enquiry-location"
                            className="text-sm font-semibold text-[#183B36]"
                        >
                            City or location <span className="text-red-600">*</span>
                        </label>
                        <input
                            id="enquiry-location"
                            name="location"
                            autoComplete="address-level2"
                            maxLength={150}
                            value={form.location}
                            onChange={(event) => updateField("location", event.target.value)}
                            placeholder="Enter your city or area"
                            className={inputClass}
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="enquiry-service"
                            className="text-sm font-semibold text-[#183B36]"
                        >
                            Selected service
                        </label>
                        <input
                            id="enquiry-service"
                            value={service.title}
                            readOnly
                            className={`${inputClass} cursor-not-allowed bg-[#F4FAF9]`}
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            This service is selected from your campaign link.
                        </p>
                    </div>

                    <div>
                        <label
                            htmlFor="enquiry-message"
                            className="text-sm font-semibold text-[#183B36]"
                        >
                            How can we help?{" "}
                            <span className="font-normal text-gray-500">(optional)</span>
                        </label>
                        <textarea
                            id="enquiry-message"
                            name="message"
                            rows={3}
                            maxLength={1000}
                            value={form.message}
                            onChange={(event) => updateField("message", event.target.value)}
                            placeholder="Tell us about your service requirements"
                            className={`${inputClass} resize-y`}
                        />
                    </div>

                    {error && (
                        <p
                            role="alert"
                            className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
                        >
                            {error}
                        </p>
                    )}


                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl bg-gradient-to-r from-[#4CC6F0] to-[#74C067] px-5 py-3.5 font-bold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#0B6B5A] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Submitting enquiry..." : "Submit Enquiry"}
                    </button>

                    <p className="text-center text-xs leading-5 text-gray-500">
                        By submitting this form, you agree to be contacted about your enquiry
                        in accordance with CuroAid&apos;s privacy policy.
                    </p>
                </form>
            }
        </>

    );
}