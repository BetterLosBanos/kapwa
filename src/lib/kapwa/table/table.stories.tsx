import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './index';

const meta: Meta<typeof Table> = {
  title: 'Components/Tables/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card header title',
    },
    subtitle: {
      control: 'text',
      description: 'Card header subtitle',
    },
    tableData: {
      description: 'Array of table data items with id, name, email, and status',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const VolunteerDirectory: Story = {
  args: {
    title: 'BetterGov Volunteers',
    subtitle: 'Active contributors to civic tech projects',
    tableData: [
      {
        id: 1,
        name: 'Antonio Luna',
        email: 'antonio.luna@bettergov.ph',
        status: 'Active',
      },
      {
        id: 2,
        name: 'Apolinario Mabini',
        email: 'apolinario.mabini@bettergov.ph',
        status: 'Active',
      },
      {
        id: 3,
        name: 'Gregorio del Pilar',
        email: 'gregorio.delpilar@bettergov.ph',
        status: 'Active',
      },
      {
        id: 4,
        name: 'Marcelo del Pilar',
        email: 'marcelo.delpilar@bettergov.ph',
        status: 'Pending',
      },
      {
        id: 5,
        name: 'Diego Silang',
        email: 'diego.silang@bettergov.ph',
        status: 'Active',
      },
      {
        id: 6,
        name: 'Mariano Ponce',
        email: 'mariano.ponce@bettergov.ph',
        status: 'Active',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Table displaying volunteer contributors in civic tech projects. Shows active and pending volunteers.',
      },
    },
  },
};
