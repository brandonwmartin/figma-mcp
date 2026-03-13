import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn } from 'storybook/test';

import type { ButtonProps } from '../src/components/Button/Button';
import { Button } from '../src/components/Button/Button';
import { html } from 'lit';

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args: ButtonProps) => Button(args),
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'default'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
  },
  args: {
    disabled: false,
    label: 'Button',
    onClick: fn(),
    size: 'large',
    variant: 'primary',
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Primary Default',
    variant: 'primary',
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    icon: 'book',
    label: 'Primary Default',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Default',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Default',
    variant: 'outline',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Primary Disabled',
    variant: 'primary',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'default',
  },
};

export const AllVariants: Story = {
    args: {
      label: 'Button',
    },
    render: (args: ButtonProps) => {
      return html`
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          ${Button({ ...args, variant: 'primary' })}
          ${Button({ ...args, variant: 'secondary' })}
          ${Button({ ...args, variant: 'outline' })}
          </div>
            <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 16px;">
          ${Button({ ...args, variant: 'primary', disabled: true, label: 'Primary Disabled' })}
          ${Button({ ...args, variant: 'secondary', disabled: true, label: 'Secondary Disabled' })}
          ${Button({ ...args, variant: 'outline', disabled: true, label: 'Outline Disabled' })}
        </div>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 16px;">
          ${Button({ ...args, variant: 'primary', size: 'default', label: 'Primary Small' })}
          ${Button({ ...args, variant: 'secondary', size: 'default', label: 'Secondary Small' })}
          ${Button({ ...args, variant: 'outline', size: 'default', label: 'Outline Small' })}
        </div>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 16px;">
          ${Button({ ...args, variant: 'primary', size: 'default', disabled: true, label: 'Primary Small Disabled' })}
          ${Button({ ...args, variant: 'secondary', size: 'default', disabled: true, label: 'Secondary Small Disabled' })}
          ${Button({ ...args, variant: 'outline', size: 'default', disabled: true, label: 'Outline Small Disabled' })}
        </div>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 16px;">
          ${Button({ ...args, variant: 'primary', icon: 'book', label: 'Primary with Icon' })}
          ${Button({ ...args, variant: 'secondary', icon: 'book', label: 'Secondary with Icon' })}
          ${Button({ ...args, variant: 'outline', icon: 'book', label: 'Outline with Icon' })}
        </div>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 16px;">
          ${Button({ ...args, variant: 'primary', icon: 'book', disabled: true, label: 'Primary with Icon Disabled' })}
          ${Button({ ...args, variant: 'secondary', icon: 'book', disabled: true, label: 'Secondary with Icon Disabled' })}
          ${Button({ ...args, variant: 'outline', icon: 'book', disabled: true, label: 'Outline with Icon Disabled' })}
        </div>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 16px;">
          ${Button({ ...args, variant: 'primary', icon: 'book', size: 'default', label: 'Primary Small with Icon' })}
          ${Button({ ...args, variant: 'secondary', icon: 'book', size: 'default', label: 'Secondary Small with Icon' })}
          ${Button({ ...args, variant: 'outline', icon: 'book', size: 'default', label: 'Outline Small with Icon' })}
        </div>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 16px;">
          ${Button({ ...args, variant: 'primary', icon: 'book', size: 'default', disabled: true, label: 'Primary Small with Icon Disabled' })}
          ${Button({ ...args, variant: 'secondary', icon: 'book', size: 'default', disabled: true, label: 'Secondary Small with Icon Disabled' })}
          ${Button({ ...args, variant: 'outline', icon: 'book', size: 'default', disabled: true, label: 'Outline Small with Icon Disabled' })}
        </div>
      `;
    },
}