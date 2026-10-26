

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { BookingProvider } from "./components/booking/bookingprovider";
import { imgDoctorAtHome } from "@/lib/assets";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import SiteSchema from "./components/seo/SiteSchema";
import FloatingContactButtons from "./components/floating-buttons/Floatingbuttons";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CuroAid – Healthcare at Home | Doctor, Nursing & Elder Care",
    template: "%s | CuroAid",
  },
  description:
    "Get trusted healthcare at home with CuroAid. Book home doctor visits, nursing, physiotherapy, elder care, wound care and more at your convenience.",
  metadataBase: new URL("https://curoaid.com"),
  verification: {
    google: "KRIGS0WeU2OPpGfzttRJeHCkEBKjZ3muAGovdNfjTGk",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CuroAid | Home Healthcare Services",
    description:
      "Professional, personalized and compassionate healthcare services delivered to your doorstep.",
    url: "https://curoaid.com",
    siteName: "CuroAid",
    type: "website",
    images: [
      {
        url: imgDoctorAtHome,
        width: 1200,
        height: 630,
        alt: "CuroAid Doctor at Home Services",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <SiteSchema />
        <BookingProvider>

          {children}
        </BookingProvider>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","z1kbd3uxdz");
            `,
          }}
        />
        <GoogleTagManager gtmId="GTM-KGZ93M4P" />
        <GoogleAnalytics gaId="G-H7NWGY6RRY" />
        <FloatingContactButtons />
      </body>
    </html>
  );
}