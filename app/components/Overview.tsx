import React from 'react'
import Card from './Card'

const Overview = () => {
    return (
        <div className=' w-full grid  sm:grid-cols-3 sm:grid-rows-none gap-4 p-4'>
            <div className='h-screen sm:h-full flex flex-col gap-y-4'>
                <Card text='lorem' />
                <Card text='lorem' />

            </div>
            <div className=' h-screen sm:h-full flex flex-col  gap-y-4 '>
                <Card text='lorem' />
                <Card text='lorem' />

            </div>
            <div className=' h-screen sm:h-full flex flex-col  gap-y-4'>
                <Card text='lorem' />
                <Card text='lorem' />
                <Card text='loremlororemloremloremloremlorem' />

            </div>
        </div>
    )
}

export default Overview