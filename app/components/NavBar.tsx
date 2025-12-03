'use client'

import React from 'react'
import NavList from './NavList'
import ProfilePrev from './ProfilePrev'

const NavBar = () => {
    return (
        <div className='text-black h-16 sm:w-90 sm:h-12/12 sm:flex sm:flex-col sm:justify-between sm:border-r sm:border-black'>
            <div className='sm:pl-5 sm:pr-5 sm:w-full sm:h-16    '>
                <ProfilePrev/>
            </div>
            <div className='sm:w-full sm:flex sm:flex-auto'>
                <NavList />
            </div>
            <div className='sm:pl-5 sm:pr-5 sm:w-full sm:h-16    '>
                <ProfilePrev/>
            </div>
        </div>
    )
}

export default NavBar