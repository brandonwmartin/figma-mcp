import { html, TemplateResult } from 'lit';
import { Card } from '../Card/Card';
import type { CardProps } from '../Card/Card';
import './CardGrid.css';

export interface CardGridProps {
  items?: CardProps[];
}

export const CardGrid = ({
  items = [],
}: CardGridProps = {}): TemplateResult => {
  return html`
    <div class="card-grid">
      ${items.map((item) => Card(item))}
    </div>
  `;
};
