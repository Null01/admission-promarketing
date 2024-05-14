import React from 'react';
import Card from '@/ui/card';
import Button from '@/ui/button';
import SelectProvidersFragment from '@/components/providers/auto-exclusion/fragments/SelectProvidersFragment';
import { createExclusionProvider } from '@/lib/actions/provider';
import InputRadioButton from '@/ui/input/radio';
import InputDate from '@/ui/input/date';
import { TimePeriod } from '@/lib/constants';

import Form from '@/ui/form';
import InputTextArea from '@/ui/input/textarea';

const CheckAutoExclusionProviders = (props) => {

  return (
    <React.Fragment>
      <div className="flex flex-col h-screen">
        <Form action={createExclusionProvider}>
          <div className="flex flex-col">
            <SelectProvidersFragment {...props}/>
          </div>
          <div className="flex flex-col pt-3">
            <Card>
              <h3 className={'font-roboto uppercase'}>Por un período de tiempo</h3>
              <div className="flex items-center">
                <div className="flex gap-8">
                  {Object.keys(TimePeriod).map((key, it) => (
                    <React.Fragment key={it}>
                      <InputRadioButton name={'timeType'}
                                        label={TimePeriod[key].label}
                                        value={TimePeriod[key].id}
                                        required={true}/>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <InputDate name={'startDate'}
                         filterType={'all_dates_after_today'}/>
            </Card>
          </div>
          <div className="flex flex-col pt-3">
            <Card>
              <h3 className={'font-roboto uppercase'}>motivo de la solicitud</h3>
              <InputTextArea name={'reason'}
                             minLength={8}
                             maxLength={255}
                             placeholder={'Por favor, ingrese el motivo por el que desea crear la solicitud'}
                             required={true}/>
            </Card>
          </div>
          <div className="flex justify-center items-center pt-4">
            <Button type={'submit'} className={'max-w-[359px]'} title={'enviar'}/>
          </div>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default CheckAutoExclusionProviders;
