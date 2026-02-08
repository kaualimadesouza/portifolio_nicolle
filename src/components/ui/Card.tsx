import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div 
      className={`rounded-4xl bg-[#F7F7F9] dark:bg-zinc-900 p-6 transition-colors duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card;
export { Card };
