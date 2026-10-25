import Image from "next/image";
import Link from "next/link";

import {
  imgFinalisedLogo1,
  imgLocation,
  imgFacebook,
  imgInstagram,
  imgLinkedin,
  imgContact,
  imgEmail,
  imgyoutube,
} from "@/lib/assets";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
  { label: "Team", href: "/our-team" },
];

const contactDetails = [
  {
    icon: imgContact,
    label: "+91 8925997198",
    href: "tel:+918925997198",
  },
  {
    icon: imgEmail,
    label: "support@curoaid.com",
    href: "mailto:support@curoaid.com",
  },
  {
    icon: imgLocation,
    label: "Chennai, India",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: imgFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/people/VaThala/61554658859007/",
  },
  {
    icon: imgInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/vathalaapp/",
  },
  {
    icon: imgLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/vathala/",
  },
  {
    icon: imgyoutube,
    label: "YouTube",
    href: "https://www.youtube.com/@Curoaid",
  },
];

const services = [
  { name: "Doctor at Home", href: "/doctor-at-home" },
  { name: "Home Nursing Services", href: "/home-nursing-services" },
  { name: "Physiotherapy at Home", href: "/physiotherapy-at-home" },
  { name: "Elder Care at Home", href: "/elder-care-at-home" },
  { name: "Yoga at Home", href: "/yoga-at-home" },
  { name: "Wound Care at Home", href: "/wound-care-at-home" },
  { name: "Blood Test at Home", href: "/blood-test-at-home" },
  { name: "NRI Elder Care", href: "/nri-elder-care" },
  { name: "Veterinary Doctor at Home", href: "/veterinary-doctor-home-visit" },
  {
    name: "Medical Equipment Rental And Sale",
    href: "/medical-equipment-rental-sale",
  },
];

const headingClass =
  "mb-2 text-base font-semibold text-black";

const underlineClass =
  "mb-4 h-0.5 w-[90px] bg-[#55bdb8]";

const linkClass =
  "text-sm leading-7 text-[#454646] transition-colors hover:text-[#3fbebc]";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-[#f7f8fa] pt-12 pb-5">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

        {/* Main Footer */}
        <div className="mb-7 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.05fr_1.05fr_1.05fr_1fr] lg:gap-x-12 xl:gap-x-16">

          {/* Brand */}
          <div className="min-w-0">
            <Link
              href="/"
              aria-label="CuroAid Home"
              className="inline-block"
            >
              <Image
                src={imgFinalisedLogo1}
                alt="CuroAid"
                width={200}
                height={150}
                className="mb-5 h-[112px] w-auto object-contain object-left"
              />
            </Link>

            <h2 className="mb-3 text-base font-semibold text-black">
              Better Care Starts at Home
            </h2>

            <p className="max-w-[300px] text-sm leading-[1.65] text-[#454646]">
              Professional, personalized, and compassionate healthcare
              services delivered to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h2 className={headingClass}>Quick Links</h2>
            <div className={underlineClass} />

            <nav aria-label="Footer navigation">
              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h2 className={headingClass}>Services</h2>
            <div className={underlineClass} />

            <nav aria-label="Healthcare services">
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className={linkClass}>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact + Social Icons */}
          <div className="min-w-0">
            <h2 className={headingClass}>Contact</h2>
            <div className={underlineClass} />

            <ul className="space-y-3">
              {contactDetails.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2.5"
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={22}
                      height={22}
                      className="h-[21px] w-[21px] shrink-0 object-contain"
                      aria-hidden="true"
                    />

                    <span className="text-sm leading-6 text-[#454646] transition-colors hover:text-[#3fbebc]">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons directly below Contact */}
            <div className="mt-7 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center transition-opacity hover:opacity-60"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px] object-contain"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Company Copyright */}
        {/* <p className="mb-3 text-sm font-semibold text-[#bd555b]">
          © {year} Muniah Technologies. All Rights Reserved.
        </p> */}

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 items-center gap-4 border-t border-gray-200 pt-5 text-center sm:grid-cols-2 lg:grid-cols-[1fr_1.4fr_1fr] lg:text-left">

          {/* CuroAid Copyright */}
          <p className="text-sm text-[#454646]">
              © {year} Muniah Technologies. All Rights Reserved.
          </p>

          {/* Ownership */}
          <p className="text-sm font-semibold text-[#bd555b] lg:text-center">
            CuroAid is owned and operated by Muniah Technologies.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-end">
            <Link
              href="/privacy-policy"
              className="text-sm text-[#454646] transition-colors hover:text-[#3fbebc]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-sm text-[#454646] transition-colors hover:text-[#3fbebc]"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}