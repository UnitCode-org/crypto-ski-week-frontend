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
          description="in the pristine powder snow of Hokkaido, Japan for an extraordinary fusion of skiing and crypto networking. Experience legendary Japanese hospitality while connecting with blockchain innovators on some of the world's finest powder slopes."
          dates='February 2024'
          location='Niseko, Hokkaido, Japan'
          whatsIncluded='Luxury onsen resort accommodation, ski passes and equipment, guided backcountry tours, traditional Japanese dinners, and exclusive crypto networking events.'
          whoShouldAttend='Crypto and blockchain professionals seeking to combine world-class powder skiing with meaningful industry connections in a unique cultural setting.'
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
      category: 'USA',
      title: 'Aspen',
      src: aspenImg,
      content: (
        <PopupContent
          description="in the iconic mountains of Aspen, Colorado for an exclusive gathering of crypto leaders and winter sports enthusiasts. Combine luxury mountain living with high-level industry networking in one of North America's most prestigious ski destinations."
          dates='TBA'
          location='Aspen, Colorado, USA'
          whatsIncluded="5-star mountain lodge accommodation, premium ski passes, equipment rentals, private networking events, and exclusive access to Aspen's finest venues."
          whoShouldAttend='Cryptocurrency executives, investors, and enthusiasts looking to network at the intersection of luxury lifestyle and blockchain innovation.'
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
          description='at our next exciting destination. Stay tuned for announcements about future Crypto Ski Week events combining premier ski locations with unparalleled networking opportunities in the blockchain space.'
          dates='TBA'
          location='Location to be announced'
          whatsIncluded='Premium accommodation, full ski packages, exclusive networking events, and unique cultural experiences specific to the chosen destination.'
          whoShouldAttend='Forward-thinking crypto professionals and enthusiasts eager to be part of our next groundbreaking winter networking experience.'
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
