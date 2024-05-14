'use client';

import React from 'react';
import DatePicker from 'react-datepicker';
import { setDefaultLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { filtersFromDate } from '@/lib/utilis/validations';

setDefaultLocale('es');

interface DateInputProps {
  name: string;
  required?: boolean;
  placeholder?: string;
  onChange?: (date: Date | null) => void;
  filterType?: string | string[];
}

const InputDate: React.FC<DateInputProps> = ({ name, placeholder, required, filterType }) => {
  const [selectedDate, setSelectedDate] = React.useState(undefined);

  const filterBy = (date: Date) => {
    if (filterType) {
      const type = typeof filterType;
      switch (type) {
        case 'string':
          return filtersFromDate[filterType](date);
        case 'object':
          if (Array.isArray(filterType)) {
            for (let i = 0; i < filterType.length; i++) {
              const key = filterType[i];
              const filtered = filtersFromDate[key](date);
              if (!filtered)
                return false;
            }
          }
          break;
        default:
          return true;
      }
    }
    return true;
  };

  return (
    <div className="flex flex-col w-full">
      <DatePicker
        name={name}
        placeholderText={placeholder}
        locale={'es'}
        showIcon
        isClearable
        className={'text-xs rounded-md border border-[var(--default-input-border)] border-opacity-100 px-3 py-2 hover:border-[var(--default-input-border)] focus:border-[var(--default-input-border)] focus:outline-none shadow-sm w-full'}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        filterDate={filterBy}
        required={required}
        dateFormat={'yyyy-MM-dd'}
      />
    </div>
  );
};

export default InputDate;