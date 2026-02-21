import React from 'react';
import { Card, CardHeader, CardContent } from '@kapwa/card';
import {
  ArticleCard,
  ArticleCardItem,
  ArticleContentSection,
  ArticleContent,
} from '@kapwa/article';

type ArticlesSectionProps = {
  headerTitle: string;
  headerSubtitle?: string;
  articleCardTitle?: string;
  articleCards: ArticleCardItem[];
  showArticleContent?: boolean;
  articleContentTitle?: string;
  articleContent?: ArticleContentSection[];
};

const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  headerTitle,
  headerSubtitle,
  articleCardTitle = 'Article Card',
  articleCards,
  showArticleContent = true,
  articleContentTitle = 'Article Content',
  articleContent,
}: ArticlesSectionProps) => {
  return (
    <Card className='mb-8'>
      <CardHeader>
        <h2 className='text-2xl font-semibold'>{headerTitle}</h2>
        {headerSubtitle && <p className='text-gray-800'>{headerSubtitle}</p>}
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {/* Article Card */}
          <div>
            <h3 className='font-medium mb-4'>{articleCardTitle}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {articleCards.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Article Content */}
          {showArticleContent && articleContent && (
            <ArticleContent
              articleContentTitle={articleContentTitle}
              articleContent={articleContent}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export { ArticlesSection };
export type { ArticleCardItem, ArticleContentSection, ArticlesSectionProps };
