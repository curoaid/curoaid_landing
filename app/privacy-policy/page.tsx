import type { Metadata } from "next";
import LegalPage from "@/app/components/legalpage/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy ",
  description:
    "Read the Privacy Policy governing the use of CuroAid healthcare services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updatedDate="28 September 2026"
      intro="Please read these Privacy Policy terms carefully before using the CuroAid website and services."
    >
      <h2>1. Introduction</h2>

      <p>
        Welcome to CuroAid. These Privacy Policy terms govern your access to
        and use of our website, applications, products and healthcare
        services.
      </p>

      <p>
        By accessing or using our services, you agree to be bound by these
        Privacy Policy terms. If you do not agree with any part of these
        terms, please discontinue use of our services.
      </p>

      <h2>2. Use of Our Services</h2>

      <p>
        CuroAid provides healthcare-related services designed to support
        individuals and families with their healthcare needs. Services may
        include home healthcare, nursing, physiotherapy and other services
        offered through our platform.
      </p>

      <p>
        You agree to provide accurate and complete information when making
        an enquiry, booking a service or submitting information through our
        website.
      </p>

      <h2>3. User Responsibilities</h2>

      <p>
        Users are responsible for maintaining the accuracy of the
        information provided to CuroAid and for using the website and
        services only for lawful purposes.
      </p>

      <ul>
        <li>Provide accurate information.</li>
        <li>Do not misuse the website.</li>
        <li>Do not attempt unauthorized access.</li>
        <li>Follow applicable service instructions.</li>
      </ul>

      <h2>4. Healthcare Services</h2>

      <p>
        Healthcare services are provided by qualified professionals based
        on the nature and availability of the requested service.
      </p>

      <p>
        Information available on the website should not automatically be
        considered a substitute for professional medical advice,
        diagnosis or treatment.
      </p>

      <h2>5. Bookings and Appointments</h2>

      <p>
        Appointment availability may vary depending on location,
        professional availability and service requirements.
      </p>

      <p>
        CuroAid reserves the right to modify, reschedule or cancel a
        booking when necessary.
      </p>

      <h2>6. Payments</h2>

      <p>
        Where applicable, users agree to pay the applicable charges for
        services requested through CuroAid.
      </p>

      <h2>7. Cancellation and Refunds</h2>

      <p>
        Cancellation and refund terms may vary depending on the service
        booked. Please refer to the applicable cancellation or refund
        policy for additional information.
      </p>

      <h2>8. Privacy</h2>

      <p>
        Your use of our services is also subject to our Privacy Policy.
        We take reasonable measures to protect information submitted
        through our website.
      </p>

      <h2>9. Intellectual Property</h2>

      <p>
        All website content, including text, graphics, logos, images,
        design elements and other materials, may be protected by applicable
        intellectual property laws.
      </p>

      <h2>10. Limitation of Liability</h2>

      <p>
        To the extent permitted by applicable law, CuroAid shall not be
        responsible for losses resulting from unauthorized use of the
        website, interruptions outside our reasonable control or reliance
        on information that requires professional assessment.
      </p>

      <h2>11. Changes to These Terms</h2>

      <p>
        We may update these Terms & Conditions from time to time. Updated
        terms will be published on this page with the applicable revision
        date.
      </p>

      <h2>12. Contact Us</h2>

      <p>
        If you have questions regarding these Privacy Policy terms, please
        contact the CuroAid team through our official contact channels.
      </p>
    </LegalPage>
  );
}