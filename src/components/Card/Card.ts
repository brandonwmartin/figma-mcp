import { html, TemplateResult, nothing } from 'lit';
import './Card.css';

export type CardVariant = 'standard' | 'dark';

export interface CardProps {
  actions?: TemplateResult | null;
  description?: string;
  heading?: string;
  media?: TemplateResult | null;
  variant?: CardVariant;
}

export const Card = ({
  actions = null,
  description = "Here's some support text.",
  heading = 'This is a standard card heading',
  media = null,
  variant = 'standard',
}: CardProps): TemplateResult => {
  return html`
    <section class="card card--${variant}">
      ${media
        ? html`<div class="card__media">${media}</div>`
        : nothing}

      <div class="card__content">
        <h3 class="card__heading">${heading}</h3>
        <p class="card__description">${description}</p>
      </div>

      ${actions
        ? html`<div class="card__button-group">${actions}</div>`
        : nothing}
    </section>
  `;
};