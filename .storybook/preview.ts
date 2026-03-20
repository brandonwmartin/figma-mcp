import type { Preview } from '@storybook/web-components-vite'
import '../styles/tailwind.css';
import '../styles/design-tokens.css';
import '../styles/typography.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;