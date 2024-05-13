import React from 'react';
import Button from '@/ui/button';
import InputText from '@/ui/input/text';

const CreateLimitDeposit: React.FC = ({}) => {

  return (
    <React.Fragment>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col p-2">
          <h3 className={'font-roboto uppercase pb-4'}>DEFINA SUS LÍMITES DE depósito</h3>
        </div>
        <div className="flex flex-col md:items-center p-2">
          <form className="space-y-4 justify-center items-center md:w-[389px]">
            <InputText type="text" placeholder="Enter your username"/>
            <InputText type="email" placeholder="Enter your email"/>
            <InputText type="password" placeholder="Enter your password"/>
            <InputText type="password" placeholder="Confirm your password"/>
          </form>
        </div>
        <div className="flex justify-center items-center p-2">
          <Button title={'guardar'} variant={'secondary'}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateLimitDeposit;