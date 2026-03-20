import { html, TemplateResult } from 'lit';
import './CardSlider.css';
import { Card, CardProps } from '../Card/Card';

export interface CardSliderProps {
  cards?: CardProps[];
}

const scrollByCard = (button: HTMLElement, direction: 'prev' | 'next'): void => {
  const track = button.closest('.card-slider')?.querySelector('.card-slider__track') as HTMLElement | null;
  if (!track) return;
  const item = track.querySelector('.card-slider__item') as HTMLElement | null;
  const cardWidth = item ? item.offsetWidth : 0;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  track.scrollBy({ left: direction === 'next' ? cardWidth + gap : -(cardWidth + gap), behavior: 'smooth' });
};

export const CardSlider = ({ cards = [] }: CardSliderProps): TemplateResult => {
  return html`
    <div class="card-slider">
      <div class="card-slider__controls">
        <button
          class="card-slider__nav"
          aria-label="Previous"
          @click=${(e: Event) => scrollByCard(e.currentTarget as HTMLElement, 'prev')}
        >
          <span class="card-slider__nav-icon" aria-hidden="true">arrow_back</span>
        </button>
        <button
          class="card-slider__nav"
          aria-label="Next"
          @click=${(e: Event) => scrollByCard(e.currentTarget as HTMLElement, 'next')}
        >
          <span class="card-slider__nav-icon" aria-hidden="true">arrow_forward</span>
        </button>
      </div>
      <div class="card-slider__track">
        ${cards.map((card) => html`<div class="card-slider__item">${Card(card)}</div>`)}
      </div>
    </div>
  `;
};
