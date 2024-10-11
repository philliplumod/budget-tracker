import Navbar from '@/components/Navbar';
import React from 'react';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relatove flex h-screen  w-full flex-col ">
      <Navbar />
      <div className="w-full">{children} </div>
    </div>
  );
}

export default layout;
