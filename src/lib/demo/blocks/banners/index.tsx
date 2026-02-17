import React from 'react';
import { Card, CardHeader, CardContent } from '@kapwa/card';

type StripBannerItem = {
  id: number;
  emoji: string;
  mainText: string;
  subText: string;
  primaryButton: {
    text: string;
    className?: string;
  };
  secondaryLink: {
    text: string;
    className?: string;
  };
};

type FullBannerItem = {
  id: number;
  title: string;
  highlightedWord: string;
  description: string;
  highlightedPhrase: string;
  primaryButton: {
    text: string;
    className?: string;
  };
  secondaryButton: {
    text: string;
    className?: string;
  };
};

type BannersSectionProps = {
  headerTitle: string;
  headerSubtitle?: string;
  stripBannerTitle?: string;
  stripBanner?: StripBannerItem;
  fullBannerTitle?: string;
  fullBanner?: FullBannerItem;
};

const BannersSection: React.FC<BannersSectionProps> = ({
  headerTitle,
  headerSubtitle,
  stripBannerTitle = 'Strip Banner',
  stripBanner,
  fullBannerTitle = 'Full CivicTech Banner',
  fullBanner,
}: BannersSectionProps) => {
  return (
    <Card className='mb-8'>
      <CardHeader>
        <h2 className='text-2xl font-semibold'>{headerTitle}</h2>
        {headerSubtitle && <p className='text-gray-800'>{headerSubtitle}</p>}
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {/* Strip Banner */}
          {stripBanner && (
            <div>
              <h3 className='font-medium mb-4'>{stripBannerTitle}</h3>
              <div className='relative overflow-hidden bg-linear-to-r from-orange-500 via-red-500 to-pink-500 text-white py-3 rounded-lg'>
                <div className='container mx-auto px-4'>
                  <div className='flex flex-col sm:flex-row items-center justify-between gap-2'>
                    <div className='flex items-center gap-3'>
                      <span className='font-bold text-sm'>
                        {stripBanner.emoji} {stripBanner.mainText}
                      </span>
                      <span className='hidden md:inline text-sm text-orange-100'>
                        {stripBanner.subText}
                      </span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <button
                        className={
                          stripBanner.primaryButton.className ||
                          'bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-200'
                        }
                      >
                        {stripBanner.primaryButton.text}
                      </button>
                      <span
                        className={
                          stripBanner.secondaryLink.className ||
                          'text-xs text-orange-200 underline'
                        }
                      >
                        {stripBanner.secondaryLink.text}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Full Banner */}
          {fullBanner && (
            <div>
              <h3 className='font-medium mb-4'>{fullBannerTitle}</h3>
              <div className='relative overflow-hidden bg-linear-to-br from-orange-500 via-red-500 to-pink-600 text-white py-12 rounded-lg'>
                <div className='container mx-auto px-4 text-center'>
                  <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                    {fullBanner.title}{' '}
                    <span className='text-yellow-200'>
                      {fullBanner.highlightedWord}
                    </span>{' '}
                    Revolution
                  </h2>
                  <p className='text-lg mb-6 text-orange-100 max-w-2xl mx-auto'>
                    {fullBanner.description}
                    <strong className='text-yellow-200'>
                      {' '}
                      {fullBanner.highlightedPhrase}
                    </strong>
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <button
                      className={
                        fullBanner.primaryButton.className ||
                        'bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100'
                      }
                    >
                      {fullBanner.primaryButton.text}
                    </button>
                    <button
                      className={
                        fullBanner.secondaryButton.className ||
                        'border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900'
                      }
                    >
                      {fullBanner.secondaryButton.text}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export { BannersSection };
export type { StripBannerItem, FullBannerItem, BannersSectionProps };
