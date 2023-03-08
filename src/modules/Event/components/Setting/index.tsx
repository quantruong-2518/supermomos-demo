import React, { useState } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { WithContext as ReactTags } from 'react-tag-input';

enum PrivacyOption {
  Public = 'Public',
  'Curated_Audience' = 'Curated Audience',
  'Community_Only' = 'Community Only',
}

function Setting({ form }: { form: UseFormReturn<FieldValues, any> }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = form;

  // ? Tag implementations

  const suggestions: Array<any> = [];
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  const delimiters = [KeyCodes.comma, KeyCodes.enter];
  const [tags, setTags] = useState([
    { id: 'Thailand', text: 'Thailand' },
    { id: 'India', text: 'India' },
    { id: 'Vietnam', text: 'Vietnam' },
    { id: 'Turkey', text: 'Turkey' },
  ]);
  const handleDelete = (i: any) => {
    setTags(tags.filter((tag, index) => index !== i));
  };
  const handleAddition = (tag: any) => {
    setTags([...tags, tag]);
  };

  // ? Privacy implementations

  const changePrivacy = (option: PrivacyOption) => {
    setValue('privacy', option);
  };

  const handleDrag = (tag: any, currPos: any, newPos: any) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index: any) => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  return (
    <section className="flex gap-2 flex-col">
      <label htmlFor="setting">
        <strong>Setting</strong>
      </label>

      <div className="flex flex-col gap-4 bg-white rounded-lg p-4" id="setting">
        <div className="flex gap-2 items-center">
          <input {...register('isManualApprove')} type="checkbox" />
          <span>I want to approve attendees</span>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="privacy">
            <strong>Privacy</strong>
          </label>

          <select
            {...(register('privacy'), { required: true })}
            className="select px-4 py-2 border border-gray-200 w-full max-w-xs"
            defaultValue={PrivacyOption.Public}
          >
            <option value={PrivacyOption.Public}>Public</option>
            <option value={PrivacyOption.Curated_Audience}>
              Curated Audience
            </option>
            <option value={PrivacyOption.Community_Only}>Community Only</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="tag">
            <strong>Tag your social</strong>
          </label>
          <span id="tag">
            Pick tags for our curation engine to work its magin
          </span>

          <ReactTags
            tags={tags}
            suggestions={suggestions}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            handleTagClick={handleTagClick}
            inputFieldPosition="bottom"
            autocomplete
            placeholder="Add or create new social tag"
          />
        </div>
      </div>
    </section>
  );
}

export default Setting;
