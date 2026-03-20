import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { CtaBanner, type CtaBannerProps } from './CtaBanner';
import { Button } from '../Button/Button';

const meta: Meta<CtaBannerProps> = {
  title: 'Components/CTA Banner',
  render: (args) => CtaBanner(args),
};

export default meta;
type Story = StoryObj<CtaBannerProps>;

export const Inverse: Story = {
  args: {
    variant: 'inverse',
  },
};

export const Brand: Story = {
  args: {
    variant: 'brand',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
        actions: html`
      ${Button({ variant: 'primary', label: 'Button Text', icon: 'arrow_forward', iconPosition: 'after' })}
    `,
  },
};

export const WithAction: Story = {
  args: {
    variant: 'inverse',
    actions: html`
      ${Button({ variant: 'primary', label: 'Button Text', icon: 'arrow_forward', iconPosition: 'after' })}
    `,
  },
};

export const PrimaryWithAction: Story = {
  args: {
    variant: 'primary',
        actions: html`
      ${Button({ variant: 'primary', label: 'Button Text', icon: 'arrow_forward', iconPosition: 'after' })}
    `,
  },
};
