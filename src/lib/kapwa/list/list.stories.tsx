import type { Meta, StoryObj } from '@storybook/react';
import { List } from './index';

const meta: Meta<typeof List> = {
  title: 'Components/Lists/List',
  component: List,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Section title within the card',
    },
    headerTitle: {
      control: 'text',
      description: 'Card header title',
    },
    headerSubtitle: {
      control: 'text',
      description: 'Optional card header subtitle',
    },
    externalLinkText: {
      control: 'text',
      description: 'Optional link text for each item',
    },
    listItems: {
      description: 'Array of list items with id, title, and category',
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    title: 'Search Results',
    headerTitle: 'Government Services',
    headerSubtitle: 'Find and access government services easily',
    externalLinkText: 'View',
    listItems: [
      {
        id: 1,
        title: 'National ID Registration',
        category: 'Identification',
      },
      {
        id: 2,
        title: 'Business Permit Application',
        category: 'Business',
      },
      {
        id: 3,
        title: 'Passport Renewal',
        category: 'Travel',
      },
      {
        id: 4,
        title: 'Tax Filing',
        category: 'Finance',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default list component displaying government services with categories and optional action links. Each item shows a title, category badge, and a "View" link.',
      },
    },
  },
};

export const WithoutLinks: Story = {
  args: {
    title: 'Available Services',
    headerTitle: 'Public Services Directory',
    headerSubtitle: 'Browse available government services',
    listItems: [
      {
        id: 1,
        title: "Driver's License Renewal",
        category: 'Transportation',
      },
      {
        id: 2,
        title: 'Voter Registration',
        category: 'Elections',
      },
      {
        id: 3,
        title: 'Health Certificate',
        category: 'Healthcare',
      },
      {
        id: 4,
        title: 'Senior Citizen ID',
        category: 'Social Services',
      },
      {
        id: 5,
        title: 'Professional License',
        category: 'Licensing',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List without action links. Useful for informational displays where items are not clickable.',
      },
    },
  },
};

export const DocumentsList: Story = {
  args: {
    title: 'Required Documents',
    headerTitle: 'Document Requirements',
    headerSubtitle: 'Documents needed for application',
    externalLinkText: 'Download',
    listItems: [
      {
        id: 1,
        title: 'Valid ID (Government-issued)',
        category: 'Primary',
      },
      {
        id: 2,
        title: 'Birth Certificate',
        category: 'Primary',
      },
      {
        id: 3,
        title: 'Proof of Address',
        category: 'Secondary',
      },
      {
        id: 4,
        title: 'Passport-sized Photo (2x2)',
        category: 'Additional',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List of required documents with download links. Perfect for showing requirements, checklists, or document lists.',
      },
    },
  },
};

export const AgenciesList: Story = {
  args: {
    title: 'Government Agencies',
    headerTitle: 'National Government Agencies',
    headerSubtitle: 'Contact information and services',
    externalLinkText: 'Visit Site',
    listItems: [
      {
        id: 1,
        title: 'Department of Foreign Affairs',
        category: 'National Agency',
      },
      {
        id: 2,
        title: 'Bureau of Internal Revenue',
        category: 'National Agency',
      },
      {
        id: 3,
        title: 'Land Transportation Office',
        category: 'Attached Agency',
      },
      {
        id: 4,
        title: 'Philippine Statistics Authority',
        category: 'Attached Agency',
      },
      {
        id: 5,
        title: 'Commission on Elections',
        category: 'Constitutional Body',
      },
      {
        id: 6,
        title: 'Civil Service Commission',
        category: 'Constitutional Body',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List of government agencies with external links. Shows how to organize and categorize multiple agencies.',
      },
    },
  },
};

export const ProjectsList: Story = {
  args: {
    title: 'Active Projects',
    headerTitle: 'Infrastructure Projects',
    headerSubtitle: 'Ongoing development projects across the Philippines',
    externalLinkText: 'Details',
    listItems: [
      {
        id: 1,
        title: 'Metro Manila Subway System',
        category: 'Transportation',
      },
      {
        id: 2,
        title: 'Clark International Airport Expansion',
        category: 'Aviation',
      },
      {
        id: 3,
        title: 'Mindanao Railway Project',
        category: 'Transportation',
      },
      {
        id: 4,
        title: 'New Clark City Development',
        category: 'Urban Development',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List of infrastructure projects. Demonstrates how to display project listings with categories.',
      },
    },
  },
};

export const ProgramsList: Story = {
  args: {
    title: 'Social Programs',
    headerTitle: 'Government Assistance Programs',
    headerSubtitle: 'Available assistance programs for Filipino citizens',
    externalLinkText: 'Apply',
    listItems: [
      {
        id: 1,
        title: 'Pantawid Pamilyang Pilipino Program (4Ps)',
        category: 'Social Welfare',
      },
      {
        id: 2,
        title: 'Tulong Panghanapbuhay sa Ating Disadvantaged/Displaced Workers',
        category: 'Employment',
      },
      {
        id: 3,
        title: 'Universal Health Care Program',
        category: 'Healthcare',
      },
      {
        id: 4,
        title: 'Free College Tuition Program',
        category: 'Education',
      },
      {
        id: 5,
        title: 'Senior Citizens Benefits and Privileges',
        category: 'Social Services',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List of government assistance programs with application links. Useful for social program directories.',
      },
    },
  },
};

export const ResourcesList: Story = {
  args: {
    title: 'Learning Resources',
    headerTitle: 'Civic Tech Resources',
    headerSubtitle: 'Educational materials and guides',
    externalLinkText: 'Learn',
    listItems: [
      {
        id: 1,
        title: 'Getting Started with Open Data',
        category: 'Tutorial',
      },
      {
        id: 2,
        title: 'Government API Documentation',
        category: 'API',
      },
      {
        id: 3,
        title: 'Contributing to BetterGov',
        category: 'Guide',
      },
      {
        id: 4,
        title: 'Design System Guidelines',
        category: 'Documentation',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List of learning resources and documentation. Perfect for educational content and knowledge bases.',
      },
    },
  },
};

export const ContactsList: Story = {
  args: {
    title: 'Emergency Contacts',
    headerTitle: 'Important Contact Numbers',
    headerSubtitle: 'Emergency hotlines and support services',
    externalLinkText: 'Call',
    listItems: [
      {
        id: 1,
        title: 'National Emergency Hotline - 911',
        category: 'Emergency',
      },
      {
        id: 2,
        title: 'Philippine Red Cross - 143',
        category: 'Emergency',
      },
      {
        id: 3,
        title: 'NDRRMC Hotline - (02) 8911-1406',
        category: 'Disaster Response',
      },
      {
        id: 4,
        title: 'DOH Health Line - 1555',
        category: 'Healthcare',
      },
      {
        id: 5,
        title: 'PNP Hotline - 117',
        category: 'Security',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List of emergency contacts and hotlines. Essential for public safety and emergency response pages.',
      },
    },
  },
};
