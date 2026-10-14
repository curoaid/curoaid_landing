
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
  const [selectedService, setSelectedService] = useState("");
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

    setErrorMessage("");
    setSuccessMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("fullName") || "").trim();
    const serviceName = String(formData.get("service") || "").trim();
    const location = String(formData.get("location") || "").trim();
    const mobileInput = String(formData.get("phone") || "").trim();
    const mobile = mobileInput.replace(/\D/g, "");

    // Validate all required fields.
    if (!serviceName || !name || !location || !mobileInput) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!/^[\p{L}][\p{L}\s.'-]*$/u.test(name)) {
      setErrorMessage("Please enter a valid name.");
      return;
    }

    // Allow international numbers with country codes.
    if (mobile.length < 10 || mobile.length > 15) {
      setErrorMessage("Please enter a valid mobile number.");
      return;
    }

    const selectedServiceData = SERVICES.find(
      (service) => service.name === serviceName
    );

    if (!selectedServiceData) {
      setErrorMessage("Please select a valid service.");
      return;
    }

    setIsSubmitting(true);

    try {
      const bookingData = {
        enquiryType: selectedServiceData.enquiryType,
        location,
        message: "",
        mobile,
        name,
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
            `Booking failed(${ response.status }).Please try again.`
        );
      }

      setSuccessMessage(
        "Your request has been submitted successfully. Our representative will reach out to you shortly."
      );
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

  const handleRetry = () => {
    setErrorMessage("");
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
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
      >
        {!successMessage && (
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close"
            disabled={isSubmitting}
          >
            &times;
          </button>
        )}

        {successMessage ? (
          /* SUCCESS SCREEN */
          <div className="booking-success" role="status">
            <div className="success-icon">
              <svg
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12 2.5 2.5L16 9" />
              </svg>
            </div>

            <h2>Request submitted</h2>

            <p>{successMessage}</p>

            <button
              type="button"
              className="success-done-btn"
              onClick={onClose}
            >
              Done
            </button>
          </div>
        ) : errorMessage ? (
          /* FAILURE SCREEN */
          <div className="booking-failure" role="alert">
            <div className="failure-icon">
              <svg
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="m15 9-6 6M9 9l6 6" />
              </svg>
            </div>

            <h2>Request failed</h2>

            <p>{errorMessage}</p>

            <button
              type="button"
              className="failure-retry-btn"
              onClick={handleRetry}
            >
              Try Again
            </button>

            <button
              type="button"
              className="failure-cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        ) : (
          /* BOOKING FORM */
          <>
            <h2 className="modal-title" id="booking-title">
              Book a Visit Request
            </h2>

            <p className="modal-sub">
              Tell us what you need — we'll take it from here.
            </p>

            <form onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="serviceSelect">
                  Service <span aria-hidden="true">*</span>
                </label>

                <select
                  id="serviceSelect"
                  name="service"
                  className="form-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  disabled={isSubmitting}
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
                  Full name <span aria-hidden="true">*</span>
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
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Mobile number <span aria-hidden="true">*</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  className="form-input"
                  type="tel"
                  placeholder="+91 98765 43210"
                  maxLength={20}
                  autoComplete="tel"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="location">
                  Location <span aria-hidden="true">*</span>
                </label>

                <input
                  id="location"
                  name="location"
                  className="form-input"
                  type="text"
                  placeholder="Your location"
                  maxLength={250}
                  autoComplete="street-address"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="btn-submit-booking"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Booking"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

