"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

import type {
    Blog,
    BlogFAQ,
} from "@/lib/blogs";
import GradientButton from "../ui/GradientButton";
import FAQSection from "../home/FAQSection";
import { useBooking } from "../booking/bookingprovider";

/* =========================================================
   PROPS
========================================================= */

type BlogDetailsPageProps = {
    blog: Blog;
    relatedBlogs: Blog[];
};

/* =========================================================
   DEFAULT FAQ
========================================================= */

const defaultFaqs: BlogFAQ[] = [
    {
        question:
            "Is home healthcare better than visiting a hospital?",
        answer:
            "For many non-emergency medical needs, home healthcare provides a comfortable and convenient alternative while maintaining professional care standards.",
    },
    {
        question:
            "When should I consider home healthcare?",
        answer:
            "Home healthcare can provide convenient medical support in a familiar environment for suitable healthcare needs.",
    },
    {
        question:
            "Can elderly people receive healthcare at home?",
        answer:
            "Depending on the patient's needs, healthcare professionals can provide several services at home.",
    },
    {
        question:
            "What services can CuroAid provide at home?",
        answer:
            "CuroAid provides professional healthcare services designed around the patient's comfort and convenience.",
    },
    {
        question:
            "When should I visit a hospital?",
        answer:
            "Emergency conditions should always be handled through appropriate emergency medical services.",
    },
];

/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(date: string) {

    if (!date) {
        return "";
    }

    const parsedDate =
        new Date(date);

    if (
        Number.isNaN(
            parsedDate.getTime()
        )
    ) {
        return date;
    }

    return parsedDate.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );
}

/* =========================================================
   PAGE
========================================================= */

