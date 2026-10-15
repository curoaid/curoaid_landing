
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getBlogs } from "@/lib/blogs";
import BlogDetailsPage from "@/app/components/blog/BlogDetailsPage";
import JsonLd from "@/app/components/seo/JsonLd";
import { createBlogSchema } from "@/lib/blog-schema";

export const dynamic = "force-dynamic";

const BASE_URL = "https://curoaid.com";

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const blogs = await getBlogs();

    const blog = blogs.find((item) => item.slug === slug);

    if (!blog) {
        return {
            title: "Healthcare Blogs | Health Tips & Expert Advice – CuroAid",
            description:
                "Explore CuroAid healthcare blogs for expert health tips, home healthcare advice, wellness guidance, elderly care insights and practical information to support your family's well-being.",
            robots: {
                index: false,
                follow: true,
            },
        };
    }

    const title = blog.metaTitle || `${blog.title} | CuroAid`;

    const description =
        blog.metaDescription ||
        "Healthcare information and expert guidance from CuroAid.";

    return {
        title,
        description,

        keywords: blog.metaKeywords
            ?.split(",")
            .map((keyword) => keyword.trim())
            .filter(Boolean),

        alternates: {
            canonical: `${BASE_URL}/blogs/${blog.slug}`,
        },

        openGraph: {
            title,
            description,
            url: `${BASE_URL}/blogs/${blog.slug}`,
            siteName: "CuroAid",
            type: "article",
            images: blog.imageUrl
                ? [
                    {
                        url: blog.imageUrl,
                        alt: blog.title,
                    },
                ]
                : undefined,
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: blog.imageUrl ? [blog.imageUrl] : undefined,
        },
    };
}

/* =========================================================
   BLOG DETAILS PAGE
========================================================= */

export default async function BlogDetailsRoute({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const blogs = await getBlogs();

    /* =====================================================
       FIND CURRENT BLOG
    ===================================================== */

    const blog = blogs.find((item) => item.slug === slug);

    if (!blog) {
        notFound();
    }

    /* =====================================================
       BLOG STRUCTURED DATA
    ===================================================== */


    const schema = createBlogSchema({
        title: blog.title,
        slug: blog.slug,
        description: blog.metaDescription,
        image: blog.imageUrl,
        publishedAt: blog.createdAt || blog.date,
        updatedAt: blog.updatedAt || blog.createdAt || blog.date,
        howToSteps: blog.howToSteps,
        ratingSchema: blog.ratingSchema,
    });

    /* =====================================================
       RELATED BLOGS
    ===================================================== */

    let relatedBlogs = blogs.filter(
        (item) =>
            item._id !== blog._id &&
            item.category?.toLowerCase() ===
            blog.category?.toLowerCase()
    );

    /* =====================================================
       FALLBACK RELATED BLOGS
    ===================================================== */

    if (relatedBlogs.length < 2) {
        const fallbackBlogs = blogs.filter(
            (item) =>
                item._id !== blog._id &&
                !relatedBlogs.some(
                    (related) => related._id === item._id
                )
        );

        relatedBlogs = [...relatedBlogs, ...fallbackBlogs];
    }

    /* =====================================================
       RENDER PAGE
    ===================================================== */

    return (
        <>
            <JsonLd data={schema} />

            <BlogDetailsPage
                blog={blog}
                relatedBlogs={relatedBlogs.slice(0, 2)}
            />
        </>
    );
}
