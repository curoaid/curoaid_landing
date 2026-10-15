
import JsonLd from "@/app/components/seo/JsonLd";

const BASE_URL = "https://curoaid.com";

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "CuroAid",
      url: BASE_URL,
      // Add your real public logo URL when confirmed.
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "CuroAid",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function SiteSchema() {
  return <JsonLd data={siteSchema} />;
}
