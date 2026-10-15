import { API_BASE_URL } from "@/lib/api";


export type BlogFAQ = {
    question: string;
    answer: string;
};

export type BlogHowToStep = {
    name?: string;
    text?: string;
    image?: string;
};

export type BlogRatingSchema = {
    name: string;
    description?: string;
    ratingCount: number;
    ratingValue?: number;
    bestRating?: number;
    worstRating?: number;
};

export type Blog = {
    _id: string;
    title: string;
    imageUrl: string;
    content: string;
    slug: string;
    date: string;
    category: string;

    createdAt?: string;
    updatedAt?: string;

    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;

    faqList?: BlogFAQ[];
    howToSteps?: BlogHowToStep[];
    ratingSchema?: BlogRatingSchema;

    isActive?: boolean;
};


/* =========================================================
   GET ALL BLOGS
========================================================= */

// export async function getBlogs(): Promise<Blog[]> {
//     const response = await fetch(
//         `${API_BASE_URL}/users/getAllBlogs`,
//         {
//             cache: "no-store",
//         }
//     );

//     if (!response.ok) {
//         throw new Error(
//             `Blog API request failed: ${response.status}`
//         );
//     }

//     const result = await response.json();

//     if (!Array.isArray(result?.data)) {
//         return [];
//     }

//     return result.data.filter(
//         (blog: Blog) =>
//             blog.isActive !== false
//     );
// }
export async function getBlogs(): Promise<Blog[]> {
    const start = Date.now();
    const response = await fetch(
        `${API_BASE_URL}/users/getAllBlogs`,
        {
            next: {
                revalidate: 300,
            },
        }
    );

    console.log(
        "BLOG API TIME:",
        Date.now() - start,
        "ms"
    );

    if (!response.ok) {
        throw new Error(
            `Blog API request failed: ${response.status}`
        );
    }

    const result = await response.json();
    console.log(
        "BLOG JSON PARSE TOTAL:",
        Date.now() - start,
        "ms"
    );
    if (!Array.isArray(result?.data)) {
        return [];
    }

    return result.data.filter(
        (blog: Blog) => blog.isActive !== false
    );
}