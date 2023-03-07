import React, { useState } from 'react';

import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ArrowUpTrayIcon,
} from '@heroicons/react/24/outline';

import { WithContext as ReactTags } from 'react-tag-input';

import Image from 'next/image';

const Event = () => {
  const banners = [
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_2.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_3.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_4.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_5.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_6.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_7.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_8.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg',
  ];

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

  const handleDrag = (tagtag: any, currPos: any, newPos: any) => {
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
    <form className="flex flex-col  md:w-1/2 gap-6">
      <section className="flex flex-col gap-6 md:gap-4 md:flex-row">
        <div className="flex flex-col gap-2 md:flex-1 ">
          <label htmlFor="desc">
            <strong>Setting</strong>
          </label>

          <div className="flex flex-col gap-4" id="time">
            {/* ?? Name  */}
            <input
              className="px-4 py-2 rounded-md"
              type="text"
              placeholder="Untitle Event"
            />
            {/* ?? Datepickers  */}
            <div className="flex gap-3 justify-between">
              <div className="flex flex-grow items-center gap-2">
                {/* <CalendarDaysIcon className="h-5 w-5" /> */}
                <input
                  className="bg-white w-full p-2 rounded-md"
                  type="date"
                  placeholder="Date"
                />
              </div>
              <div className="flex flex-grow items-center gap-2">
                {/* <ClockIcon className="h-5 w-5" /> */}
                <input
                  className="bg-white w-full p-2 rounded-md"
                  type="time"
                  placeholder="Time"
                />
              </div>
            </div>
            {/* Location  */}
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              <input
                className="bg-white w-full p-2 rounded-md"
                type="text"
                placeholder="Location"
              />
            </div>
            {/* Capa & Cost  */}
            <div className="flex gap-3 justify-between">
              <div className="flex  items-center gap-2">
                <UsersIcon className="h-5 w-5" />
                <input
                  className="bg-white w-full p-2 rounded-md"
                  type="number"
                  placeholder="Capacity"
                />
              </div>
              <div className="flex items-center gap-2">
                <CurrencyDollarIcon className="h-5 w-5" />
                <input
                  className="bg-white w-full p-2 rounded-md"
                  type="number"
                  placeholder="Cost / person"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex  md:flex-[1] border-dotted gap-2 border-2 justify-center h-[30vh] rounded-md shadow items-center">
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
                    <Image objectFit={'cover'} width={200} height={200} key={index} src={banner} alt={`banner-${index}`} />
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
      </section>

      <section className="flex gap-2 flex-col">
        <label htmlFor="desc">
          <strong>Description</strong>
        </label>
        <textarea
          className="p-4 border rounded-md"
          placeholder="Description of your event.."
          id="desc"
          name=""
          cols={20}
          rows={5}
        ></textarea>
      </section>

      <section className="flex gap-2 flex-col">
        <label htmlFor="setting">
          <strong>Setting</strong>
        </label>

        <div
          className="flex flex-col gap-4 bg-white rounded-lg p-4"
          id="setting"
        >
          <div className="flex gap-2">
            <input type="checkbox" />
            <span>I want to approve attendees</span>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="privacy">
              <strong>Privacy</strong>
            </label>

            <div id="privacy" className="flex gap-4">
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <span>Public</span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <span>Curated Audience</span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <span>Community Only</span>
              </div>
            </div>
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
            />
          </div>
        </div>
      </section>
    </form>
  );
};

export default Event;
