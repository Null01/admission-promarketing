import React from 'react';

interface RadioButtonInputProps {
  name: string;
  required?: boolean;
  label: string;
  value: string | number;
  isChecked?: boolean; // Optional initial checked state
  onChange?: (event) => void;
}

export const InputRadioButton: React.FC<RadioButtonInputProps> = ({
  value,
  label,
  name,
  required = false,
}) => {
  return (
    <div className="text-sm inline-flex items-center">
      <label className="relative flex items-center p-2 rounded-full cursor-pointer">
        <input type="radio"
               name={name}
               value={value}
               required={required}
               className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border text-[var(--default-input-fill)] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[var(--default-input-fill)] checked:before:bg-[var(--default-input-fill)] hover:before:opacity-10"/>
        <span
          className="absolute transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[var(--default-input-fill)] peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
      </label>
      <label className="mt-px cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
};

export default InputRadioButton;