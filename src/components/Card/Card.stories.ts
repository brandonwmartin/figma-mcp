import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { Card, type CardProps } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  render: (args) => Card(args),
};

export default meta;
type Story = StoryObj<CardProps>;

export const Standard: Story = {
  args: {
    variant: 'standard',
  },
};

export const IconMedia: Story = {
  args: {
    variant: 'standard',
    media: html`
      <span class="card__icon" aria-hidden="true">home</span>
    `,
  },
};

export const DarkVariant: Story = {
  args: {
    variant: 'dark',
  },
};

export const FullImage: Story = {
  args: {
    variant: 'standard',
    media: html`
      <img
        src="https://placehold.co/400x200"
        alt="Example card media"
        class="card__image"
      />
    `,
  },
};

export const WithAction: Story = {
  args: {
    variant: 'standard',
    actions: html`
      ${Button({ variant: 'primary', label: 'Primary' })}
    `,
  },
};

export const WithActionIcon: Story = {
  args: {
    variant: 'standard',
    actions: html`
      ${Button({ variant: 'primary', label: 'Learn more', icon: 'arrow_forward', iconPosition: 'after' })}
    `,
  },
};

export const WithActions: Story = {
  args: {
    variant: 'standard',
    actions: html`
      ${Button({ variant: 'primary', label: 'Primary' })}
      ${Button({ variant: 'outline', label: 'Secondary' })}
    `,
  },
};

export const WithActionsIcons: Story = {
  args: {
    variant: 'standard',
    actions: html`
      ${Button({ variant: 'primary', label: 'Confirm', icon: 'check', iconPosition: 'before' })}
      ${Button({ variant: 'outline', label: 'Cancel', icon: 'close', iconPosition: 'before' })}
    `,
  },
};

export const DarkWithActions: Story = {
  args: {
    variant: 'dark',
    actions: html`
      ${Button({ variant: 'primary', label: 'Primary' })}
      ${Button({ variant: 'secondary', label: 'Secondary' })}
    `,
  },
};

export const DarkWithActionsIcons: Story = {
  args: {
    variant: 'dark',
    actions: html`
      ${Button({ variant: 'primary', label: 'Confirm', icon: 'check', iconPosition: 'before' })}
      ${Button({ variant: 'secondary', label: 'Cancel', icon: 'close', iconPosition: 'before' })}
    `,
  },
};

export const DarkIcon: Story = {
  args: {
    variant: 'dark',
    media: html`
      <span class="card__icon" aria-hidden="true">home</span>
    `,
  },
};

export const DarkFullImage: Story = {
  args: {
    variant: 'dark',
    media: html`
      <img
        src="https://placehold.co/400x200"
        alt="Example card media"
        class="card__image"
      />
    `,
  },
};

export const WithImageAndActions: Story = {
  args: {
    variant: 'standard',
    media: html`
      <img
        src="https://placehold.co/400x200"
        alt="Example card media"
        class="card__image"
      />
    `,
    actions: html`
      ${Button({ variant: 'primary', label: 'Primary' })}
      ${Button({ variant: 'outline', label: 'Secondary' })}
    `,
  },
};