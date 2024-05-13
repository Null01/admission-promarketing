import React from 'react';

interface TextInputProps {
  placeholder?: string;
  type?: string; // Optional input type (e.g., "text", "email", etc.)
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<TextInputProps> = ({ placeholder, type = 'text', onChange }) => {
  return (
    <div className="flex flex-col w-full">
      <input
        id="input"
        type={type}
        placeholder={placeholder}
        className="text-xs rounded-md border border-[var(--default-input-border)] border-opacity-100 px-3 py-2 hover:border-[var(--default-input-border)] focus:border-[var(--default-input-border)] focus:outline-none shadow-sm w-full"
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;