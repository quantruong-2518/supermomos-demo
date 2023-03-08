import React from 'react';
import Image from 'next/image';
import {
  ArrowUpTrayIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { FieldValues, UseFormReturn } from 'react-hook-form';

import { banners } from './banners.data';
import { DateInput, NumberInput, TextInput } from '@/components';

function AttendanceInfo({ form }: { form: UseFormReturn<FieldValues, any> }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = form;

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 md:gap-4 md:flex-row">
        <div className="flex flex-col gap-2 md:flex-1 ">
          <div className="flex flex-col gap-4" id="time">
            <TextInput
              register={register}
              placeholder="Enter the event's name"
              modelName="title"
            />
            <span className="text-red-300">{errors?.root?.message}</span>
            <DateInput register={register} modelName="startAt" />
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              <TextInput register={register} placeholder="" modelName="venue" />
            </div>
            <div className="flex gap-3 justify-between">
              <div className="flex flex-grow  items-center gap-2">
                <UsersIcon className="h-5 w-5" />
                <NumberInput
                  register={register}
                  placeholder="Max capacity"
                  modelName="capacity"
                />
              </div>
              <div className="flex flex-grow items-center gap-2">
                <CurrencyDollarIcon className="h-5 w-5" />
                <NumberInput
                  register={register}
                  placeholder="Cost per person"
                  modelName="price"
                  isRequired={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-[1] border-dotted gap-2 border-2 justify-center h-[30vh] md:h-[20vh] aspect-video rounded-md shadow items-center">
          <ArrowUpTrayIcon className="h-5 w-5" />

          {/* TODO: MOVE TO COMPONENTS  */}
          {/* The button to open modal */}
          <label htmlFor="my-modal">Add a banner</label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Choose a banner</h3>
              <div className="grid gap-2 grid-cols-3">
                {banners.map((banner: string, index: number) => {
                  return (
                    <Image
                      objectFit={'cover'}
                      width={200}
                      height={200}
                      key={index}
                      src={banner}
                      alt={`banner-${index}`}
                    />
                  );
                })}
              </div>
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Save
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 flex-col">
        <label htmlFor="desc">
          <strong>Description</strong>
        </label>

        <textarea
          id="description"
          {...register('description', { required: true })}
          className="p-4 border rounded-md"
          placeholder="Description of your event.."
          cols={20}
          rows={5}
        ></textarea>
      </div>
    </section>
  );
}

export default AttendanceInfo;
