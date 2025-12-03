import React from 'react'
import Card from './Card'

const Overview = () => {
    return (
        <div className=' w-full grid  sm:grid-cols-3 sm:grid-rows-none gap-4 p-4'>
            <div className='h-screen sm:h-full flex flex-col gap-y-4 bg-amber-200'>
                <Card/>
                <Card/>
            </div>
            <div className=' h-screen sm:h-full flex flex-col  gap-y-4 '>
                <Card/>
                <Card/>
            </div>
            <div className=' h-screen sm:h-full flex flex-col  gap-y-4'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Overview