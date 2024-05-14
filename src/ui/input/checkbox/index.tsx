import React from 'react';

interface CheckboxInputProps {
  name: string;
  value: number | string;
  label: string;
  isChecked?: boolean;
  onChange?: (isChecked: boolean, value: number | string) => void;
}

const InputCheckbox: React.FC<CheckboxInputProps> = ({
  name,
  value,
  label,
  isChecked = false,
  onChange,
}) => {

  const handleCheckboxChange = () => {
    onChange && onChange(!isChecked, value);
  };

  return (
    <div className="text-sm inline-flex items-center">
      <label className="relative flex items-center p-2 rounded-full cursor-pointer" htmlFor="check">
        <input type="checkbox"
               name={name}
               value={value}
               checked={isChecked}
               className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[var(--default-input-fill)] before:opacity-0 before:transition-opacity checked:bg-[var(--default-input-fill)] checked:bg-[var(--default-input-fill)] checked:before:bg-[var(--default-input-fill)] hover:before:opacity-10"
               onChange={handleCheckboxChange}/>
        <span
          className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
               stroke="currentColor" strokeWidth="1">
            <path fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"></path>
          </svg>
        </span>
      </label>
      <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
        {label}
      </label>
    </div>
  );
};

export default InputCheckbox;