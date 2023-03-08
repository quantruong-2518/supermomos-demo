import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

export const NumberInput = ({
  register,
  placeholder,
  isRequired = true,
  modelName,
}: {
  register: UseFormRegister<FieldValues>;
  placeholder: string;
  isRequired?: boolean;
  modelName: string;
}) => {
  return (
    <input
      {...register(modelName, { required: isRequired || true })}
      className="px-4 py-2 rounded-md"
      type="number"
      placeholder={placeholder}
    />
  );
};
