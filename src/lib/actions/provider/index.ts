'use server';

import { z } from 'zod';
import { createLimitDeposit } from '@/lib/data/deposit.api';

export const createExclusionProvider = async (prevState: any, formData: FormData) => {
  console.log('formData', formData);

  const FormSchema = z.object({
    providers: z.array(z.string()).
      min(1, 'Por favor selecciona al menos un proveedor de juego.'),
    timeType: z.coerce.number(),
    startDate: z.string().
      transform((str) => new Date(str)).
      refine((date) => {
        return !(formData.get('timeType') === '1' && !date);
      }, 'Si seleccionaste como periodo de tiempo "Temporal hasta" se require seleccionar una fecha.').
      refine((date) => {
        if (formData.get('timeType') === '1') {
          const today = new Date();
          return date >= today;
        }
        return true;
      }, 'La fecha seleccionada debe ser mayor o igual a la de hoy').optional(),
    reason: z.string().
      min(8, 'Mínimo de caracteres alcanzado (8).').
      max(255, 'Máximo de caracteres alcanzado (255).'),
  });

  const validations = FormSchema.safeParse({
    providers: formData.getAll('providers'),
    timeType: formData.get('timeType'),
    startDate: formData.get('startDate'),
    reason: formData.get('reason'),
  });

  return validate(validations, 'La solicitud fue creada exitosamente.');
};

export const createAutoLimitDeposit = async (prevState: any, formData: FormData) => {
  console.log('formData', formData);

  const amount = formData.get('amount') ? parseInt(`${formData.get('amount')}`.substring(1).replace(',', '')) : undefined;
  const dayFD = formData.get('limitByDay') ? parseInt(`${formData.get('limitByDay')}`.substring(1).replace(',', '')) : undefined;
  const weekFD = formData.get('limitByWeek') ? parseInt(`${formData.get('limitByWeek')}`.substring(1).replace(',', '')) : undefined;
  const monthFD = formData.get('limitByMonth') ? parseInt(`${formData.get('limitByMonth')}`.substring(1).replace(',', '')) : undefined;

  const FormSchema = z.object({
    amount: z.string().
      transform((str) => parseInt(str.substring(1).replace(',', ''))).
      refine((x) => {
        return `${x}`.length >= 4 && `${x}`.length <= 9;
      }, 'La cantidad de dígitos debe estar entre 4 a 9.'),
    limitByDay: z.string().
      transform((str) => str ? parseInt(str.substring(1).replace(',', '')) : '').
      refine(() => {
        return !!dayFD || !!weekFD || !!monthFD;
      }, 'Por favor, ingrese el monto de al menos uno de los tres tipos de limite.').
      refine((day) => {
        if (weekFD && day)
          return day < weekFD;
        return true;
      }, 'El monto diario deber ser menor que el monto semanal.').
      refine((day) => {
        if (monthFD && day)
          return day < monthFD;
        return true;
      }, 'El monto diario deber ser menor que el monto mensual.').optional(),
    limitByWeek: z.string().
      transform((str) => str ? parseInt(str.substring(1).replace(',', '')) : '').
      refine((week) => {
        if (dayFD && week)
          return week > dayFD;
        return true;
      }, 'El monto semanal deber ser mayor que el monto diario.').
      refine((week) => {
        if (monthFD && week)
          return week < monthFD;
        return true;
      }, 'El monto semanal deber ser menor que el monto mensual.').optional(),
    limitByMonth: z.string().
      transform((str) => str ? parseInt(str.substring(1).replace(',', '')) : '').
      refine((month) => {
        if (dayFD && month)
          return month > dayFD;
        return true;
      }, 'El monto mensual deber ser mayor que el monto diario.').
      refine((month) => {
        if (weekFD && month)
          return month > weekFD;
        return true;
      }, 'El monto mensual deber ser mayor que el monto semanal.').optional(),
    startDate: z.string().
      transform((str) => new Date(str)).
      refine((date) => {
        const today = new Date();
        return date >= today;
      }, 'La fecha seleccionada debe ser mayor o igual a la de hoy').
      refine((date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
      }, 'Sábado y Domingo son dias no permitidos para realizar la operación.'),
    reason: z.string().
      min(8, 'Mínimo de caracteres alcanzado (8).').
      max(255, 'Máximo de caracteres alcanzado (255).').optional(),
  }).omit({ reason: true });

  const validations = FormSchema.safeParse({
    amount: formData.get('amount'),
    limitByDay: formData.get('limitByDay'),
    limitByWeek: formData.get('limitByWeek'),
    limitByMonth: formData.get('limitByMonth'),
    startDate: formData.get('startDate'),
    reason: formData.get('reason'),
  });

  const valid = validate(validations, 'El limite fue creado exitosamente.');
  if (valid.hasErrors?.startsWith('false')) {
    const data = {
      'dailyAmount': dayFD || 0,
      'weeklyAmount': weekFD || 0,
      'monthlyAmount': monthFD || 0,
      'minimumAmount': amount,
    };
    return await createLimitDeposit(data).then((response) => {
      if (response?.error) {
        return {
          hasErrors: `true_${Date.now()}`,
          message: 'Ocurrió un problema técnico, no fue posible crear el limite de deposito.',
          details: response?.message,
        };
      }
      return valid;
    });
  }
  return valid;
};

const validate = (validations, success: string) => {
  if (!validations.success) {
    const errors = validations.error.flatten().fieldErrors;
    console.log(errors);
    const error = errors[Object.keys(errors)[0]] || [];
    return {
      hasErrors: `true_${Date.now()}`,
      message: error.join(''),
      resetForm: 'false',
    };
  }

  return {
    hasErrors: `false_${Date.now()}`,
    message: success,
    resetForm: `true_${Date.now()}`,
  };
};