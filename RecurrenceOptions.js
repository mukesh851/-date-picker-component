import React from 'react';

const RecurrenceOptions = ({ pattern, setPattern }) => {
  const options = ['daily', 'weekly', 'monthly', 'yearly'];

  return (
    <div className="flex justify-between mb-4">
      {options.map(option => (
        <button 
          key={option} 
          onClick={() => setPattern(option)} 
          className={`px-4 py-2 rounded ${pattern === option ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default RecurrenceOptions;
