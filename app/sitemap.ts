import type { MetadataRoute } from "next";
import { getBlogs } from "@/lib/blogs";

const BASE_URL = "https://curoaid.com";

const services = [
    { slug: "doctor-at-home" },
    { slug: "home-nursing-services" },
    { slug: "physiotherapy-at-home" },
    { slug: "wound-care-at-home" },
    { slug: "elder-care-at-home" },
    { slug: "veterinary-doctor-home-visit" },
    { slug: "yoga-at-home" },
    { slug: "nri-elder-care" },
    { slug: "medical-equipment-rental-sale" },
    { slug: "blood-test-at-home" },
     { slug: "home-medicine-delivery" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const currentDate = new Date();

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/about-us`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/our-team`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/blogs`,
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 0.9,
        },
    ];

    // Service pages
    const servicePages: MetadataRoute.Sitemap = services.map(
        ({ slug }) => ({
            url: `${BASE_URL}/${slug}`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        })
    );

    // Blog pages
    let blogPages: MetadataRoute.Sitemap = [];

    try {
        const blogs = await getBlogs();

        blogPages = blogs
            .filter((blog) => blog?.slug)
            .map((blog) => ({
                url: `${BASE_URL}/blogs/${blog.slug}`,
                lastModified: blog.date
                    ? new Date(blog.date)
                    : currentDate,
                changeFrequency: "weekly" as const,
                priority: 0.7,
            }));
    } catch (error) {
        console.error("Failed to fetch blogs for sitemap:", error);
    }

    return [
        ...staticPages,
        ...servicePages,
        ...blogPages,
    ];
}
