import { html, TemplateResult } from 'lit';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'large' | 'default';

export interface ButtonProps {
  disabled?: boolean;
  icon?: string;
  label?: string;
  onClick?: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const Button = ({
  disabled = false,
  icon,
  label = 'Button',
  onClick,
  size = 'large',
  variant = 'primary',
}: ButtonProps): TemplateResult => {
  const classes = ['btn', `btn--${variant}`, `btn--${size}`].join(' ');

  return html`
    <button class=${classes} ?disabled=${disabled} @click=${onClick}>
      ${icon ? html`<span class="btn__icon" aria-hidden="true">${icon}</span>` : ''}
      <span class="btn__label">${label}</span>
    </button>
  `;
};
