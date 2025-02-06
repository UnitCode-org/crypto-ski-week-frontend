import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
function Navbar() {
  return (
    <div className='flex items-center justify-between gap-2 py-6 md:py-8'>
      <Image src='/unit-logo.svg' alt='Unit Logo' width={36} height={36} className='hidden md:block' />
      <Image src='/unit-logo.svg' alt='Unit Logo' width={30} height={30} className='md:hidden block' />
      <Link href='https://www.unitski.com/' target='_blank'>
        <Button className='rounded-full text-sm md:text-lg px-6 md:px-9 py-4 md:py-6 font-medium md:font-bold'>
          Sign Up
        </Button>
      </Link>
    </div>
  );
}

export default Navbar;