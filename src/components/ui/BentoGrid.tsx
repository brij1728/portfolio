import { BackgroundGradientAnimation } from './GradientBg';
import { GlobeDemo } from './GridGlobe';
import React from 'react';
import { cn } from '@/utils/cn';

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className,
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: React.ReactNode;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id: number;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}) => {
  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className,
      )}
      style={{
        background: 'rgba(4,7, 29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className={`${id === 6} && flex justify-center h-full`}>
        <div className='h-full w-full absolute'>
          {img && (
            <img
              src={img}
              alt={typeof title === 'string' ? title : 'Image'}
              className={cn(imgClassName, 'object-cover', 'object-center')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={typeof title === 'string' ? title : 'Image'}
              className='object-cover object-center w-full h-full'
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className='absolute z-50 flex items-center justify-center text-white font-bold' />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10',
          )}
        >
          <div className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base dark:text-neutral-300'>
            {description}
          </div>
          <div
            className={cn(
              'font-sans font-bold text-lg lg:text-3xl max-w-96 z-10',
              titleClassName,
            )}
          >
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
              <div className='flex flex-col gap-3 lg:gap-8'>
                {['React', 'Next.js', 'TailwindCSS', 'TypeScript'].map(item => (
                  <span
                    key={item.id}
                    className='py-2 lg:py-4 lg:px-3 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                  >
                    {item}
                  </span>
                ))}
                <span className='py-4 px-3 rounded-lg text-center bg-[#10132E]'></span>
              </div>
              <div className='flex flex-col gap-3 lg:gap-8'>
                {['React', 'Next.js', 'TailwindCSS', 'TypeScript'].map(item => (
                  <span
                    key={item.id}
                    className='py-2 lg:py-4 lg:px-3 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                  >
                    {item}
                  </span>
                ))}
                <span className='py-4 px-3 rounded-lg text-center bg-[#10132E]'></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
