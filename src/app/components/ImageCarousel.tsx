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
import carouselImg1 from '../../../public/carousel/1.png';
import carouselImg2 from '../../../public/carousel/2.png';
import carouselImg3 from '../../../public/carousel/3.png';
import carouselImg4 from '../../../public/carousel/4.png';
import carouselImg5 from '../../../public/carousel/5.png';
import carouselImg6 from '../../../public/carousel/6.png';
import carouselImg7 from '../../../public/carousel/7.png';
import carouselImg8 from '../../../public/carousel/8.png';
import carouselImg9 from '../../../public/carousel/9.png';
import carouselImg10 from '../../../public/carousel/10.png';
import carouselImg11 from '../../../public/carousel/11.png';
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
    { title: 'Crypto Ski Week @ StMoritz', img: carouselImg1 },
    { title: 'Crypto Ski Week @ StMoritz', img: carouselImg2 },
    { title: 'Crypto Ski Week @ StMoritz', img: carouselImg3 },
    { title: 'Crypto Ski Week @ StMoritz', img: carouselImg4 },
    { title: 'Crypto Ski Week @ StMoritz', img: carouselImg5 },
    { title: 'Crypto Ski Week @ StMoritz', img: carouselImg6 },
    { title: 'Crypto Ski Week @ StMoritz', img: carouselImg7 },
    { title: 'Crypto Ski Week @ StMoritz', img: carouselImg8 },
    { title: 'Crypto Ski Week @ StMoritz', img: carouselImg9 },
    { title: 'Crypto Ski Week @ StMoritz', img: carouselImg10 },
    { title: 'Crypto Ski Week @ StMoritz', img: carouselImg11 },
  ];

  return (
    <>
      <Carousel className='md:w-full h-full -mx-4 md:mx-0' opts={{ watchDrag: false }} setApi={setApi}>
        <CarouselContent>
          {carouselImages.map((item, index) => (
            <CarouselItem key={index}>
              <div className='relative w-full h-[14rem] md:h-[32rem] md:rounded-3xl overflow-clip brightness-[85%]'>
                <Image src={item.img} alt={item.title} fill className='object-cover' />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-4 md:left-8' />
        <CarouselNext className='right-4 md:right-8' />
        <div className='absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center w-full'>
          <p className='text-white md:text-2xl text-center'>{carouselImages[current].title}</p>
          <div className='items-center justify-center gap-3 mt-3 hidden md:flex'>
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
      <div className='items-center gap-1.5 mt-2 flex md:hidden justify-center'>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index}>
            <div
              className={cn(
                'min-w-1.5 min-h-1.5 max-w-1.5 max-h-1.5 rounded-full',
                index === current ? 'bg-primary opacity-80' : 'bg-gray-4 backdrop-blur-sm'
              )}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageCarousel;
