export const redirectToThankYou = (
    router: {
        push: (url: string) => void;
    },
    serviceName?: string
) => {
    const url = serviceName
        ? `/thank-you?service=${encodeURIComponent(serviceName)}`
        : "/thank-you";

    router.push(url);
};