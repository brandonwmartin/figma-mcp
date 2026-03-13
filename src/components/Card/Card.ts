import { html, TemplateResult } from 'lit';
import { Button } from '../Button/Button';
import './Card.css';

export type CardTheme = 'standard' | 'dark';

export interface CardProps {
  buttonLabel?: string;
  buttonType?: 'primary' | 'secondary' | 'outline';
  description?: string;
  heading?: string;
  image?: string;
  imageAlt?: string;
  onButtonClick?: () => void;
  showButton?: boolean;
  theme?: CardTheme;
}

export const Card = ({
  buttonLabel = 'Primary Default',
  buttonType = 'primary',
  description = "Here's some support text.",
  heading = 'This is a standard card heading',
  image,
  imageAlt = '',
  onButtonClick,
  showButton = true,
  theme = 'standard',
}: CardProps): TemplateResult => {
  const classes = ['card', `card--${theme}`].join(' ');

  return html`
    <section class=${classes}>
      ${image ? html`<img class="card__image" src=${image} alt=${imageAlt} />` : ''}
      <div class="card__body">
        <span class="card__heading heading-sm">${heading}</span>
        <span class="card__description body-default">${description}</span>
        ${showButton ? Button({ label: buttonLabel, onClick: onButtonClick, variant: buttonType }) : ''}
      </div>
    </section>
  `;
};
