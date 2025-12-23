import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-gray-50 rounded-4xl p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export default Card;
export { Card };
