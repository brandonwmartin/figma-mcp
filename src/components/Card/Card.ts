import { html, TemplateResult, nothing } from 'lit';
import './Card.css';

export type CardVariant = 'standard' | 'dark';

export interface CardProps {
  variant?: CardVariant;
  media?: TemplateResult | null;
  heading?: string;
  description?: string;
  actions?: TemplateResult | null;
}

export const Card = ({
  variant = 'standard',
  media = null,
  heading = 'This is a standard card heading',
  description = "Here's some support text.",
  actions = null,
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