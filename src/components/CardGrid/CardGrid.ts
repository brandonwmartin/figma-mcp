import { html, TemplateResult } from 'lit';
import './CardGrid.css';
import { Card, CardProps } from '../Card/Card';

export interface CardGridProps {
  cards?: CardProps[];
}

export const CardGrid = ({ cards = [] }: CardGridProps): TemplateResult => {
  return html`
    <div class="card-grid">
      ${cards.map((card) => html`${Card(card)}`)}
    </div>
  `;
};
