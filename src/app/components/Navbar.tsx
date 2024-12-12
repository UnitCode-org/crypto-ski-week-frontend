import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function Navbar() {
  return (
    <div className='flex items-center justify-between gap-2 py-8'>
      <Image src='/unit-logo.svg' alt='Unit Logo' width={36} height={36} />
      <Button className='rounded-full text-lg px-9 py-6 font-bold'>Sign Up</Button>
    </div>
  );
}

export default Navbar;