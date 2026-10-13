"use client";

import { useEffect, useState } from "react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultService?: string;
}

const API_URL = "https://api.vathala.com/general/create";

const SERVICES = [
    { key: "doctor", name: "Doctor at Home", enquiryType: "home-doctor" },
    { key: "nursing", name: "Home Nursing Services", enquiryType: "home-nursing" },
    { key: "wound-care", name: "Wound Care Service", enquiryType: "wound-care" },
    { key: "eldercare", name: "Eldercare", enquiryType: "eldercare" },
    { key: "veterinary", name: "Veterinary", enquiryType: "veterinary" },
    { key: "physiotherapy", name: "Physiotherapy", enquiryType: "physiotherapy" },
    { key: "yoga", name: "Yoga", enquiryType: "yoga" },
    { key: "nri-care", name: "NRI Patient Care", enquiryType: "nri-care" },
    { key: "equipment", name: "Hospital Equipment", enquiryType: "hospital-equipment" },
    { key: "renal-test", name: "Renal Blood Test", enquiryType: "renal-test" },
];

export default function BookingModal({
    isOpen,
    onClose,
    defaultService,
}: BookingModalProps) {
    const [selectedService, setSelectedService] = useState(defaultService || "");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const matchingService = SERVICES.find(
            (service) =>
                service.name === defaultService ||
                service.key === defaultService ||
                service.enquiryType === defaultService
        );

        setSelectedService(matchingService?.name || "");
    }, [defaultService, isOpen]);

    useEffect(() => {
        if (isOpen) {
            setSuccessMessage("");
            setErrorMessage("");
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBookingSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const formData = new FormData(e.currentTarget);
            const serviceName = String(formData.get("service") || "");
            const selectedServiceData = SERVICES.find(
                (service) => service.name === serviceName
            );

            if (!selectedServiceData) {
                throw new Error("Please select a valid service.");
            }

            const bookingData = {
                enquiryType: selectedServiceData.enquiryType,
                location: String(formData.get("location") || "").trim(),
                message: "",
                mobile: String(formData.get("phone") || "").replace(/\D/g, ""),
                name: String(formData.get("fullName") || "").trim(),
                source: "Google",
                urgency: "normal",
            };

            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(bookingData),
            });

            const result = await response.json().catch(() => null);

            if (!response.ok) {
                throw new Error(
                    result?.message ||
                    result?.error ||
                    `Booking failed (${response.status}). Please try again.`
                );
            }

            setSuccessMessage(
                result?.message || "Your booking request was submitted successfully!"
            );

            // Reset fields after a successful request.
        
            setSelectedService("");
            onClose();

        } catch (error: unknown) {
            console.error("Booking submission error:", error);

            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Unable to submit your booking. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="modal-backdrop active"
            onClick={(e) => {
                if (e.target === e.currentTarget && !isSubmitting) {
                    onClose();
                }
            }}
        >
            <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="booking-title">
                <button
                    type="button"
                    className="modal-close-btn"
                    onClick={onClose}
                    aria-label="Close"
                    disabled={isSubmitting}
                >
                    &times;
                </button>

                <h2 className="modal-title" id="booking-title">
                    Book a Visit Request
                </h2>

                <p className="modal-sub">
                    Tell us what you need — we'll take it from here.
                </p>

                {successMessage && (
                    <p role="status" style={{ color: "green", marginBottom: 12 }}>
                        {successMessage}
                    </p>
                )}

                {errorMessage && (
                    <p role="alert" style={{ color: "red", marginBottom: 12 }}>
                        {errorMessage}
                    </p>
                )}

                <form onSubmit={handleBookingSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="serviceSelect">
                            Service
                        </label>

                        <select
                            id="serviceSelect"
                            name="service"
                            className="form-select"
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            required
                            disabled={isSubmitting || !!successMessage}
                        >
                            <option value="">Select a service</option>

                            {SERVICES.map((service) => (
                                <option key={service.key} value={service.name}>
                                    {service.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="fullName">
                            Full name
                        </label>
                        <input
                            id="fullName"
                            name="fullName"
                            className="form-input"
                            type="text"
                            placeholder="Your name"
                            maxLength={100}
                            autoComplete="name"
                            required
                            disabled={isSubmitting || !!successMessage}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="phone">
                            Phone number
                        </label>
                        <input
                            id="phone"
                            name="number"
                            className="form-input"
                            type="tel"
                            placeholder="+91 98765 43210"
                            maxLength={20}
                            autoComplete="tel"
                            required
                            disabled={isSubmitting || !!successMessage}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="location">
                            Location
                        </label>
                        <input
                            id="location"
                            name="location"
                            className="form-input"
                            type="text"
                            placeholder="Your location"
                            maxLength={250}
                            required
                            disabled={isSubmitting || !!successMessage}
                        />
                    </div>

                    {!successMessage ? (
                        <button
                            type="submit"
                            className="btn-submit-booking"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Request Booking"}
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="btn-submit-booking"
                            onClick={onClose}
                        >
                            Done
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}