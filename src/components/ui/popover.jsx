import React, { useState } from 'react';

export function Popover({ children, trigger, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className={`absolute z-10 mt-2 p-4 bg-white rounded-lg shadow-lg ${className}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export function PopoverTrigger({ children }) {
  return children;
}

export function PopoverContent({ children }) {
  return children;
}
