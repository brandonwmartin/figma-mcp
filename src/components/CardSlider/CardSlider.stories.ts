import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { Button } from '../Button/Button';
import { CardSlider } from './CardSlider';

const meta: Meta = {
  title: 'Components/Card Slider',
};

export default meta;
type Story = StoryObj;

const defaultCards = Array.from({ length: 6 }, () => ({
  media: html`
      <img
        src="https://placehold.co/400x200"
        alt="Example card media"
        class="card__image"
      />
    `,
  heading: 'This is a standard card heading',
  description: "Here's some support text.",
  actions: html`
    ${Button({ variant: 'primary', label: 'Primary', icon: 'alarm', iconPosition: 'after' })}
    ${Button({ variant: 'secondary', label: 'Primary', icon: 'add', iconPosition: 'before' })}
  `,
}));

export const Default: Story = {
  render: () => CardSlider({ cards: defaultCards }),
};

export const DarkCards: Story = {
  render: () =>
    CardSlider({
      cards: defaultCards.map((card) => ({
        ...card,
        variant: 'dark' as const,
      })),
    }),
};
