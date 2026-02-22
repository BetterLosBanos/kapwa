type ArticleCardItem = {
    id: number;
    image: string;
    imageAlt: string;
    category: string;
    title: string;
    description: string;
    hasOverlay?: boolean;
};
type ArticleContentSection = {
    id: number;
    type: 'heading' | 'paragraph';
    level?: 1 | 2 | 3;
    content: string;
};
declare const ArticleCard: ({ article }: {
    article: ArticleCardItem;
}) => import("react/jsx-runtime").JSX.Element;
declare const ArticleContent: ({ articleContentTitle, articleContent, }: {
    articleContentTitle: string;
    articleContent: ArticleContentSection[];
}) => import("react/jsx-runtime").JSX.Element;
export { ArticleCard, ArticleContent };
export type { ArticleCardItem, ArticleContentSection };
