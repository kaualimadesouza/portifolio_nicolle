import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-4xl bg-[#F7F7F9] p-6 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
export { Card };
