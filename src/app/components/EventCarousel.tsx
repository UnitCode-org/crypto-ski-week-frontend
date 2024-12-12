import { Card, Carousel } from '@/components/ui/apple-cards-carousel';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import stMoritzImg from '../../../public/events/st-moritz.jpg';
import hokkaidoImg from '../../../public/events/hokkaido.jpg';
import aspenImg from '../../../public/events/aspen.png';
import upcomingImg from '../../../public/events/upcoming.jpg';
import groupImg from '../../../public/events/group.png';
import skiImg from '../../../public/events/ski.png';
import mountain2Img from '../../../public/events/mountain-2.png';

function EventCarousel() {
  const PopupContent = ({
    description,
    dates,
    location,
    whatsIncluded,
    whoShouldAttend,
    image1,
    image2,
    image3,
    image1Class,
    image2Class,
    image3Class,
  }: {
    description: string;
    dates: string;
    location: string;
    whatsIncluded: string;
    whoShouldAttend: string;
    image1: StaticImageData | string;
    image2: StaticImageData | string;
    image3: StaticImageData | string;
    image1Class?: string;
    image2Class?: string;
    image3Class?: string;
  }) => {
    return (
      <>
        <div className='bg-[#F5F5F7] dark:bg-neutral-800 rounded-3xl mb-4 overflow-clip pt-7 md:pt-0'>
          <p className='md:font-medium text-lg leading-tight text-gray-5 md:text-2xl font-helvetica max-w-3xl mx-auto text-start md:text-center p-6 md:p-14'>
            <span className='text-black'>Join Unit Network</span> {description}
          </p>
          <div className='relative w-full h-[14rem] md:h-[20rem] md:-mt-12'>
            <Image src={image1} alt={'Event Image 1'} fill className={image1Class} />
          </div>
        </div>
        <div className='bg-[#F5F5F7] dark:bg-neutral-800 rounded-3xl mb-4 overflow-clip pt-7 md:pt-0'>
          <p className='md:font-medium text-lg leading-tight text-gray-5 md:text-2xl font-helvetica max-w-3xl mx-auto text-start md:text-center p-6 md:p-14'>
            <span className='text-black'>Dates:</span> {dates}
            <br />
            <span className='text-black'>Location: {location}</span>
            <br />
            <br />
            <span className='text-black'>What’s Included?</span> {whatsIncluded}
          </p>
          <div className='relative w-auto h-[12rem] md:h-[16rem] -mx-28'>
            <Image src={image2} alt={'Event Image 2'} fill className={image2Class} />
          </div>
        </div>
        <div className='bg-[#F5F5F7] dark:bg-neutral-800 rounded-3xl mb-4 overflow-clip pt-7 md:pt-0'>
          <p className='md:font-medium text-lg leading-tight text-gray-5 md:text-2xl font-helvetica max-w-3xl mx-auto text-start md:text-center p-6 md:p-14'>
            <span className='text-black'>Who Should Attend?</span> {whoShouldAttend}
          </p>
          <div className='relative w-full h-[12rem] md:h-[32rem]'>
            <Image src={image3} alt={'Event Image 3'} fill className={image3Class} />
          </div>
        </div>
      </>
    );
  };

  const data = [
    {
      category: 'Switzerland',
      title: 'St Moritz',
      src: stMoritzImg,
      content: (
        <PopupContent
          description='in the breathtaking Swiss Alps for an unforgettable blend of skiing, networking, and cryptocurrency insights. St. Moritz, renowned for its stunning slopes and luxury, is the perfect setting for crypto enthusiasts and professionals to connect and unwind.'
          dates='March 2023'
          location='St. Moritz, Switzerland'
          whatsIncluded='Accommodation in a luxury Alpine Resort. Ski passes and Equipment Rentals, Access to Networking sessions and workshops.'
          whoShouldAttend='This event is perfect for crypto enthusiasts, blockchain founders, investors, and ski lovers seeking meaningful connections.'
          image1={skiImg}
          image1Class='object-cover object-top md:px-52'
          image2={mountain2Img}
          image2Class='object-cover object-top'
          image3={groupImg}
          image3Class='object-cover'
        />
      ),
    },
    {
      category: 'Japan',
      title: 'Hokkaido',
      src: hokkaidoImg,
      content: (
        <PopupContent
          description='in the breathtaking Swiss Alps for an unforgettable blend of skiing, networking, and cryptocurrency insights. St. Moritz, renowned for its stunning slopes and luxury, is the perfect setting for crypto enthusiasts and professionals to connect and unwind.'
          dates='March 2023'
          location='St. Moritz, Switzerland'
          whatsIncluded='Accommodation in a luxury Alpine Resort. Ski passes and Equipment Rentals, Access to Networking sessions and workshops.'
          whoShouldAttend='This event is perfect for crypto enthusiasts, blockchain founders, investors, and ski lovers seeking meaningful connections.'
          image1={skiImg}
          image1Class='object-cover object-top md:px-52'
          image2={mountain2Img}
          image2Class='object-cover object-top'
          image3={groupImg}
          image3Class='object-cover'
        />
      ),
    },
    {
      category: 'Sweden',
      title: 'Aspen',
      src: aspenImg,
      content: (
        <PopupContent
          description='in the breathtaking Swiss Alps for an unforgettable blend of skiing, networking, and cryptocurrency insights. St. Moritz, renowned for its stunning slopes and luxury, is the perfect setting for crypto enthusiasts and professionals to connect and unwind.'
          dates='March 2023'
          location='St. Moritz, Switzerland'
          whatsIncluded='Accommodation in a luxury Alpine Resort. Ski passes and Equipment Rentals, Access to Networking sessions and workshops.'
          whoShouldAttend='This event is perfect for crypto enthusiasts, blockchain founders, investors, and ski lovers seeking meaningful connections.'
          image1={skiImg}
          image1Class='object-cover object-top md:px-52'
          image2={mountain2Img}
          image2Class='object-cover object-top'
          image3={groupImg}
          image3Class='object-cover'
        />
      ),
    },

    {
      category: '',
      title: 'Upcoming',
      src: upcomingImg,
      content: (
        <PopupContent
          description='in the breathtaking Swiss Alps for an unforgettable blend of skiing, networking, and cryptocurrency insights. St. Moritz, renowned for its stunning slopes and luxury, is the perfect setting for crypto enthusiasts and professionals to connect and unwind.'
          dates='March 2023'
          location='St. Moritz, Switzerland'
          whatsIncluded='Accommodation in a luxury Alpine Resort. Ski passes and Equipment Rentals, Access to Networking sessions and workshops.'
          whoShouldAttend='This event is perfect for crypto enthusiasts, blockchain founders, investors, and ski lovers seeking meaningful connections.'
          image1={skiImg}
          image1Class='object-cover object-top md:px-52'
          image2={mountain2Img}
          image2Class='object-cover object-top'
          image3={groupImg}
          image3Class='object-cover'
        />
      ),
    },
  ];

  const cards = data.map((card, index) => <Card key={index} card={card} index={index} />);

  return <Carousel items={cards} />;
}

export default EventCarousel;
