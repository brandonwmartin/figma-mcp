import { html, TemplateResult } from 'lit';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'large' | 'default';
export type ButtonIconPosition = 'before' | 'after';

export interface ButtonProps {
  disabled?: boolean;
  icon?: string;
  iconPosition?: ButtonIconPosition;
  label?: string;
  onClick?: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const Button = ({
  disabled = false,
  icon,
  iconPosition = 'before',
  label = 'Button',
  onClick,
  size = 'large',
  variant = 'primary',
}: ButtonProps): TemplateResult => {
  const classes = ['btn', `btn--${variant}`, `btn--${size}`].join(' ');
  const iconNode = icon ? html`<span class="btn__icon" aria-hidden="true">${icon}</span>` : '';

  return html`
    <button class=${classes} ?disabled=${disabled} @click=${onClick}>
      ${iconPosition === 'before' ? iconNode : ''}
      <span class="btn__label">${label}</span>
      ${iconPosition === 'after' ? iconNode : ''}
    </button>
  `;
};
