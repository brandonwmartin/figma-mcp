import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { CardProps } from '../src/components/Card/Card';
import { Card } from '../src/components/Card/Card';

const meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
  render: (args: CardProps) => Card(args),
  argTypes: {
    buttonType: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      icon: 'button',
    },
    theme: {
      control: 'select',
      options: ['standard', 'dark'],
    },
  },
  args: {
    buttonLabel: 'Primary Default',
    buttonType: 'primary',
    description: "Here's some support text.",
    heading: 'This is a standard card heading',
    showButton: true,
    theme: 'standard',
  },
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<CardProps>;

export const Standard: Story = {
  args: {
    theme: 'standard',
  },
};

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
};

export const WithoutButton: Story = {
  args: {
    showButton: false,
  },
};

export const WithImage: Story = {
  args: {
    image: 'https://placehold.co/400x200/png',
    imageAlt: 'Placeholder image',
  },
};

export const DarkWithImage: Story = {
  args: {
    image: 'https://placehold.co/400x200/png',
    imageAlt: 'Placeholder image',
    theme: 'dark',
  },
};