
const BASE_URL = "https://curoaid.com";

export function createPageSchema({
  name,
  path,
  description,
  type = "WebPage",
}: {
  name: string;
  path: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage";
}) {
  const url =
    path === "/" ? BASE_URL : `${BASE_URL}/${path}`;

  const isHome = path === "/";
  const isService = !isHome &&
    type === "WebPage";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },
        ...(isHome
          ? {
              about: {
                "@id": `${BASE_URL}/#organization`,
              },
            }
          : {}),
        ...(isService
          ? {
              mainEntity: {
                "@id": `${url}#service`,
              },
              breadcrumb: {
                "@id": `${url}#breadcrumb`,
              },
            }
          : {}),
      },
      ...(isService
        ? [
            {
              "@type": "Service",
              "@id": `${url}#service`,
              name,
              description,
              url,
              provider: {
                "@id": `${BASE_URL}/#organization`,
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${url}#breadcrumb`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: BASE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name,
                  item: url,
                },
              ],
            },
          ]
        : []),
    ],
  };
}
