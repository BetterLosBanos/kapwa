type StripBannerItem = {
    id: number;
    emoji: string;
    mainText: string;
    subText: string;
    primaryButton: {
        text: string;
        className?: string;
        href: string;
    };
    secondaryLink: {
        text: string;
        className?: string;
        href: string;
    };
};
declare const StripBanner: ({ stripBannerTitle, stripBanner, }: {
    stripBannerTitle: string;
    stripBanner: StripBannerItem;
}) => import("react/jsx-runtime").JSX.Element;
export { StripBanner };
export type { StripBannerItem };
