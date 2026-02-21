import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from './index';

// ArticleCard Stories
const articleCardMeta: Meta<typeof ArticleCard> = {
  title: 'Components/Cards/ArticleCard',
  component: ArticleCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='max-w-sm'>
        <Story />
      </div>
    ),
  ],
};

export default articleCardMeta;
type ArticleCardStory = StoryObj<typeof ArticleCard>;

export const Default: ArticleCardStory = {
  args: {
    article: {
      id: 1,
      image:
        'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      imageAlt: 'Government services illustration',
      category: 'Government Services',
      title: 'New Online Portal for Business Permits',
      description:
        'The Department of Trade and Industry launches a streamlined online system for business permit applications.',
      hasOverlay: false,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default article card with image, category badge, title, description, and read more link. Perfect for news listings and blog posts.',
      },
    },
  },
};

export const WithOverlay: ArticleCardStory = {
  args: {
    article: {
      id: 2,
      image:
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      imageAlt: 'Philippine landscape',
      category: 'Tourism',
      title: 'Explore Hidden Gems of the Philippines',
      description:
        'Discover breathtaking destinations off the beaten path across the archipelago.',
      hasOverlay: true,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Article card with overlay text on the image. Creates an engaging visual hierarchy with text overlaid on a gradient background. Ideal for featured content and hero sections.',
      },
    },
  },
};

export const NewsArticle: ArticleCardStory = {
  args: {
    article: {
      id: 3,
      image:
        'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg',
      imageAlt: 'People working together',
      category: 'News',
      title: 'President Signs New Healthcare Reform Bill',
      description:
        'Landmark legislation aims to improve healthcare access for all Filipinos through expanded coverage and facilities.',
      hasOverlay: false,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Article card for breaking news and current events coverage.',
      },
    },
  },
};

export const TechnologyUpdate: ArticleCardStory = {
  args: {
    article: {
      id: 4,
      image:
        'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      imageAlt: 'Technology and innovation',
      category: 'Technology',
      title: 'AI-Powered Tools Transform Government Services',
      description:
        'Government agencies adopt artificial intelligence to improve efficiency and citizen experience.',
      hasOverlay: false,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Article card for technology news and digital transformation updates.',
      },
    },
  },
};

export const FeaturedStory: ArticleCardStory = {
  args: {
    article: {
      id: 5,
      image:
        'https://images.pexels.com/photos/1654495/pexels-photo-1654495.jpeg',
      imageAlt: 'Community gathering',
      category: 'Featured',
      title: 'Community-Driven Solutions for Better Governance',
      description:
        'How local communities are partnering with government to solve pressing social issues.',
      hasOverlay: true,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Featured article card with overlay, perfect for highlighting important or promoted content.',
      },
    },
  },
};

export const EducationUpdate: ArticleCardStory = {
  args: {
    article: {
      id: 6,
      image:
        'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg',
      imageAlt: 'Students in classroom',
      category: 'Education',
      title: 'Free College Tuition Program Expands to More Schools',
      description:
        'Additional universities and colleges join the free higher education program, benefiting thousands more students.',
      hasOverlay: false,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Article card for education news and policy updates.',
      },
    },
  },
};
