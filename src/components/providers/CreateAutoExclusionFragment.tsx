'use client';

import React, { useState } from 'react';
import Card from '@/ui/card';
import Button from '@/ui/button';
import { CheckboxInput, RadioButtonInput } from '@/ui/input';
import Separator from '@/ui/separator';
import InputText from '@/ui/input/text';

const CreateAutoExclusionFragment: React.FC = ({}) => {

  return (
    <React.Fragment>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col p-2">
          <Card>
            <h3 className={'font-roboto uppercase'}>Autoexclusión PROVEEDORES</h3>
            <CheckboxInput label={'Todos'} onChange={() => {}}/>
            <Separator/>
          </Card>
        </div>
        <div className="flex flex-col p-2">
          <Card>
            <h3 className={'font-roboto uppercase'}>Por un período de tiempo</h3>
            <div className="flex items-center">
              <RadioButtonInput label={'Temporal'} name={'temp'} onChange={() => {}}/>
              <RadioButtonInput label={'Temporal2'} name={'temp2'} onChange={() => {}}/>
            </div>
            <InputText onChange={() => {}}/>
          </Card>
        </div>
        <div className="flex justify-center items-center p-2">
          <Button title={'enviar'} onClick={() => {}}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateAutoExclusionFragment;
