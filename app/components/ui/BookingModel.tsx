
// "use client";

// import { redirectToThankYou } from "@/lib/thank-you";
// import { useEffect, useState } from "react";
// import { useRouter, usePathname } from "next/navigation";

// interface BookingModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   defaultService?: string;
// }

// const API_URL = "https://api.vathala.com/general/create";

// const SERVICES = [
//   { key: "doctor", name: "Doctor at Home", enquiryType: "home-doctor" },
//   { key: "nursing", name: "Home Nursing Services", enquiryType: "home-nursing" },
//   { key: "wound-care", name: "Wound Care Service", enquiryType: "wound-care" },
//   { key: "eldercare", name: "Eldercare", enquiryType: "eldercare" },
//   { key: "veterinary", name: "Veterinary", enquiryType: "veterinary" },
//   { key: "medicine-delivery", name: "Medicine Delivery Service ", enquiryType: "medicine-delivery" },
//   { key: "physiotherapy", name: "Physiotherapy", enquiryType: "physiotherapy" },
//   { key: "yoga", name: "Yoga", enquiryType: "yoga" },
//   { key: "nri-care", name: "NRI Patient Care", enquiryType: "nri-care" },
//   { key: "equipment", name: "Hospital Equipment", enquiryType: "hospital-equipment" },
//   { key: "blood-test", name: "Renal Blood Test", enquiryType: "renal-test" },
// ];

// export default function BookingModal({
//   isOpen,
//   onClose,
//   defaultService,
// }: BookingModalProps) {
//   const [selectedService, setSelectedService] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     const matchingService = SERVICES.find(
//       (service) =>
//         service.name === defaultService ||
//         service.key === defaultService ||
//         service.enquiryType === defaultService
//     );

//     setSelectedService(matchingService?.name || "");
//   }, [defaultService, isOpen]);

//   useEffect(() => {
//     if (isOpen) {
//       setSuccessMessage("");
//       setErrorMessage("");
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;



//   const handleBookingSubmit = async (
//     e: React.FormEvent<HTMLFormElement>
//   ) => {
//     e.preventDefault();

//     if (isSubmitting) return;

//     setErrorMessage("");
//     setSuccessMessage("");

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     const name = String(formData.get("fullName") || "").trim();
//     const serviceName = String(formData.get("service") || "").trim();
//     const location = String(formData.get("location") || "").trim();
//     const mobileInput = String(formData.get("phone") || "").trim();
//     const mobile = mobileInput.replace(/\D/g, "");


//     // Validate all required fields.
//     if (!serviceName || !name || !location || !mobileInput) {
//       setErrorMessage("Please fill in all required fields.");
//       return;
//     }

//     if (!/^[\p{L}][\p{L}\s.'-]*$/u.test(name)) {
//       setErrorMessage("Please enter a valid name.");
//       return;
//     }

//     // Allow international numbers with country codes.
//     if (mobile.length < 10 || mobile.length > 15) {
//       setErrorMessage("Please enter a valid mobile number.");
//       return;
//     }

//     const selectedServiceData = SERVICES.find(
//       (service) => service.name === serviceName
//     );

//     if (!selectedServiceData) {
//       setErrorMessage("Please select a valid service.");
//       return;
//     }

//     setIsSubmitting(true);


//     try {
//       const getSource = () => {
//         // Booking submitted from homepage
//         if (pathname === "/") {
//           return "Home Page";
//         }

//         // Convert URL text into a comparable slug
//         const currentSlug = pathname
//           .replace(/\/+$/, "")
//           .split("/")
//           .pop()
//           ?.toLowerCase();

//         const toSlug = (value: string) =>
//           value
//             .trim()
//             .toLowerCase()
//             .replace(/\s+/g, "-");

//         // Match the current URL with a service
//         const currentService = SERVICES.find(
//           (service) =>
//             currentSlug === toSlug(service.name) ||
//             currentSlug === toSlug(service.key) ||
//             currentSlug === toSlug(service.enquiryType)
//         );

