import React from 'react';
import { Card } from './Card';

interface ActionButtonProps {
  title?: string;
  description?: string[];
}

function ActionButton({ 
  title = "Create new reply with availability",
  description = ["Share availability to clipboard", "Share in New York (EST) time"]
}: ActionButtonProps) {
  return (
    <Card>
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded bg-indigo-500"></div>
          <input 
            type="text" 
            placeholder="Type something to get started..." 
            className="flex-1 text-gray-500 text-sm outline-none bg-transparent"
          />
        </div>
      </div>
      <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium mb-4 flex items-center justify-center gap-2 shadow-lg">
        <span>{title}</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div className="space-y-1 text-sm text-gray-600">
        {description.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
    </Card>
  );
}

export default ActionButton;
export { ActionButton };
