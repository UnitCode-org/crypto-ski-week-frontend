'use client';

import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const InfiniteMovingCardsHorizontal = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = false,
  className,
}: {
  items: {
    image: string | StaticImageData;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-3 w-max flex-nowrap',
          start && 'animate-scroll-horizontal ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <div key={idx} className='w-40 h-56 relative rounded-2xl overflow-clip'>
            <Image src={item.image} alt={'Hero Image ' + idx} fill className='object-cover' />
          </div>
        ))}
        {items.map((item, idx) => (
          <div key={'duplicate-' + idx} className='w-40 h-56 relative rounded-2xl overflow-clip'>
            <Image src={item.image} alt={'Hero Image ' + idx} fill className='object-cover' />
          </div>
        ))}
      </div>
    </div>
  );
};
