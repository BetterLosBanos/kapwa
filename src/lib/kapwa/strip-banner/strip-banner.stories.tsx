import type { Meta, StoryObj } from '@storybook/react';
import { StripBanner } from './index';

const meta: Meta<typeof StripBanner> = {
  title: 'Components/Banners/StripBanner',
  component: StripBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    stripBannerTitle: {
      control: 'text',
      description: 'Title displayed above the banner',
    },
    stripBanner: {
      description: 'Banner content configuration',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StripBanner>;

export const Default: Story = {
  args: {
    stripBannerTitle: 'Announcement',
    stripBanner: {
      id: 1,
      emoji: '🚀',
      mainText: 'Join the #CivicTech Movement',
      subText: 'Help build better government technology for the Philippines',
      primaryButton: {
        text: 'Get Started',
      },
      secondaryLink: {
        text: 'Learn More',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default strip banner with a call-to-action message. Strip banners are perfect for prominent announcements, alerts, or campaigns that need immediate attention at the top of a page.',
      },
    },
  },
};

export const EmergencyAlert: Story = {
  args: {
    stripBannerTitle: 'Emergency Alert',
    stripBanner: {
      id: 2,
      emoji: '⚠️',
      mainText: 'Typhoon Warning - Signal No. 3',
      subText: 'Stay safe and follow official advisories',
      primaryButton: {
        text: 'View Updates',
        className:
          'bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-yellow-500',
      },
      secondaryLink: {
        text: 'Safety Tips',
        className: 'text-xs text-yellow-100 underline',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Strip banner for emergency alerts and urgent notifications. The yellow accent helps draw attention to time-sensitive information.',
      },
    },
  },
};

export const ServiceUpdate: Story = {
  args: {
    stripBannerTitle: 'System Status',
    stripBanner: {
      id: 3,
      emoji: '🔧',
      mainText: 'Scheduled Maintenance',
      subText: 'Services will be unavailable on Sunday, 2:00 AM - 6:00 AM PHT',
      primaryButton: {
        text: 'View Details',
      },
      secondaryLink: {
        text: 'Subscribe to Updates',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Strip banner for service updates and maintenance notifications. Keeps users informed about system status changes.',
      },
    },
  },
};

export const CommunityDrive: Story = {
  args: {
    stripBannerTitle: 'Community Initiative',
    stripBanner: {
      id: 4,
      emoji: '❤️',
      mainText: 'Donate to Relief Operations',
      subText: 'Support communities affected by recent disasters',
      primaryButton: {
        text: 'Donate Now',
        className:
          'bg-white text-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100',
      },
      secondaryLink: {
        text: 'How it helps',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Strip banner for community drives, fundraising, or volunteer recruitment campaigns.',
      },
    },
  },
};

export const NewFeature: Story = {
  args: {
    stripBannerTitle: "What's New",
    stripBanner: {
      id: 5,
      emoji: '✨',
      mainText: 'New Feature Launched!',
      subText: 'Track your government application status in real-time',
      primaryButton: {
        text: 'Try It Now',
      },
      secondaryLink: {
        text: 'See Demo',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Strip banner for announcing new features, product updates, or service improvements.',
      },
    },
  },
};

export const EventPromotion: Story = {
  args: {
    stripBannerTitle: 'Upcoming Event',
    stripBanner: {
      id: 6,
      emoji: '🎉',
      mainText: 'BetterGov Hackathon 2026',
      subText: 'Join us March 15-17 • Build solutions for public good',
      primaryButton: {
        text: 'Register Now',
        className:
          'bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-purple-700',
      },
      secondaryLink: {
        text: 'Event Details',
        className: 'text-xs text-purple-100 underline',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Strip banner for promoting events, webinars, or community gatherings. The custom purple styling helps differentiate event promotions.',
      },
    },
  },
};

export const VolunteerCall: Story = {
  args: {
    stripBannerTitle: 'Get Involved',
    stripBanner: {
      id: 7,
      emoji: '🙋',
      mainText: 'We Need Volunteers!',
      subText: 'Join our open-source community and make an impact',
      primaryButton: {
        text: 'Apply Now',
      },
      secondaryLink: {
        text: 'Learn About Us',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Strip banner for volunteer recruitment and community participation calls.',
      },
    },
  },
};