//         // Use defaultService as a fallback if the URL does not match
//         const fallbackService = SERVICES.find(
//           (service) =>
//             service.name === defaultService ||
//             service.key === defaultService ||
//             service.enquiryType === defaultService
//         );

//         return currentService?.name || fallbackService?.name;
//       };
//       const bookingData = {
//         enquiryType: selectedServiceData.enquiryType,
//         location,
//         message: "",
//         mobile,
//         name,

//         // Dynamic source based on the current page
//         source: getSource()

//       };

//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(bookingData),
//       });

//       const result = await response.json().catch(() => null);

//       if (!response.ok) {
//         throw new Error(
//           result?.message ||
//           result?.error ||
//           `Booking failed(${response.status}).Please try again.`
//         );
//       }

//       setSuccessMessage(
//         "Your request has been submitted successfully. Our representative will reach out to you shortly."
//       );
//       // redirectToThankYou(router, selectedServiceData.name);
//     } catch (error: unknown) {
//       console.error("Booking submission error:", error);

//       setErrorMessage(
//         error instanceof Error
//           ? error.message
//           : "Unable to submit your booking. Please try again."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleRetry = () => {
//     setErrorMessage("");
//   };

//   return (
//     <div
//       className="modal-backdrop active"
//       onClick={(e) => {
//         if (e.target === e.currentTarget && !isSubmitting) {
//           onClose();
//         }
//       }}
//     >
//       <div
//         className="modal-card"
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="booking-title"
//       >
//         {!successMessage && (
//           <button
//             type="button"
//             className="modal-close-btn"
//             onClick={onClose}
//             aria-label="Close"
//             disabled={isSubmitting}
//           >
//             &times;
//           </button>
//         )}

//         {successMessage ? (
//           /* SUCCESS SCREEN */
//           <div
//             className="mx-auto flex w-full max-w-[360px] flex-col items-center rounded-2xl bg-white px-5 py-5 text-center sm:px-6 sm:py-6"
//             role="status"
//           >
//             <div className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8F7EF] text-[#16A05D] sm:h-14 sm:w-14">
//               <svg
//                 className="h-7 w-7 sm:h-8 sm:w-8"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 aria-hidden="true"
//               >
//                 <circle cx="12" cy="12" r="9" />
//                 <path d="m8 12 2.5 2.5L16 9" />
//               </svg>
//             </div>

//             <h2 className="mb-2 text-lg font-bold leading-tight text-[#173B32] sm:text-xl">
//               Request submitted!
//             </h2>

//             <p className="mb-4 break-words text-sm leading-relaxed text-slate-500">
//               {successMessage}
//             </p>

//             <button
//               type="button"
//               className="w-full rounded-lg bg-[#0B6B5A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#095447] focus:outline-none focus:ring-2 focus:ring-[#0B6B5A] focus:ring-offset-2"
//               onClick={onClose}
//             >
//               Done
//             </button>
//           </div>
//         ) : errorMessage ? (
//           /* FAILURE SCREEN */
//           <div
//             className="mx-auto flex w-full max-w-[360px] flex-col items-center rounded-2xl bg-white px-5 py-5 text-center sm:px-6 sm:py-6"
//             role="alert"
//           >
//             {/* Failure Icon */}
//             <div className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 sm:h-14 sm:w-14">
//               <svg
//                 className="h-7 w-7 sm:h-8 sm:w-8"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 aria-hidden="true"
//               >
//                 <circle cx="12" cy="12" r="9" />
//                 <path d="m15 9-6 6M9 9l6 6" />
//               </svg>
//             </div>

//             <h2 className="mb-2 text-lg font-bold leading-tight text-gray-800 sm:text-xl">
//               Request failed
//             </h2>

//             <p className="mb-4 break-words text-sm leading-relaxed text-slate-500">
//               {errorMessage}
//             </p>

