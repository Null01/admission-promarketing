'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

interface ButtonProps {
  title: string;
  type: 'button' | 'reset' | 'submit';
  disable?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const ButtonUI: React.FC<ButtonProps> = ({ type, className, variant = 'primary', title, disable = false, onClick }) => {

  const { pending } = useFormStatus();

  const variants = {
    'primary': 'bg-[var(--default-button-primary-fill)] text-[var(--default-button-primary-text)]',
    'secondary': 'bg-[var(--default-button-secondary-fill)] text-[var(--default-button-secondary-text)]',
  };

  return (
    <button
      type={type}
      className={`${className} font-roboto ${variants[variant]} rounded-lg px-4 py-2 uppercase shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white w-full`}
      onClick={onClick}
      disabled={disable || pending}
    >
      {title}
    </button>
  );
};

export default ButtonUI;