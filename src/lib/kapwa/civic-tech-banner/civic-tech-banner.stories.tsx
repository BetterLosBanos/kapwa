import type { Meta, StoryObj } from '@storybook/react';
import { CivicTechBanner } from './index';

const meta: Meta<typeof CivicTechBanner> = {
  title: 'Components/Banners/CivicTechBanner',
  component: CivicTechBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    fullBannerTitle: {
      control: 'text',
      description: 'Title displayed above the banner',
    },
    fullBanner: {
      description: 'Banner content configuration',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CivicTechBanner>;

export const Default: Story = {
  args: {
    fullBannerTitle: 'Join the Movement',
    fullBanner: {
      title: 'Join the',
      highlightedWord: '#CivicTech',
      description:
        'Be part of building better government technology for the Philippines.',
      highlightedPhrase: 'Volunteer-led. Open source. Community-driven.',
      primaryButton: {
        text: 'Start Contributing',
      },
      secondaryButton: {
        text: 'Learn More',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default civic tech banner promoting community participation in government technology initiatives. Features a vibrant gradient background with call-to-action buttons.',
      },
    },
  },
};

export const OpenSourceProject: Story = {
  args: {
    fullBannerTitle: 'BetterGov Project',
    fullBanner: {
      title: 'Build the',
      highlightedWord: 'Future',
      description:
        'Help create transparent, accessible government services for all Filipinos.',
      highlightedPhrase: 'Code with purpose. Build with community.',
      primaryButton: {
        text: 'View Projects',
      },
      secondaryButton: {
        text: 'Join Discord',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Banner for promoting open-source government technology projects and recruiting contributors.',
      },
    },
  },
};

export const HackathonEvent: Story = {
  args: {
    fullBannerTitle: 'Upcoming Event',
    fullBanner: {
      title: 'Hackathon for',
      highlightedWord: 'Good',
      description:
        'Join developers, designers, and civic leaders for 48 hours of innovation.',
      highlightedPhrase: 'March 15-17, 2026. Virtual & In-person.',
      primaryButton: {
        text: 'Register Now',
        className:
          'bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500',
      },
      secondaryButton: {
        text: 'View Schedule',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Banner for promoting civic tech hackathons and coding events. Uses custom yellow button styling for emphasis.',
      },
    },
  },
};

export const VolunteerRecruitment: Story = {
  args: {
    fullBannerTitle: 'We Need You',
    fullBanner: {
      title: 'Your Skills Can',
      highlightedWord: 'Transform',
      description:
        'Whether you code, design, write, or organize—you can make a difference.',
      highlightedPhrase: 'No experience required. Just passion for change.',
      primaryButton: {
        text: 'Sign Up',
      },
      secondaryButton: {
        text: 'See Opportunities',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Banner for recruiting volunteers with various skill sets to civic tech initiatives.',
      },
    },
  },
};

export const DataTransparency: Story = {
  args: {
    fullBannerTitle: 'Open Data Initiative',
    fullBanner: {
      title: 'Government',
      highlightedWord: 'Transparency',
      description:
        'Access public data, track government spending, and hold officials accountable.',
      highlightedPhrase: 'Your tax money. Your right to know.',
      primaryButton: {
        text: 'Explore Data',
      },
      secondaryButton: {
        text: 'Report an Issue',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Banner promoting open data initiatives and government transparency platforms.',
      },
    },
  },
};

export const CommunityImpact: Story = {
  args: {
    fullBannerTitle: 'Our Impact',
    fullBanner: {
      title: 'Together We Built',
      highlightedWord: '50+',
      description:
        'civic tech projects serving millions of Filipinos across the archipelago.',
      highlightedPhrase: '10,000+ volunteers. 200+ communities reached.',
      primaryButton: {
        text: 'See Projects',
      },
      secondaryButton: {
        text: 'Read Stories',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Banner showcasing community impact and celebrating achievements in civic technology.',
      },
    },
  },
};

export const TrainingProgram: Story = {
  args: {
    fullBannerTitle: 'Learn & Grow',
    fullBanner: {
      title: 'Free',
      highlightedWord: 'Training',
      description:
        'Learn civic tech skills through workshops, mentorship, and hands-on projects.',
      highlightedPhrase: 'For beginners to experts. All welcome.',
      primaryButton: {
        text: 'Enroll Now',
      },
      secondaryButton: {
        text: 'Browse Courses',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Banner promoting training programs and educational initiatives in civic technology.',
      },
    },
  },
};

export const EmergencyResponse: Story = {
  args: {
    fullBannerTitle: 'Crisis Response',
    fullBanner: {
      title: 'Disaster',
      highlightedWord: 'Relief',
      description:
        'Real-time information, resource tracking, and coordination tools for emergencies.',
      highlightedPhrase: 'Powered by community. Built for resilience.',
      primaryButton: {
        text: 'Get Help',
        className:
          'bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700',
      },
      secondaryButton: {
        text: 'Volunteer',
        className:
          'border-2 border-red-200 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-200 hover:text-gray-900',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Banner for disaster relief and emergency response platforms. Uses red accent colors to convey urgency.',
      },
    },
  },
};
