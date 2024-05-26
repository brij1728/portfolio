import { BentoGrid, BentoGridItem } from '../ui';

import React from 'react';
import { gridItems } from '../../../data';

export const Grid = () => {
  return (
    <section>
      <BentoGrid>
        {gridItems.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            icon={item.title}
            id={index}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
