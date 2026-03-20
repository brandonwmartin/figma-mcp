import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { Button } from './Button';

const meta: Meta = {
  title: 'Components/Button',
};

export default meta;
type Story = StoryObj;

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px;">
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        ${Button({ variant: 'primary', size: 'large', label: 'Primary Large' })}
        ${Button({ variant: 'primary', size: 'large', label: 'Primary Large Disabled', disabled: true })}
        ${Button({ variant: 'secondary', size: 'large', label: 'Secondary Large' })}
        ${Button({ variant: 'secondary', size: 'large', label: 'Secondary Large Disabled', disabled: true })}
        ${Button({ variant: 'outline', size: 'large', label: 'Outline Large' })}
        ${Button({ variant: 'outline', size: 'large', label: 'Outline Large Disabled', disabled: true })}
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        ${Button({ variant: 'primary', size: 'default', label: 'Primary Default' })}
        ${Button({ variant: 'primary', size: 'default', label: 'Primary Default Disabled', disabled: true })}
        ${Button({ variant: 'secondary', size: 'default', label: 'Secondary Default' })}
        ${Button({ variant: 'secondary', size: 'default', label: 'Secondary Default Disabled', disabled: true })}
        ${Button({ variant: 'outline', size: 'default', label: 'Outline Default' })}
        ${Button({ variant: 'outline', size: 'default', label: 'Outline Default Disabled', disabled: true })}
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        ${Button({ variant: 'primary', size: 'large', label: 'Icon Before', icon: 'add', iconPosition: 'before' })}
        ${Button({ variant: 'primary', size: 'large', label: 'Icon After', icon: 'arrow_forward', iconPosition: 'after' })}
        ${Button({ variant: 'primary', size: 'large', label: 'Icon Before Disabled', icon: 'add', iconPosition: 'before', disabled: true })}
        ${Button({ variant: 'primary', size: 'large', label: 'Icon After Disabled', icon: 'arrow_forward', iconPosition: 'after', disabled: true })}
      </div>
    </div>
  `,
};

export const Primary: Story = {
  render: () => Button({ variant: 'primary', size: 'large', label: 'Primary Button' }),
};

export const Secondary: Story = {
  render: () => Button({ variant: 'secondary', size: 'large', label: 'Secondary Button' }),
};

export const Outline: Story = {
  render: () => Button({ variant: 'outline', size: 'large', label: 'Outline Button' }),
};

export const IconBefore: Story = {
  render: () => Button({ variant: 'primary', size: 'large', label: 'Icon Before', icon: 'add', iconPosition: 'before' }),
};

export const IconAfter: Story = {
  render: () => Button({ variant: 'primary', size: 'large', label: 'Icon After', icon: 'arrow_forward', iconPosition: 'after' }),
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px;">
      ${Button({ variant: 'primary', size: 'large', label: 'Primary', disabled: true })}
      ${Button({ variant: 'secondary', size: 'large', label: 'Secondary', disabled: true })}
      ${Button({ variant: 'outline', size: 'large', label: 'Outline', disabled: true })}
    </div>
  `,
};
