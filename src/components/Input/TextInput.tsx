import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

export const TextInput = ({
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
      {...register(modelName, { required: isRequired })}
      className="px-4 py-2 rounded-md"
      type="text"
      placeholder={placeholder}
    />
  );
};
