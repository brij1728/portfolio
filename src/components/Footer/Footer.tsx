import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';
import { MagicButton } from '../ui';
import React from 'react';
import { socialMedia } from '../../../data';

export const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10' id='contact'>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital
          presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center '>
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <Link href='mailto:bk10895@gmail.com'>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </Link>
      </div>
      <div className='flex mt-16 md:flex-row flex-col items-center justify-between gap-2'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2024 Brijesh
        </p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map(profile => (
            <div
              key={profile.id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center backfrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
            >
              <Link
                href={profile.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={profile.img}
                  alt={profile.name}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
