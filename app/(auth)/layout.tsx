import Logo from '@/components/Logo'
import React from 'react'

function Layout({children} : {children: React.ReactNode}) {
  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16'>
        <Logo/>
        <div className='mt-8 sm:mt-12'>
            {children}
        </div>
    </div>
  )
}

export default Layout