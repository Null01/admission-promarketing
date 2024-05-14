'use client';

import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';

interface FormProps {
  className?: string;
  action: (prev: any, form: any) => {};
}

export const Form: React.FC<FormProps> = ({ className = '', action, children }) => {

  const initialFormState = {
    hasErrors: '',
    message: '',
    resetForm: '',
  };

  const reference = useRef<HTMLFormElement>(undefined);

  const [state, handleSubmitForm] = useFormState(action, initialFormState);

  useEffect(() => {
    if (state?.hasErrors.startsWith('true'))
      toast.error(`${state?.message}`);

    if (state?.hasErrors?.startsWith('false') && state?.message)
      toast.success(`${state?.message}`);
  }, [state?.hasErrors]);

  useEffect(() => {
    if (state?.resetForm?.startsWith('true_'))
      setTimeout(() => {
        reference?.current?.reset();
      }, 2000);
  }, [state?.resetForm]);

  return (
    <React.Fragment>
      <form className={`${className}`} action={handleSubmitForm} ref={reference}>
        {children}
      </form>
    </React.Fragment>
  );
};

export default Form;