import React from 'react';
import { Card, CardHeader, CardContent, CardImage } from '@kapwa/card';
import { Button } from '@kapwa/button';

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
                <Card key={article.id}>
                  {article.hasOverlay ? (
                    <div className='relative'>
                      <CardImage src={article.image} alt={article.imageAlt} />
                      <div className='absolute inset-0 bg-linear-to-t from-black/75 to-transparent flex items-end p-6'>
                        <div className='text-white'>
                          <span className='inline-block px-2 py-1 text-xs font-medium rounded-sm bg-white/20 mb-2'>
                            {article.category}
                          </span>
                          <h3 className='text-xl font-semibold mb-2'>
                            {article.title}
                          </h3>
                          <p className='text-white/80'>{article.description}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <CardImage src={article.image} alt={article.imageAlt} />
                      <CardContent>
                        <span className='inline-block px-2 py-1 text-xs font-medium rounded-sm bg-primary-100 text-primary-800 mb-2'>
                          {article.category}
                        </span>
                        <h3 className='text-xl font-semibold mb-2'>
                          {article.title}
                        </h3>
                        <p className='text-gray-800 mb-4'>
                          {article.description}
                        </p>
                        <Button variant='link'>Read More</Button>
                      </CardContent>
                    </>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Article Content */}
          {showArticleContent && articleContent && (
            <div>
              <h3 className='font-medium mb-4'>{articleContentTitle}</h3>
              <div className='prose max-w-none'>
                {articleContent.map(section => {
                  if (section.type === 'heading') {
                    const HeadingTag =
                      `h${section.level}` as keyof JSX.IntrinsicElements;
                    const headingClass =
                      section.level === 1
                        ? 'text-3xl font-bold mb-4'
                        : section.level === 2
                          ? 'text-2xl font-semibold mb-3'
                          : 'text-xl font-semibold mb-2';
                    return (
                      <HeadingTag key={section.id} className={headingClass}>
                        {section.content}
                      </HeadingTag>
                    );
                  }
                  return (
                    <p key={section.id} className='text-gray-800 mb-4'>
                      {section.content}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export { ArticlesSection };
export type { ArticleCardItem, ArticleContentSection, ArticlesSectionProps };
