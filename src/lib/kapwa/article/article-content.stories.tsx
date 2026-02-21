import type { Meta, StoryObj } from '@storybook/react';
import { ArticleContent } from './index';

const meta: Meta<typeof ArticleContent> = {
  title: 'Components/Article/ArticleContent',
  component: ArticleContent,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='max-w-3xl'>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    articleContentTitle: {
      control: 'text',
      description: 'Title displayed above the article content',
    },
    articleContent: {
      description: 'Array of content sections (headings and paragraphs)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleContent>;

export const Default: Story = {
  args: {
    articleContentTitle: 'Article Content',
    articleContent: [
      {
        id: 1,
        type: 'heading',
        level: 1,
        content: 'Digital Transformation in Philippine Government',
      },
      {
        id: 2,
        type: 'paragraph',
        content:
          'The Philippine government is undergoing a significant digital transformation, leveraging technology to improve public services and enhance citizen engagement. This initiative aims to make government services more accessible, efficient, and transparent.',
      },
      {
        id: 3,
        type: 'heading',
        level: 2,
        content: 'Key Initiatives',
      },
      {
        id: 4,
        type: 'paragraph',
        content:
          'Several key initiatives are driving this transformation, including the development of unified online portals, mobile applications for essential services, and data analytics platforms for better policy-making.',
      },
      {
        id: 5,
        type: 'paragraph',
        content:
          'These efforts are expected to reduce processing times, minimize corruption, and provide citizens with easier access to government information and services.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default article content with H1, H2 headings and paragraphs. Perfect for displaying full article text with proper typography and hierarchy.',
      },
    },
  },
};

export const LongFormArticle: Story = {
  args: {
    articleContentTitle: 'Full Article',
    articleContent: [
      {
        id: 1,
        type: 'heading',
        level: 1,
        content: 'Building a Better Government Through Technology',
      },
      {
        id: 2,
        type: 'paragraph',
        content:
          'In an era where technology shapes every aspect of our lives, government services must evolve to meet the expectations of digital-first citizens. The Philippines is taking bold steps to modernize its public sector through innovative civic technology initiatives.',
      },
      {
        id: 3,
        type: 'heading',
        level: 2,
        content: 'The Challenge',
      },
      {
        id: 4,
        type: 'paragraph',
        content:
          'Traditional government processes often involve long queues, extensive paperwork, and multiple visits to different offices. This creates frustration for citizens and inefficiencies for government agencies.',
      },
      {
        id: 5,
        type: 'paragraph',
        content:
          'Moreover, the lack of digital infrastructure prevents many Filipinos, especially those in remote areas, from accessing essential services. This digital divide exacerbates existing inequalities and limits opportunities for economic and social development.',
      },
      {
        id: 6,
        type: 'heading',
        level: 2,
        content: 'The Solution',
      },
      {
        id: 7,
        type: 'paragraph',
        content:
          'By implementing digital platforms and streamlining processes, the government can provide faster, more convenient services while maintaining security and transparency.',
      },
      {
        id: 8,
        type: 'heading',
        level: 3,
        content: 'Online Services Portal',
      },
      {
        id: 9,
        type: 'paragraph',
        content:
          'A centralized online portal allows citizens to access various government services from a single platform, eliminating the need for multiple website visits. This unified approach simplifies the user experience and reduces confusion.',
      },
      {
        id: 10,
        type: 'heading',
        level: 3,
        content: 'Mobile Applications',
      },
      {
        id: 11,
        type: 'paragraph',
        content:
          'Mobile apps make it possible for citizens to complete transactions anytime, anywhere, using their smartphones. This is particularly important in a country where mobile phone adoption exceeds computer ownership.',
      },
      {
        id: 12,
        type: 'heading',
        level: 3,
        content: 'Data-Driven Decision Making',
      },
      {
        id: 13,
        type: 'paragraph',
        content:
          'Advanced analytics and open data initiatives enable evidence-based policy-making and allow citizens to hold government accountable. Transparency through data builds trust and encourages civic participation.',
      },
      {
        id: 14,
        type: 'heading',
        level: 2,
        content: 'The Impact',
      },
      {
        id: 15,
        type: 'paragraph',
        content:
          'Early adoption of these technologies has shown promising results, with reduced processing times, increased citizen satisfaction, and improved government efficiency. Agencies that have embraced digital transformation report significant improvements in service delivery.',
      },
      {
        id: 16,
        type: 'paragraph',
        content:
          'As more agencies embrace digital transformation, we can expect a government that is more responsive, accountable, and accessible to all Filipinos. The journey toward a fully digital government is ongoing, but the progress so far demonstrates the potential for technology to transform public service.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Long-form article with multiple heading levels (H1, H2, H3) and paragraphs. Demonstrates proper content hierarchy and structure for in-depth articles.',
      },
    },
  },
};

export const NewsArticle: Story = {
  args: {
    articleContentTitle: 'Latest News',
    articleContent: [
      {
        id: 1,
        type: 'heading',
        level: 1,
        content: 'President Signs New Healthcare Reform Bill',
      },
      {
        id: 2,
        type: 'paragraph',
        content:
          "MANILA — President Ferdinand Marcos Jr. signed into law today the Universal Healthcare Enhancement Act, marking a significant milestone in the country's healthcare reform efforts.",
      },
      {
        id: 3,
        type: 'paragraph',
        content:
          'The new legislation expands coverage under the existing Universal Health Care law, providing additional benefits and services to all Filipino citizens. Key provisions include free primary care consultations, expanded drug coverage, and increased funding for rural health facilities.',
      },
      {
        id: 4,
        type: 'heading',
        level: 2,
        content: 'What This Means for Filipinos',
      },
      {
        id: 5,
        type: 'paragraph',
        content:
          'Under the new law, all registered PhilHealth members will have access to free annual check-ups and preventive care services. The government will also establish additional health centers in underserved areas to ensure equitable access to healthcare.',
      },
      {
        id: 6,
        type: 'paragraph',
        content:
          'Health Secretary Ted Herbosa stated that the reforms will benefit an estimated 110 million Filipinos, particularly those in rural and remote communities who have limited access to medical facilities.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'News article format with inverted pyramid structure. Suitable for breaking news and current events reporting.',
      },
    },
  },
};

export const PolicyBrief: Story = {
  args: {
    articleContentTitle: 'Policy Brief',
    articleContent: [
      {
        id: 1,
        type: 'heading',
        level: 1,
        content: 'Healthcare Access for All: A Policy Framework',
      },
      {
        id: 2,
        type: 'heading',
        level: 2,
        content: 'Executive Summary',
      },
      {
        id: 3,
        type: 'paragraph',
        content:
          'This policy brief outlines recommendations for expanding healthcare access to underserved communities in the Philippines, focusing on remote areas and vulnerable populations. The proposed framework addresses systemic barriers and provides actionable solutions.',
      },
      {
        id: 4,
        type: 'heading',
        level: 2,
        content: 'Current Situation',
      },
      {
        id: 5,
        type: 'paragraph',
        content:
          'Despite progress in recent years, many Filipinos still lack access to quality healthcare services, particularly in rural and remote areas where medical facilities are scarce. The doctor-to-patient ratio in these areas is significantly below national standards.',
      },
      {
        id: 6,
        type: 'paragraph',
        content:
          'Geographic barriers, financial constraints, and limited healthcare infrastructure contribute to this disparity. Vulnerable populations such as indigenous peoples, persons with disabilities, and senior citizens face additional challenges in accessing healthcare.',
      },
      {
        id: 7,
        type: 'heading',
        level: 2,
        content: 'Policy Recommendations',
      },
      {
        id: 8,
        type: 'paragraph',
        content:
          'We propose a three-pronged approach: expanding telemedicine services to reach remote communities, deploying mobile health units to underserved areas, and increasing healthcare workforce training programs with incentives for rural deployment.',
      },
      {
        id: 9,
        type: 'heading',
        level: 2,
        content: 'Implementation Timeline',
      },
      {
        id: 10,
        type: 'paragraph',
        content:
          'The proposed reforms can be implemented in phases over three years, with initial pilot programs in selected regions followed by nationwide rollout. Estimated budget requirements and funding sources are detailed in the full policy document.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Article content formatted as a policy brief with clear sections and formal structure. Ideal for government documents, white papers, and policy recommendations.',
      },
    },
  },
};

export const GuideArticle: Story = {
  args: {
    articleContentTitle: 'Step-by-Step Guide',
    articleContent: [
      {
        id: 1,
        type: 'heading',
        level: 1,
        content: 'How to Apply for a National ID',
      },
      {
        id: 2,
        type: 'paragraph',
        content:
          'The Philippine Identification System (PhilSys) provides a valid proof of identity for all citizens and resident aliens. Follow this guide to complete your registration.',
      },
      {
        id: 3,
        type: 'heading',
        level: 2,
        content: 'Step 1: Pre-Registration',
      },
      {
        id: 4,
        type: 'paragraph',
        content:
          "Visit the PhilSys registration portal and fill out the online pre-registration form. You will receive a Registration Reference Number (RRN) that you'll need for your appointment.",
      },
      {
        id: 5,
        type: 'heading',
        level: 2,
        content: 'Step 2: Schedule an Appointment',
      },
      {
        id: 6,
        type: 'paragraph',
        content:
          'Use your RRN to book an appointment at your nearest PhilSys registration center. Choose a date and time that works best for you. Walk-in registrations are also available but may have longer wait times.',
      },
      {
        id: 7,
        type: 'heading',
        level: 2,
        content: 'Step 3: Prepare Required Documents',
      },
      {
        id: 8,
        type: 'paragraph',
        content:
          "Bring at least one valid government-issued ID or supporting documents such as birth certificate, passport, or voter's ID. For minors and those without IDs, alternative documents are accepted.",
      },
      {
        id: 9,
        type: 'heading',
        level: 2,
        content: 'Step 4: Visit the Registration Center',
      },
      {
        id: 10,
        type: 'paragraph',
        content:
          'On your appointment date, arrive at the registration center on time. Bring your documents and your RRN. The registration process includes biometric capture (fingerprints, iris scan, and photo) and verification of your information.',
      },
      {
        id: 11,
        type: 'heading',
        level: 2,
        content: 'Step 5: Wait for Your PhilID',
      },
      {
        id: 12,
        type: 'paragraph',
        content:
          'Your PhilID will be delivered to your registered address within 30-60 days. You can track your application status online using your PhilSys Number (PSN).',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Step-by-step guide format with clear sections. Perfect for tutorials, how-to articles, and instructional content.',
      },
    },
  },
};

export const SimpleContent: Story = {
  args: {
    articleContentTitle: 'About',
    articleContent: [
      {
        id: 1,
        type: 'heading',
        level: 1,
        content: 'About BetterGov',
      },
      {
        id: 2,
        type: 'paragraph',
        content:
          'BetterGov is a community-driven initiative to build better government technology for the Philippines. We believe that technology can transform public service and make government more accessible, transparent, and efficient.',
      },
      {
        id: 3,
        type: 'paragraph',
        content:
          'Our projects are open source and built by volunteers who are passionate about civic technology. Join us in creating digital solutions that serve the Filipino people.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Simple article content with minimal structure. Useful for about pages, short announcements, or brief informational content.',
      },
    },
  },
};
