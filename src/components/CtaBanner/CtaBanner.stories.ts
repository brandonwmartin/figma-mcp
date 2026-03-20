import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { CtaBanner, type CtaBannerProps } from './CtaBanner';
import { Button } from '../Button/Button';

const meta: Meta<CtaBannerProps> = {
  title: 'Components/CTA Banner',
  render: (args) => CtaBanner(args),
  args: {
    heading: 'This is a CTA banner',
    description: "Here's some supporting text that runs long and is meant to break onto multiple lines. I think it looks really nice.",
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['inverse', 'brand', 'primary'],
    },
    heading: { control: 'text' },
    description: { control: 'text' },
    actions: { control: false },
  },
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
  args: { variant: 'primary' },
};

export const WithAction: Story = {
  args: { variant: 'inverse' },
  render: (args) => CtaBanner({ ...args, actions: html`${Button({ variant: 'primary', label: 'Button Text', icon: 'arrow_forward', iconPosition: 'after' })}` }),
};

export const PrimaryWithAction: Story = {
  args: { variant: 'primary' },
  render: (args) => CtaBanner({ ...args, actions: html`${Button({ variant: 'primary', label: 'Button Text', icon: 'arrow_forward', iconPosition: 'after' })}` }),
};

export const BrandWithAction: Story = {
  args: { variant: 'brand' },
  render: (args) => CtaBanner({ ...args, actions: html`${Button({ variant: 'secondary', label: 'Button Text', icon: 'arrow_forward', iconPosition: 'after' })}` }),
};
