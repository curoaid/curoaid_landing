
const BASE_URL = "https://curoaid.com";

type BlogHowToStep = {
  name?: string;
  text?: string;
  image?: string;
};

type BlogRatingSchema = {
  name?: string;
  description?: string;
  ratingCount?: number;
  ratingValue?: number;
  bestRating?: number;
  worstRating?: number;
};

type BlogSchemaInput = {
  title: string;
  slug: string;
  description?: string;
  image?: string;
  publishedAt?: string;
  updatedAt?: string;
  howToSteps?: BlogHowToStep[];
  ratingSchema?: BlogRatingSchema;
};

export function createBlogSchema(blog: BlogSchemaInput) {
  const url = `${BASE_URL}/blogs/${blog.slug}`;

  const blogPosting = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: blog.title,
    description: blog.description || undefined,
    image: blog.image ? [blog.image] : undefined,
    datePublished: blog.publishedAt || undefined,
    dateModified:
      blog.updatedAt || blog.publishedAt || undefined,
    author: {
      "@type": "Organization",
      name: "CuroAid",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "CuroAid",
      url: BASE_URL,
    },
    inLanguage: "en-IN",
  };

  const validSteps = (blog.howToSteps || []).filter(
    (step) => step.name?.trim() && step.text?.trim()
  );

  const howTo =
    validSteps.length > 0
      ? {
          "@type": "HowTo",
          "@id": `${url}#howto`,
          name: blog.title,
          description: blog.description || undefined,
          image: blog.image || undefined,
          step: validSteps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.name,
            text: step.text,
            image: step.image || undefined,
          })),
        }
      : undefined;

  const rating = blog.ratingSchema;

  // Only use genuine, complete rating data.
  const aggregateRating =
    rating &&
    rating.name?.trim() &&
    typeof rating.ratingValue === "number" &&
    Number.isFinite(rating.ratingValue) &&
    typeof rating.ratingCount === "number" &&
    Number.isInteger(rating.ratingCount) &&
    rating.ratingCount > 0 &&
    rating.ratingValue > 0 &&
    rating.ratingValue <= (rating.bestRating ?? 5) &&
    rating.ratingValue >= (rating.worstRating ?? 1)
      ? {
          "@type": "AggregateRating",
          ratingValue: rating.ratingValue,
          ratingCount: rating.ratingCount,
          bestRating: rating.bestRating ?? 5,
          worstRating: rating.worstRating ?? 1,
        }
      : undefined;

  // Do not attach AggregateRating to a blog article merely
  // to obtain review stars. It must rate the entity described.
  // Only add it here if the ratings genuinely apply to the
  // entity represented by this structured data.

  return {
    "@context": "https://schema.org",
    "@graph": [
      blogPosting,
      ...(howTo ? [howTo] : []),
    ],
  };
}
