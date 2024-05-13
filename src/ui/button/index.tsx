import React from 'react';

interface ButtonProps {
  title: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const ButtonUI: React.FC<ButtonProps> = ({ className, variant = 'primary', title, onClick }) => {

  const variants = {
    'primary': 'bg-[var(--default-button-primary-fill)] text-[var(--default-button-primary-text)]',
    'secondary': 'bg-[var(--default-button-secondary-fill)] text-[var(--default-button-secondary-text)]',
  };

  return (
    <button
      className={`${className} font-roboto ${variants[variant]} rounded-lg px-4 py-2 uppercase shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white w-full`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonUI;