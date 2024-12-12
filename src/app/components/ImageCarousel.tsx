'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from '@/components/ui/carousel';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import stMoritzImg from '../../../public/unit-st-moritz.png';
import { cn } from '@/lib/utils';

function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const carouselImages = [
    { title: 'Crypto Ski Week @ StMoritz', img: stMoritzImg },
    { title: 'Crypto Ski Week @ StMoritz', img: stMoritzImg },
    { title: 'Crypto Ski Week @ StMoritz', img: stMoritzImg },
    { title: 'Crypto Ski Week @ StMoritz', img: stMoritzImg },
    { title: 'Crypto Ski Week @ StMoritz', img: stMoritzImg },
  ];

  return (
    <Carousel className='w-full h-full' opts={{ watchDrag: false }} setApi={setApi}>
      <CarouselContent>
        {carouselImages.map((item, index) => (
          <CarouselItem key={index}>
            <div className='relative w-full h-[36rem] rounded-3xl overflow-clip'>
              <Image src={item.img} alt={item.title} fill className='object-cover' />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-8' />
      <CarouselNext className='right-8' />
      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center'>
        <p className='text-white text-2xl'>{carouselImages[current].title}</p>
        <div className='flex items-center gap-3 mt-3'>
          {Array.from({ length: count }).map((_, index) => (
            <div key={index}>
              <div
                className={cn(
                  'min-w-3 min-h-3 max-w-3 max-h-3 rounded-full',
                  index === current ? 'bg-white opacity-80' : 'bg-gray-4 backdrop-blur-sm'
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
