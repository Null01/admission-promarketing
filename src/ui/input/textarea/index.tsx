import React from 'react';

interface TextAreaInputProps {
  name: string;
  required?: boolean;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
}

const InputTextArea: React.FC<TextAreaInputProps> = ({ ...props }) => {
  return (
    <div className="flex flex-col w-full">
      <textarea
        {...props}
        className="text-xs rounded-md border border-[var(--default-input-border)] border-opacity-100 px-3 py-2 hover:border-[var(--default-input-border)] focus:border-[var(--default-input-border)] focus:outline-none shadow-sm w-full"
      />
    </div>
  );
};

export default InputTextArea;