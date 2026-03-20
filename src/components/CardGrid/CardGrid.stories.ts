import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { Button } from '../Button/Button';
import { CardGrid } from './CardGrid';

const meta: Meta = {
  title: 'Components/Card Grid',
};

export default meta;
type Story = StoryObj;

const defaultCards = Array.from({ length: 6 }, () => ({
  heading: 'This is a standard card heading',
  description: "Here's some support text.",
  actions: html`
    ${Button({ variant: 'primary', label: 'Primary', icon: 'arrow_forward', iconPosition: 'after' })}
    ${Button({ variant: 'secondary', label: 'Primary' })}
  `,
}));

export const Default: Story = {
  render: () => CardGrid({ cards: defaultCards }),
};

export const DarkCards: Story = {
  render: () =>
    CardGrid({
      cards: defaultCards.map((card) => ({
        ...card,
        variant: 'dark' as const,
      })),
    }),
};
