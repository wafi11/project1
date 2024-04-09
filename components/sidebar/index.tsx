"use client"

import React, { useCallback } from 'react'
import { useSidebar } from '../hooks/useSidebar'
import { MdClose } from 'react-icons/md'

const Sidebar = () => {
  const {isOpen ,onClose} = useSidebar()
  const handleClose = useCallback(() => {
    onClose()
  },[])
  
  return (
    <div>
    {
      isOpen &&(
        <div className={`${isOpen ? "left-0" : "left-full"}
         w-full bg-white fixed top-0 h-full shadow-2xl text-black md:w-[35vw] xl:max-w[25vw]
         transition-all duration-400 z-20 px-4 lg:px-[25px]`}>
          <div className='p-4 flex justify-between items-center'>
              <h2 className='font-bold text-gray-800 text-3xl tracking-wide'>NextTravel</h2>
              <button className='text-2xl sm:text-3xl md:text-4xl font-bold '
                onClick={handleClose}>
                <MdClose />
              </button>
          </div>


        </div>

      )
    }
      </div> 
)
}

export default Sidebar