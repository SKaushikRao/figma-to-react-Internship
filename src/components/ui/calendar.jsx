import React from 'react';

export function Calendar({ value, onChange, className }) {
  return (
    <input 
      type="date" 
      value={value} 
      onChange={onChange} 
      className={`border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}
