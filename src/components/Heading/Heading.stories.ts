import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  title: 'Typography/Heading',
};

export default meta;
type Story = StoryObj;

export const AllHeadings: Story = {
  render: () => html`
    <h1 class="heading-xl">Heading 1 (XL)</h1>
    <h2 class="heading-lg">Heading 2 (LG)</h2>
    <h3 class="heading-md">Heading 3 (MD)</h3>
    <h4 class="heading-sm">Heading 4 (SM)</h4>
    <h5 class="heading-xs">Heading 5 (XS)</h5>
  `,
};