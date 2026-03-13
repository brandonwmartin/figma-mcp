import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { CardGridProps } from '../src/components/CardGrid/CardGrid';
import { CardGrid } from '../src/components/CardGrid/CardGrid';

const defaultItems = Array.from({ length: 6 }, () => ({
  heading: 'This is a standard card heading',
  description: "Here's some support text.",
  image: 'https://placehold.co/400x200/png',
  showButton: true,
  buttonLabel: 'Primary Default',
  theme: 'standard' as const,
}));

const meta = {
  title: 'Components/CardGrid',
  tags: ['autodocs'],
  render: (args: CardGridProps) => CardGrid(args),
  args: {
    items: defaultItems,
  },
} satisfies Meta<CardGridProps>;

export default meta;
type Story = StoryObj<CardGridProps>;

export const Default: Story = {};

export const WithDarkCards: Story = {
  args: {
    items: defaultItems.map((item) => ({ ...item, theme: 'dark' })),
  },
};

export const MixedThemes: Story = {
  args: {
    items: defaultItems.map((item, index) => ({
      ...item,
      theme: index % 2 === 0 ? 'standard' : 'dark',
    })),
  },
};

export const WithoutButtons: Story = {
  args: {
    items: defaultItems.map((item) => ({ ...item, showButton: false })),
  },
};