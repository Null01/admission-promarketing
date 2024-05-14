'use client';

import React from 'react';
import Button from '@/ui/button';
import { InputCurrency } from '@/ui/input/text';
import InputDate from '@/ui/input/date';
import InputTextArea from '@/ui/input/textarea';
import Form from '@/ui/form';
import { createAutoLimitDeposit } from '@/lib/actions/provider';

const CreateLimitDeposit: React.FC = ({}) => {

  return (
    <React.Fragment>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col">
          <h3 className={'font-roboto uppercase pb-2'}>DEFINA SUS LÍMITES DE depósito</h3>
        </div>
        <div className="flex flex-col md:items-center pt-2">
          <Form className={'space-y-4 justify-center items-center md:w-[389px]'} action={createAutoLimitDeposit}>
            <InputCurrency name={'amount'}
                           placeholder="Monto minimo de deposito"
                           minDefaultValue={5000}
                           minDigits={4}
                           maxDigits={9}
                           required={true}/>
            <InputCurrency name={'limitByDay'}
                           placeholder="Diario (De 00:00 hasta 24:00 hrs)"/>
            <InputCurrency name={'limitByWeek'}
                           placeholder="Semanal (De lunes a domingo)"/>
            <InputCurrency name={'limitByMonth'}
                           placeholder="Mensual (De 1 al 30)"/>
            <InputDate name={'startDate'}
                       placeholder={'Fecha en la que empieza a regir la solicitud.'}
                       filterType={['all_dates_after_today', 'all_days_except']}
                       required={true}/>
            <InputTextArea name={'reason'}
                           minLength={8}
                           maxLength={255}
                           placeholder={'Por favor, ingrese el motivo por el que desea crear el limite de deposito.'}/>
            <Button type={'submit'} title={'guardar'} variant={'secondary'}/>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateLimitDeposit;