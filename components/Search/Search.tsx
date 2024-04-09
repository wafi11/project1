import React from 'react'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { RiCustomerService2Fill } from 'react-icons/ri'
import Right from './Right'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-3xl font-semibold text-lime-600/75 tracking-wide'>
                    LUXURY INCLUDES VACATIONS FOR TWO PEOPLE
                </h2>
                <p className='text-md  font-light'>
                    In today's digital era, travel websites have become indispensable tools for
                    globetrotters and armchair travelers alike.These platforms offer a plethora 
                    of information,ranging from destination guides to booking accommodations and flights, 
                    all conveniently accessible at the click of a button.This essay delves into the transformative 
                    impact of travel websites, examining how they have revolutionized the way we plan, experience, and share our adventures.
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-6 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center gap-2'>
                    <button className='bg-gradient-to-r from-sky-800 to-sky-400 p-2 rounded-md text-gray-200'>
                        <RiCustomerService2Fill size={50}/>
                    </button>
                    <div className='grid gap-1'>
                        <h2 className='text-md font-bold'>Leading Service</h2>
                        <p className='text-base font-medium px-3'>All inclusive Company for 20 years in a row</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center gap-2'>
                <button className='bg-gradient-to-r from-sky-800 to-sky-400 p-2 rounded-md text-gray-200'>
                        <MdOutlineTravelExplore size={50}/>
                    </button>
                    <div className='grid gap-1'>
                        <h2 className='text-md font-bold'>Leading Service</h2>
                        <p className='text-base font-medium px-3'>All inclusive Company for 20 years in a row</p>
                    </div>
                </div>
            </div>
        </div>
        <Right />
    </div>
  )
}

export default Search