import React from 'react';
import { useForm } from 'react-hook-form';

import AttendanceInfo from './components/AttendanceInfo';
import Setting from './components/Setting';
import { IEvent } from '@/models';

const Event = () => {
  const form = useForm();
  const { handleSubmit } = form;

  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col  md:w-1/2 gap-6 max-w-full"
    >
      <AttendanceInfo form={form} />
      <Setting form={form} />

      <button className="bg-secondary text-primary w-full h-9" type="submit">
        CREATE SOCIAL
      </button>
    </form>
  );
};

export default Event;