//             {/* Retry Button */}
//             <button
//               type="button"
//               className="w-full rounded-lg bg-[#0B6B5A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#095447] focus:outline-none focus:ring-2 focus:ring-[#0B6B5A] focus:ring-offset-2"
//               onClick={handleRetry}
//             >
//               Try Again
//             </button>

//             {/* Cancel Button */}
//             <button
//               type="button"
//               className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//           </div>
//         ) : (
//           /* BOOKING FORM */
//           <>
//             <h2 className="modal-title" id="booking-title">
//               Book a Free Consulting
//             </h2>

//             <p className="modal-sub">
//               Tell us what you need - we'll take it from here.
//             </p>

//             <form onSubmit={handleBookingSubmit}>
//               <div className="form-group">
//                 <label className="form-label" htmlFor="serviceSelect">
//                   Service <span aria-hidden="true">*</span>
//                 </label>

//                 <select
//                   id="serviceSelect"
//                   name="service"
//                   className="form-select"
//                   value={selectedService}
//                   onChange={(e) => setSelectedService(e.target.value)}
//                   required
//                   disabled={isSubmitting}
//                 >
//                   <option value="">Select a service</option>

//                   {SERVICES.map((service) => (
//                     <option key={service.key} value={service.name}>
//                       {service.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label className="form-label" htmlFor="fullName">
//                   Full name <span aria-hidden="true">*</span>
//                 </label>

//                 <input
//                   id="fullName"
//                   name="fullName"
//                   className="form-input"
//                   type="text"
//                   placeholder="Your name"
//                   maxLength={100}
//                   autoComplete="name"
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>

//               <div className="form-group">
//                 <label className="form-label" htmlFor="phone">
//                   Mobile number <span aria-hidden="true">*</span>
//                 </label>

//                 <div className="phone-input-wrapper">

//                   <input
//                     id="phone"
//                     name="phone"
//                     className="form-input"
//                     type="tel"
//                     placeholder="98765 43210"
//                     inputMode="numeric"
//                     autoComplete="tel-national"
//                     pattern="[0-9]{10}"
//                     minLength={10}
//                     maxLength={10}
//                     required
//                     disabled={isSubmitting}
//                     onInput={(e) => {
//                       const input = e.currentTarget;
//                       input.value = input.value.replace(/\D/g, "").slice(0, 10);
//                     }}
//                   />
//                 </div>
//               </div>


//               <div className="form-group">
//                 <label className="form-label" htmlFor="location">
//                   Location <span aria-hidden="true">*</span>
//                 </label>

//                 <input
//                   id="location"
//                   name="location"
//                   className="form-input"
//                   type="text"
//                   placeholder="Your location"
//                   maxLength={250}
//                   autoComplete="street-address"
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="btn-submit-booking"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Submitting..." : "Request Booking"}
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { redirectToThankYou } from "@/lib/thank-you";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const API_URL = "https://api.vathala.com/general/create";

const SERVICES = [
  { key: "doctor", name: "Doctor at Home", enquiryType: "home-doctor", path: "/doctor-at-home" },
  { key: "nursing", name: "Home Nursing Services", enquiryType: "home-nursing", path: "/home-nursing-services" },
  { key: "wound-care", name: "Wound Care Service", enquiryType: "wound-care", path: "/wound-care-at-home" },
  { key: "eldercare", name: "Eldercare", enquiryType: "eldercare", path: "/elder-care-at-home" },
  { key: "veterinary", name: "Veterinary", enquiryType: "veterinary", path: "/veterinary-doctor-home-visit" },
  { key: "medicine-delivery", name: "Medicine Delivery Service", enquiryType: "medicine-delivery", path: "/home-medicine-delivery" },
  { key: "physiotherapy", name: "Physiotherapy", enquiryType: "physiotherapy", path: "/physiotherapy-at-home" },
  { key: "yoga", name: "Yoga", enquiryType: "yoga", path: "/yoga-at-home" },
  { key: "nri-care", name: "NRI Patient Care", enquiryType: "nri-care", path: "/nri-elder-care" },
  { key: "equipment", name: "Hospital Equipment", enquiryType: "hospital-equipment", path: "/medical-equipment-rental-sale" },
  { key: "blood-test", name: "Renal Blood Test", enquiryType: "renal-test", path: "/blood-test-at-home" },
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

  const router = useRouter();
  const pathname = usePathname();

  // Detect the source page.
  const getSource = () => {
    if (pathname === "/") {
      return "Home Page";
    }

    const normalizedPath = pathname

    const currentService = SERVICES.find(
      (service) => service.path === normalizedPath
    );
    console.log("Current Service:", currentService);
    return currentService?.name || defaultService || "Unknown Source";
  };

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

    // Validate required fields.
    if (!serviceName || !name || !location || !mobileInput) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!/^[\p{L}][\p{L}\s.'-]*$/u.test(name)) {
      setErrorMessage("Please enter a valid name.");
      return;
    }

    // Validate mobile number.
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

        // Dynamic source based on the current page.
        source: getSource(),

        urgency: "normal",
      };

      console.log("Booking API Payload:", bookingData);

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
        "Your request has been submitted successfully. Our representative will reach out to you shortly."
      );

      // redirectToThankYou(router, selectedServiceData.name);

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
          // SUCCESS SCREEN
          <div
            className="mx-auto flex w-full max-w-[360px] flex-col items-center rounded-2xl bg-white px-5 py-5 text-center sm:px-6 sm:py-6"
            role="status"
          >
            <div className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8F7EF] text-[#16A05D] sm:h-14 sm:w-14">
              <svg
                className="h-7 w-7 sm:h-8 sm:w-8"
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

            <h2 className="mb-2 text-lg font-bold leading-tight text-[#173B32] sm:text-xl">
              Request submitted!
            </h2>

            <p className="mb-4 break-words text-sm leading-relaxed text-slate-500">
              {successMessage}
            </p>

            <button
              type="button"
              className="w-full rounded-lg bg-[#0B6B5A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#095447] focus:outline-none focus:ring-2 focus:ring-[#0B6B5A] focus:ring-offset-2"
              onClick={onClose}
            >
              Done
            </button>
          </div>

        ) : errorMessage ? (
          // FAILURE SCREEN
          <div
            className="mx-auto flex w-full max-w-[360px] flex-col items-center rounded-2xl bg-white px-5 py-5 text-center sm:px-6 sm:py-6"
            role="alert"
          >
            {/* Failure Icon */}
            <div className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 sm:h-14 sm:w-14">
              <svg
                className="h-7 w-7 sm:h-8 sm:w-8"
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

            <h2 className="mb-2 text-lg font-bold leading-tight text-gray-800 sm:text-xl">
              Request failed
            </h2>

            <p className="mb-4 break-words text-sm leading-relaxed text-slate-500">
              {errorMessage}
            </p>

            {/* Retry Button */}
            <button
              type="button"
              className="w-full rounded-lg bg-[#0B6B5A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#095447] focus:outline-none focus:ring-2 focus:ring-[#0B6B5A] focus:ring-offset-2"
              onClick={handleRetry}
            >
              Try Again
            </button>

            {/* Cancel Button */}
            <button
              type="button"
              className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>

        ) : (
          // BOOKING FORM
          <>
            <h2 className="modal-title" id="booking-title">
              Book a Free Consulting
            </h2>

            <p className="modal-sub">
              Tell us what you need - we'll take it from here.
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

                <div className="phone-input-wrapper">
                  <input
                    id="phone"
                    name="phone"
                    className="form-input"
                    type="tel"
                    placeholder="98765 43210"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    pattern="[0-9]{10}"
                    minLength={10}
                    maxLength={10}
                    required
                    disabled={isSubmitting}
                    onInput={(e) => {
                      const input = e.currentTarget;
                      input.value = input.value.replace(/\D/g, "").slice(0, 10);
                    }}
                  />
                </div>
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