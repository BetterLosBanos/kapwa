import React from 'react';
import { Card, CardHeader, CardContent } from '@kapwa/card';
import { StripBanner } from '@kapwa/strip-banner';
import { CivicTechBanner } from '@kapwa/civic-tech-banner';

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
            <StripBanner
              stripBannerTitle={stripBannerTitle}
              stripBanner={stripBanner}
            />
          )}

          {/* Full Banner */}
          {fullBanner && (
            <CivicTechBanner
              fullBannerTitle={fullBannerTitle}
              fullBanner={fullBanner}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export { BannersSection };
export type { StripBannerItem, FullBannerItem, BannersSectionProps };
