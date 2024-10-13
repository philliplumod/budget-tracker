import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

async function page() {
    const user = await currentUser();
    if (!user) {
        redirect('/sign-in')
    }
    return (
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 p-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl'>
            <h1 className='text-center text-2xl sm:text-3xl md:text-4xl'>
                Welcome, <span className='ml-2 font-bold'>{user.firstName}</span>
            </h1>
            <h2 className='mt-4 text-center text-sm sm:text-base md:text-lg text-muted-foreground'>
                Let's get started by setting up your currency
            </h2>
            <h3 className='mt-2 text-center text-xs sm:text-sm md:text-base text-muted-foreground'>
                You can change these settings at any time
            </h3>
        </div>
    )
}

export default page