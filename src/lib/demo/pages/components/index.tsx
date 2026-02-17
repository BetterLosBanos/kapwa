import React from 'react';
import { ListsSection, ListSectionItem } from '../../blocks/lists';
import { TablesSection, TableDataItem } from '../../blocks/tables';
import {
  ArticlesSection,
  ArticleCardItem,
  ArticleContentSection,
} from '../../blocks/articles';
import {
  BannersSection,
  StripBannerItem,
  FullBannerItem,
} from '../../blocks/banners';
import { BiographySection, BiographyProfile } from '../../blocks/biography';

const Components: React.FC = () => {
  const searchResults: ListSectionItem[] = [
    { id: 1, title: 'National ID Registration', category: 'Citizenship' },
    { id: 2, title: 'Business Permit Application', category: 'Business' },
    { id: 3, title: 'Passport Renewal', category: 'Travel' },
  ];

  const tableData: TableDataItem[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      status: 'Inactive',
    },
  ];

  const articleCards: ArticleCardItem[] = [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      imageAlt: 'Article thumbnail',
      category: 'News',
      title: 'Digital Government Initiatives',
      description:
        "Latest updates on the government's digital transformation projects and e-services.",
      hasOverlay: false,
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg',
      imageAlt: 'Article with overlay',
      category: 'Tourism',
      title: 'Exploring Philippine Islands',
      description: 'Discover the beauty of the Philippine archipelago.',
      hasOverlay: true,
    },
  ];

  const articleContent: ArticleContentSection[] = [
    { id: 1, type: 'heading', level: 1, content: 'Article Title' },
    {
      id: 2,
      type: 'paragraph',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    { id: 3, type: 'heading', level: 2, content: 'Section Heading' },
    {
      id: 4,
      type: 'paragraph',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  const stripBanner: StripBannerItem = {
    id: 1,
    emoji: '🚀',
    mainText: 'Join the #CivicTech Revolution',
    subText:
      'Help build the future of the Philippines and governance through technology',
    primaryButton: {
      text: 'Join Now',
      className:
        'bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-200',
    },
    secondaryLink: {
      text: 'Discord',
      className: 'text-xs text-orange-200 underline',
    },
  };

  const fullBanner: FullBannerItem = {
    id: 1,
    title: 'Join the',
    highlightedWord: '#CivicTech',
    description:
      'Help build the future of the Philippines and governance through technology.',
    highlightedPhrase: 'Volunteer-led. Open source. Community-driven.',
    primaryButton: {
      text: 'Join Our Movement',
      className:
        'bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100',
    },
    secondaryButton: {
      text: 'Join Discord',
      className:
        'border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900',
    },
  };

  const biographyProfile: BiographyProfile = {
    name: 'Ferdinand Marcos Jr.',
    position: '17th President of the Republic of the Philippines',
    servingSince: 'Serving since June 30, 2022',
    profileImage:
      'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    bannerImage:
      'https://images.pexels.com/photos/1714455/pexels-photo-1714455.jpeg',
    contactInfo: {
      office: 'Malacañang Palace, Manila',
      phone: '+63 (2) 8736 8645',
      email: 'op@president.gov.ph',
      website: 'www.president.gov.ph',
    },
    education: [
      {
        degree: 'Bachelor of Arts in Political Science',
        institution: 'University of Oxford',
        year: '1975',
      },
      {
        degree: 'Master in Business Administration',
        institution: 'Wharton School of Business',
        year: '1979',
      },
    ],
    biography: [
      'Ferdinand "Bongbong" Romualdez Marcos Jr. serves as the 17th President of the Philippines, assuming office on June 30, 2022. As the country\'s chief executive, he leads the implementation of laws and policies aimed at national development and public welfare.',
      'Prior to his presidency, he served in various government positions including as a Senator of the Philippines from 2010 to 2016, and as Governor of Ilocos Norte. His administration focuses on economic recovery, infrastructure development, and digital transformation of government services.',
    ],
    achievements: [
      'Led the implementation of digital transformation initiatives across government agencies',
      'Established international partnerships for economic cooperation',
      'Launched nationwide infrastructure development programs',
      'Reformed tax collection systems for improved efficiency',
    ],
  };

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>Components</h1>
        <ListsSection
          title='Search Results'
          headerTitle='Lists'
          headerSubtitle='Different list styles and search results'
          listItems={searchResults}
          externalLinkText='View'
        />
        <TablesSection
          title='Tables'
          subtitle='Table styles for data presentation'
          tableData={tableData}
        />
        <ArticlesSection
          headerTitle='Article Components'
          headerSubtitle='Article cards and content styles'
          articleCardTitle='Article Card'
          articleCards={articleCards}
          showArticleContent={true}
          articleContentTitle='Article Content'
          articleContent={articleContent}
        />
        <BannersSection
          headerTitle='CivicTech Components'
          headerSubtitle='Banner and call-to-action components for community engagement'
          stripBannerTitle='Strip Banner'
          stripBanner={stripBanner}
          fullBannerTitle='Full CivicTech Banner'
          fullBanner={fullBanner}
        />
        <BiographySection
          headerTitle='Official Biography'
          headerSubtitle='Government official profile and biography layout'
          profile={biographyProfile}
          contactButtonText='Contact Office'
          websiteButtonText='Visit Website'
        />
      </div>
    </div>
  );
};

export default Components;
