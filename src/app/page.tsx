import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Image from 'next/image';
import mountainImg from '../../public/mountain.png';
import ImageCarousel from './components/ImageCarousel';
import EventCarousel from './components/EventCarousel';
import FadeIn from './components/FadeIn';

export default function Home() {
  return (
    <div className='min-h-screen max-w-6xl mx-auto font-helvetica px-4'>
      <FadeIn direction='down'>
        <Navbar />
      </FadeIn>
      <Hero />
      <div className='py-8 h-[20rem] md:h-[30rem] flex items-center'>
        <FadeIn enableInView delay={0.2}>
          <p className='font-medium text-2xl md:text-4xl'>
            We host crypto ski events, combining alpine adventure with industry networking for{' '}
            <span className='text-gray-2'>cryptocurrency enthusiasts and professionals.</span>
          </p>
        </FadeIn>
      </div>
      <div>
        <FadeIn enableInView delay={0.2}>
          <h4 className='font-medium text-2xl md:text-4xl md:pb-12 pb-4'>
            <span className='text-primary'>Upcoming</span> Events.
          </h4>
        </FadeIn>
        <FadeIn enableInView delay={0.2}>
          <EventCarousel />
        </FadeIn>
      </div>
      <div className='mt-16'>
        <FadeIn enableInView delay={0.2}>
          <h4 className='font-medium text-2xl md:text-4xl md:pb-12 pb-4'>
            A <span className='text-primary'>fusion</span> of innovation and outdoor adventure.
          </h4>
        </FadeIn>
        <FadeIn enableInView delay={0.2}>
          <div className='rounded-3xl bg-gray-3 grid grid-cols-1 md:grid-cols-2 min-h-[30rem] md:min-h-[36rem] items-end'>
            <div className='md:px-16 px-6 py-8 md:pr-0 flex flex-col justify-center h-full'>
              <Accordion type='single' defaultValue='item-1' collapsible className='flex flex-col gap-1 md:gap-3'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='text-lg md:text-3xl'>What is Crypto Ski Week?</AccordionTrigger>
                  <AccordionContent className='font-inter'>
                    Crypto Ski Week is an annual gathering of digital asset and blockchain founders, investors, and
                    thought leaders. It combines alpine adventures with discussions on blockchain and cryptocurrency,
                    creating a unique experience for enthusiasts and professionals.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger className='text-lg md:text-3xl'>How to Join?</AccordionTrigger>
                  <AccordionContent className='font-inter'>
                    Simply click the signup button on the Crypto Ski Week website to access the registration form. Fill
                    in your details, and our team will review your submission and get back to you shortly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger className='text-lg md:text-3xl'>Why Join?</AccordionTrigger>
                  <AccordionContent className='font-inter'>
                    Connect with Industry Leaders: Network with top blockchain founders, investors, and thought leaders
                    in an exclusive alpine setting.
                    <br />
                    <br />
                    Gain Valuable Insights: Participate in engaging discussions and workshops on the latest trends in
                    blockchain and cryptocurrency.
                    <br />
                    <br />
                    Unique Experience: Enjoy the perfect blend of outdoor adventure and professional growth, set against
                    the backdrop of breathtaking ski slopes.
                    <br />
                    <br />
                    Build Lasting Relationships: Forge connections with like-minded individuals and potential
                    collaborators in a relaxed, inspiring environment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className='w-full h-[10rem] md:h-3/4 relative rounded-3xl overflow-clip'>
              <Image
                src={mountainImg}
                alt='Mountain Image'
                fill
                className='object-cover object-left-top md:object-left-bottom mt-6 md:mt-0'
              />
            </div>
          </div>
        </FadeIn>
      </div>
      <div className='mt-24'>
        <FadeIn enableInView delay={0.2}>
          <h4 className='font-medium text-2xl md:text-4xl md:pb-12 pb-4'>
            Our past <span className='text-primary'>#CryptoSkiWeek</span> Experiences.
          </h4>
        </FadeIn>
        <FadeIn enableInView delay={0.2}>
          <ImageCarousel />
        </FadeIn>
      </div>
      <div>
        <FadeIn enableInView delay={0.2}>
          <h5 className='font-medium text-2xl max-w-40 md:max-w-none md:text-4xl py-10 md:py-12 text-start md:text-end h-40 flex items-center justify-start md:justify-end my-12'>
            <span>
              Connect, <span className='text-gray-2'>Collaborate, Unwind.</span>
            </span>
          </h5>
        </FadeIn>
      </div>
    </div>
  );
}
