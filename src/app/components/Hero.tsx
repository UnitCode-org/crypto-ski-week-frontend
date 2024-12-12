import React from 'react';
import heroImg1 from '../../../public/hero/1.jpg';
import heroImg2 from '../../../public/hero/2.png';
import heroImg3 from '../../../public/hero/3.jpg';
import heroImg4 from '../../../public/hero/4.png';
import heroImg5 from '../../../public/hero/5.png';
import heroImg6 from '../../../public/hero/6.png';
import heroImg7 from '../../../public/hero/7.jpg';
import FadeIn from './FadeIn';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

function Hero() {
  const images1 = [
    {
      image: heroImg1,
    },
    {
      image: heroImg2,
    },
    {
      image: heroImg3,
    },
  ];
  const images2 = [
    {
      image: heroImg4,
    },
    {
      image: heroImg5,
    },
    {
      image: heroImg6,
    },
    {
      image: heroImg7,
    },
  ];

  return (
    <main className='flex gap-20 items-center justify-between overflow-hidden'>
      <div className='mb-28'>
        <FadeIn>
          <h1 className='text-6xl font-bold tracking-tight'>Crypto Ski Week</h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className='text-gray-1 text-lg mt-4'>
            An annual event for top blockchain founders, investors, and thought leaders, hosted by Unit Network.
          </p>
        </FadeIn>
      </div>
      <FadeIn
        delay={0.2}
        className='grid grid-cols-2 gap-4 items-center shrink-0 max-h-[calc(100vh-112px)] fade-to-white'
      >
          <InfiniteMovingCards items={images1} direction='up' speed='slow' />
          <InfiniteMovingCards items={images2} direction='down' speed='normal' />
      </FadeIn>
    </main>
  );
}

export default Hero;
