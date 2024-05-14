import React from 'react';
import { NumericFormat } from 'react-number-format';

interface TextInputProps {
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: React.FC<TextInputProps> = ({ ...props }) => {

  return (
    <div className="flex flex-col w-full">
      <input
        {...props}
        className="text-xs rounded-md border border-[var(--default-input-border)] border-opacity-100 px-3 py-2 hover:border-[var(--default-input-border)] focus:border-[var(--default-input-border)] focus:outline-none shadow-sm w-full"
      />
    </div>
  );
};

interface CurrencyInputProps {
  name: string;
  placeholder?: string;
  required?: boolean;
  minDefaultValue?: number;
  minDigits?: number;
  maxDigits?: number;
  prefix?: string;
  thousandSeparator?: boolean;
}

export const InputCurrency: React.FC<CurrencyInputProps> = ({
  minDefaultValue,
  minDigits,
  maxDigits,
  prefix = '$',
  thousandSeparator = true,
  onChange,
  required = false,
  ...props
}) => {

  const handleInputChange = (values: { formattedValue: string }) => {
    onChange && onChange(values.formattedValue ? parseFloat(values.formattedValue.replace(/[^\d]/g, '')) : 0);
  };

  return (
    <div className="flex flex-col w-full">
      <NumericFormat
        {...props}
        className="text-xs rounded-md border border-[var(--default-input-border)] border-opacity-100 px-3 py-2 hover:border-[var(--default-input-border)] focus:border-[var(--default-input-border)] focus:outline-none shadow-sm w-full"
        required={required}
        defaultValue={minDefaultValue}
        isAllowed={(values) => {
          const { floatValue, value } = values;
          const digits = (minDigits && maxDigits) ? (value.length >= minDigits && value.length <= maxDigits) : true;
          const minValue = (minDefaultValue) ? (floatValue >= minDefaultValue) : true;
          return digits && minValue;
        }}
        allowLeadingZeros={false}
        allowNegative={false}
        thousandSeparator={thousandSeparator}
        prefix={prefix}
        decimalScale={0}
        onValueChange={handleInputChange}
      />
    </div>
  );
};
