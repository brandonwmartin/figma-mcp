import { html, TemplateResult, nothing } from 'lit';
import './CtaBanner.css';

export type CtaBannerVariant = 'inverse' | 'brand' | 'primary';

export interface CtaBannerProps {
  actions?: TemplateResult | null;
  description?: string;
  heading?: string;
  variant?: CtaBannerVariant;
}

export const CtaBanner = ({
  actions = null,
  description = "Here's some supporting text that runs long and is meant to break onto multiple lines. I think it looks really nice.",
  heading = 'This is a CTA banner',
  variant = 'inverse',
}: CtaBannerProps): TemplateResult => {
  return html`
    <section class="cta-banner cta-banner--${variant}">
      <div class="cta-banner__content">
        <h2 class="cta-banner__heading">${heading}</h2>
        <p class="cta-banner__description">${description}</p>
      </div>
      ${actions
        ? html`<div class="cta-banner__action">${actions}</div>`
        : nothing}
    </section>
  `;
};
