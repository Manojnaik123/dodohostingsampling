'use client';
import React from 'react';
import AddToCart from '../AddToCart';

const UserCard = () => {
    return (
        <div className='p-5 bg-sky-200 text-white text-xl hover:bg-sky-400'>
            <AddToCart/>
        </div>
    )
}

export default UserCard