type ListSectionItem = {
    id: number;
    title: string;
    category: string;
};
type ListsSectionProps = {
    title: string;
    headerTitle: string;
    headerSubtitle?: string;
    externalLinkText?: string;
    listItems: ListSectionItem[];
};
declare const List: ({ headerTitle, headerSubtitle, externalLinkText, listItems, title, }: {
    title: string;
    headerTitle: string;
    headerSubtitle?: string;
    externalLinkText?: string;
    listItems: ListSectionItem[];
}) => import("react/jsx-runtime").JSX.Element;
export { List };
export type { ListsSectionProps, ListSectionItem };
