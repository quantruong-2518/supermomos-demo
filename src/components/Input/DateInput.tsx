import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

export const DateInput = ({
  register,
  placeholder,
  isRequired = true,
  modelName,
}: {
  register: UseFormRegister<FieldValues>;
  placeholder?: string;
  isRequired?: boolean;
  modelName: string;
}) => {
  return (
    <input
      {...register(modelName, { required: isRequired || true })}
      className="bg-white w-full p-2 rounded-md"
      type="datetime-local"
      placeholder={placeholder}
    />
  );
};
