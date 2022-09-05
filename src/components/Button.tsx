import { MouseEventHandler } from 'react';

interface PropTypes {
  className?: string;
  category: 'primary' | 'secondary' | 'cancel' | 'cadastrar';
  color: string;
  label: string;
  type?: 'button' | 'submit';
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Archive: src/components/Button.tsx
 *
 * Description: Button component
 *
 * Date: 2022/07/20
 *
 * Author: Athos
 */

export const Button = ({
  className,
  label,
  type = 'button',
  onClick,
  category,
  color,
}: PropTypes) => {
  let buttonChoice = '';

  if (category === 'cancel') {
    buttonChoice = 'bg-x bg-no-repeat bg-[center_left_1rem] text-right';
  } else if (category === 'primary') {
    buttonChoice = `bg-save bg-no-repeat bg-[center_left_5px] text-right`;
  } else if (category === 'secondary') {
    buttonChoice = `bg-trash bg-no-repeat bg-[center_left_15px] text-right`;
  } else if (category === 'cadastrar') {
    buttonChoice = `bg-+ bg-no-repeat bg-[center_left_5px] text-right`;
  }

  return (
    <button
      className={`${buttonChoice} w-28 h-10 px-3 text-white text-btn-text rounded ${color} btn-${category} ${className}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
