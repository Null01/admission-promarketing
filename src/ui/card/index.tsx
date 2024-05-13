import React from 'react';

interface CardProps {
  title?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div
      className="bg-[#e0e4ef] bg-opacity-30 rounded-lg shadow-md p-4 w-full"
      style={{ backgroundColor: 'rgba(224, 228, 239, 0.3)' }}
    >
      {title && <h3 className="text-lg font-medium mb-2">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;