export default function BlogDetailsPage({
    blog,
    relatedBlogs,
}: BlogDetailsPageProps) {
    const { openBooking } = useBooking();
    const [openFaq, setOpenFaq] = useState(0);

    const faqs =
        blog.faqList &&
            blog.faqList.length > 0
            ? blog.faqList
            : defaultFaqs;

    return (
        <main className="min-h-screen bg-white text-[#111111]">

            {/* =================================================
                NAVBAR
            ================================================= */}

            <Navbar />

            {/* =================================================
                BLOG HEADER
            ================================================= */}

            <section className="px-4 pt-6 sm:px-6 lg:px-8 lg:pt-8">

                <div className="mx-auto max-w-[1130px]">

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

                        {/* LEFT */}

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="bg-[#73e0de] px-3 py-1 text-[8px] font-semibold text-[#111] sm:text-[9px]">
                                    {blog.category}
                                </span>

                                <span className="text-[8px] text-[#777] sm:text-[9px]">
                                    {formatDate(
                                        blog.date
                                    )}
                                </span>

                            </div>

                            <h1 className="mt-3 max-w-[620px] text-[23px] font-bold leading-[1.25] tracking-[-0.5px] sm:text-[28px] lg:text-[32px]">
                                {blog.title}
                            </h1>

                        </div>

                        {/* RIGHT */}

                        <div>

                            <p className="text-[20px] leading-[1.7] text-[#666] sm:text-[10px]">
                                {blog.metaDescription ||
                                    "Get trusted healthcare information, practical guidance and expert advice from the CuroAid team."}
                            </p>

                            <div
                                onClick={() => openBooking()}
                                className="inline-flex mt-3 "
                            >
                                <GradientButton label="Book Now" />
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =================================================
                BLOG IMAGE
            ================================================= */}

            <section className="px-4 pt-6 sm:px-6 lg:px-8 lg:pt-8">

                <div className="relative mx-auto h-[260px] max-w-[1130px] overflow-hidden rounded-[13px] sm:h-[350px] lg:h-[470px]">

                    <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        fill
                        priority
                        sizes="(max-width: 1130px) 100vw, 1130px"
                        className="object-cover"
                    />

                </div>

            </section>

            {/* =================================================
                CONTENT + RELATED
            ================================================= */}

            <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

                <div className="mx-auto grid max-w-[1130px] grid-cols-1 gap-8 lg:grid-cols-[1fr_270px]">

                    {/* =================================================
                        BLOG CONTENT
                    ================================================= */}

                    <article className="min-w-0">

                        <div
                            className="
                                    blog-content
                                    text-[14px]
                                    leading-[1.8]
                                    text-[#555]
                                    lg:text-[16px]

                                    [&_h1]:mb-4
                                    [&_h1]:mt-8
                                    [&_h1]:text-[24px]
                                    [&_h1]:font-bold
                                    [&_h1]:leading-[1.35]
                                    [&_h1]:text-[#111]

                                    [&_h2]:mb-4
                                    [&_h2]:mt-8
                                    [&_h2]:text-[21px]
                                    [&_h2]:font-bold
                                    [&_h2]:leading-[1.4]
                                    [&_h2]:text-[#111]

                                    [&_h3]:mb-3
                                    [&_h3]:mt-6
                                    [&_h3]:text-[18px]
                                    [&_h3]:font-bold
                                    [&_h3]:leading-[1.4]
                                    [&_h3]:text-[#111]

                                    [&_p]:mb-5

                                    [&_ul]:mb-5
                                    [&_ul]:list-disc
                                    [&_ul]:pl-6

                                    [&_ol]:mb-5
                                    [&_ol]:list-decimal
                                    [&_ol]:pl-6

                                    [&_li]:mb-2

                                    [&_strong]:font-semibold
                                    [&_strong]:text-[#222]

                                    [&_a]:text-[#43c4e3]
                                    [&_a]:underline

                                    [&_img]:my-6
                                    [&_img]:rounded-xl
                                    [&_img]:max-w-full
                                "
                            dangerouslySetInnerHTML={{
                                __html:
                                    blog.content ||
                                    "",
                            }}
                        />

                    </article>

                    {/* =================================================
                        RELATED BLOGS
                    ================================================= */}

                    <aside>
                        <div className="lg:sticky lg:top-24">

                            <span className="inline-flex bg-[#dff8ff] px-3 py-1 text-[12px] font-semibold text-[#42c4e6] sm:text-[9px] lg:text-[13px]">
                                Related Blogs
                            </span>

                            <div className="mt-3 space-y-4">
                                {relatedBlogs
                                    .slice(0, 2)
                                    .map((relatedBlog) => (
                                        <article
                                            key={relatedBlog._id}
                                            className="
              overflow-hidden
              rounded-[11px]
              border
              border-[#e1e1e1]
              bg-[#f6f6f6]
              p-2
              transition
              duration-300
              hover:-translate-y-1
              hover:border-[#4cc6f0]
              hover:bg-[#f0fcff]
              hover:shadow-md
            "
                                        >
                                            <Link
                                                href={`/blogs/${relatedBlog.slug}`}
                                                className="relative block h-[125px] overflow-hidden rounded-[8px]"
                                            >
                                                <Image
                                                    src={relatedBlog.imageUrl}
                                                    alt={relatedBlog.title}
                                                    fill
                                                    sizes="270px"
                                                    className="object-cover transition duration-500 hover:scale-[1.03]"
                                                />
                                            </Link>

                                            <div className="px-1 pb-1 pt-2">

                                                <h3 className="line-clamp-2 text-[10px] font-bold leading-[1.4] text-[#111] lg:text-[12px]">
                                                    {relatedBlog.title}
                                                </h3>

                                                <p className="mt-1 line-clamp-3 text-[8px] leading-[1.5] text-[#666] lg:text-[10px]">
                                                    {relatedBlog.metaDescription ||
                                                        "Read more about healthcare and home care services."}
                                                </p>

                                                <Link
                                                    href={`/blogs/${relatedBlog.slug}`}
                                                    className="mt-2 inline-flex items-center gap-1 text-[8px] font-semibold text-[#43c4e3] lg:text-[10px]"
                                                >
                                                    Read More
                                                    <span>→</span>
                                                </Link>

                                            </div>
                                        </article>
                                    ))}
                            </div>

                        </div>
                    </aside>

                </div>

            </section>

            {/* =================================================
                CTA
            ================================================= */}

            <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

                <div className="relative mx-auto max-w-[1130px] overflow-hidden rounded-[13px]">

                    <Image
                        src="/assets/blogCTA.webp"
                        alt="Medical care at home"
                        fill
                        sizes="(max-width: 1130px) 100vw, 1130px"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-[#08799c]/70" />

                    <div className="relative z-10 flex min-h-[175px] flex-col items-center justify-center px-5 text-center text-white sm:min-h-[210px]">

                        <h2 className="text-[21px] font-bold sm:text-[27px]">
                            Need Medical Care at Home?
                        </h2>

                        <h3 className="mt-2 text-[11px] font-bold sm:text-[13px]">
                            Curoaid brings trusted healthcare to your doorstep.
                        </h3>

                        <p className="mt-2 max-w-[530px] text-[9px] leading-[1.6] text-white/90 sm:text-[10px]">
                            Book a convenient home doctor visit and take
                            the next step towards better, more accessible
                            healthcare.
                        </p>

                        <div
                            onClick={() => openBooking()}
                            className="mt-4 flex items-center gap-2 rounded-md bg-[#55c5ed] px-5 py-2.5 text-[9px] font-semibold text-white shadow-md transition hover:bg-[#43b7df]"
                        >
                            Book Free Consultation
                            <span>→</span>
                        </div>

                    </div>

                </div>

            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">


                <FAQSection
                    badge="FAQ"
                    title="Frequently asked questions"
                    items={faqs}
                />

            </section>

            {/* =================================================
                CONSULTATION
            ================================================= */}

            {/* <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12"> */}

                {/* <div className="mx-auto grid max-w-[1130px] grid-cols-1 gap-8 rounded-[13px] bg-gradient-to-r from-[#effcff] to-[#f1faef] p-6 sm:p-8 lg:grid-cols-2 lg:p-10"> */}

                    {/* LEFT */}

                    {/* <div>

                        <div className="flex items-center gap-2 text-[9px] font-semibold text-[#70c965]">
                            <span className="rounded bg-[#dff8df] px-2 py-1">
                                ▣
                            </span>

                            BOOK A CONSULTATION
                        </div>

                        <h2 className="mt-3 text-[19px] font-bold text-[#111] sm:text-[23px]">
                            Get In Touch With Us
                        </h2>

                        <p className="mt-2 max-w-[360px] text-[9px] leading-[1.7] text-[#666]">
                            Fill in the details below and our care team
                            will reach out to you promptly.
                        </p>

                        <div className="mt-5 space-y-3 text-[9px] text-[#555]">

                            <p>
                                ☎ +91 9500064364
                            </p>

                            <p>
                                ✉ support@curoaid.com
                            </p>

                            <p>
                                ⌖ Chennai, India
                            </p>

                            <p>
                                ◉ 9500064364
                            </p>

                        </div>

                        <div className="mt-5">

                            <p className="text-[9px] font-semibold">
                                Social Links
                            </p>

                            <div className="mt-2 flex gap-2">

                                <span className="flex h-6 w-6 items-center justify-center rounded bg-black text-[10px] text-white">
                                    f
                                </span>

                                <span className="flex h-6 w-6 items-center justify-center rounded bg-black text-[10px] text-white">
                                    ◎
                                </span>

                                <span className="flex h-6 w-6 items-center justify-center rounded bg-black text-[10px] text-white">
                                    in
                                </span>

                            </div>

                        </div>

                    </div> */}

                    {/* RIGHT */}

                    {/* <form className="space-y-3">

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="h-9 w-full rounded-md border border-[#d7e0e3] bg-white px-3 text-[9px] outline-none placeholder:text-[#999] focus:border-[#70c965]"
                        />

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="h-9 w-full rounded-md border border-[#d7e0e3] bg-white px-3 text-[9px] outline-none placeholder:text-[#999] focus:border-[#70c965]"
                        />

                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="h-9 w-full rounded-md border border-[#d7e0e3] bg-white px-3 text-[9px] outline-none placeholder:text-[#999] focus:border-[#70c965]"
                        />

                        <textarea
                            rows={4}
                            placeholder="Tell us about your care needs..."
                            className="w-full resize-none rounded-md border border-[#d7e0e3] bg-white px-3 py-2 text-[9px] outline-none placeholder:text-[#999] focus:border-[#70c965]"
                        />

                        <button
                            type="submit"
                            className="h-10 w-full rounded-md bg-[#70c965] text-[9px] font-semibold text-white transition hover:bg-[#5cba52]"
                        >
                            Submit Request
                        </button>

                        <p className="text-center text-[8px] text-[#777]">
                            🔒 Your data is safe and confidential
                        </p>

                    </form>

                </div> */}

            {/* </section> */}

            {/* =================================================
                FOOTER
            ================================================= */}

            <Footer />

        </main>
    );
}