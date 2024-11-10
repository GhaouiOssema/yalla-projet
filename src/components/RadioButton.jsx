import React from 'react';

const RadioButton = ({ label, icon, value, selectedValue, onChange }) => {
  const isSelected = value === selectedValue;

  return (
    <label
      className={`flex items-center justify-between p-4 rounded-lg border ${isSelected ? 'border-yellow-500' : 'border-gray-200 dark:border-gray-800'} bg-white dark:bg-gray-950 hover:bg-gray-100 hover:text-gray-900`}
      onClick={() => onChange(value)}
    >
      {icon}
      {label}
      <input
        type="radio"
        className="peer sr-only"
        id={value}
        name="paymentMethod"
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
      />
    </label>
  );
};

export default RadioButton;
