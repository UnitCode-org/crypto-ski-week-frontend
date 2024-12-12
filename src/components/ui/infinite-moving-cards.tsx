'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

export const InfiniteMovingCards = ({
  items,
  direction = 'up',
  speed = 'fast',
  pauseOnHover = false,
  className,
}: {
  items: {
    image: string | StaticImageData;
  }[];
  direction?: 'up' | 'down';
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
    const scrollerHeight = containerRef.current.offsetHeight;

    // Duplicate items until the scroller's content exceeds twice the container height
    let totalHeight = scrollerRef.current.scrollHeight;
    while (totalHeight < scrollerHeight * 2) {
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      totalHeight = scrollerRef.current.scrollHeight;
    }

    getDirection();
    getSpeed();
    setStart(true);
  }
}

const getDirection = () => {
  if (containerRef.current) {
    if (direction === 'up') {
      containerRef.current.style.setProperty('--animation-translate-start', '0');
      containerRef.current.style.setProperty('--animation-translate-end', '-50%');
    } else {
      containerRef.current.style.setProperty('--animation-translate-start', '-50%');
      containerRef.current.style.setProperty('--animation-translate-end', '0');
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
    <div ref={containerRef} className={cn('relative z-20 max-h-screen overflow-hidden', className)}>
      <div
        ref={scrollerRef}
        className={cn(
          'flex flex-col gap-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        style={{
          animation: 'scroll var(--animation-duration, 40s) linear infinite',
          willChange: 'transform',
        }}
      >
        {/* First set of items */}
        {items.map((item, idx) => (
          <div key={idx} className='w-56 h-72 relative rounded-2xl overflow-clip'>
            <Image src={item.image} alt={'Hero Image ' + idx} fill className='object-cover' />
          </div>
        ))}
        {/* Duplicate set of items */}
        {items.map((item, idx) => (
          <div key={'duplicate' + idx} className='w-56 h-72 relative rounded-2xl overflow-clip'>
            <Image src={item.image} alt={'Hero Image ' + idx} fill className='object-cover' />
          </div>
        ))}
      </div>
    </div>
  );
};
