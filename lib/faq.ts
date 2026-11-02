import { API_BASE_URL } from "./api";

export interface FAQItem {
    question: string;
    answer: string;
    service: string;
}

interface FAQApiResponse {
    message: string;
    data: FAQItem[];
}

export async function getServiceFaqs(
    serviceName: string
): Promise<FAQItem[]> {
    try {
        const response = await fetch(
            `${API_BASE_URL}/users/getHomeFaq`,
            {
                next: {
                    revalidate: 300,
                },
            }
        );

        if (!response.ok) {
            throw new Error("FAQ API failed");
        }

        const result: FAQApiResponse = await response.json();

        return (result.data || []).filter(
            (faq) =>
                faq.service?.trim().toLowerCase() ===
                serviceName.trim().toLowerCase()
        );
    } catch (error) {
        console.error("FAQ fetch error:", error);
        return [];
    }
}