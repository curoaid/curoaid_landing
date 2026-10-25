import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
    enquiryServices,
    getEnquiryService,
} from "@/lib/enquiryServices";
import ServiceEnquiryPage from "@/app/components/enquiry/serviceEnquiryPage";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
    return enquiryServices.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getEnquiryService(slug);

    if (!service) {
        return { title: "Enquiry Not Found | CuroAid" };
    }

    return {
        title: service.seoTitle,
        description: service.seoDescription,
        alternates: {
            canonical: `https://curoaid.com/enquiry/${service.slug}`,
        },
        robots: {
            index: false,
            follow: true,
        },
    };
}

export default async function EnquirySlugPage({
    params,
}: PageProps) {
    const { slug } = await params;
    const service = getEnquiryService(slug);

    if (!service) {
        notFound();
    }

    return (


        <>

            <ServiceEnquiryPage service={service}  />
        </>);
}