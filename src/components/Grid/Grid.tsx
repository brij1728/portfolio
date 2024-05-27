import { BentoGrid, BentoGridItem } from '../ui';

import React from 'react';
import { gridItems } from '../../../data';

export const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid className='w-full py-20'>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              key={id}
              title={title}
              description={description}
              id={id}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
};
