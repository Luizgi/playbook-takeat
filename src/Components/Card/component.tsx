import React from 'react';
import './style.css';

interface CardProps {
  title: string;
  children: React.ReactNode;
  borderColor?: string;
}

const Card: React.FC<CardProps> = ({ title, children, borderColor = 'border-gray-200' }) => {
  return (
    <div className="card">
      <h3 className="cardTitle">{title}</h3>
      {children}
    </div>
  );
};

export default Card;