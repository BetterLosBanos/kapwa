type CivicTechBannerItem = {
    title: string;
    highlightedWord: string;
    description: string;
    highlightedPhrase: string;
    primaryButton: {
        text: string;
        className?: string;
        href: string;
    };
    secondaryButton: {
        text: string;
        className?: string;
        href: string;
    };
};
declare const CivicTechBanner: ({ fullBannerTitle, fullBanner, }: {
    fullBannerTitle: string;
    fullBanner: CivicTechBannerItem;
}) => import("react/jsx-runtime").JSX.Element;
export { CivicTechBanner };
export type { CivicTechBannerItem };
