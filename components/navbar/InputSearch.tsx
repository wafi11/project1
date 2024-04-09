"use client"
import { useRouter } from 'next/navigation'
import React, { ReactNode, useCallback, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

interface InputSearchProps {
    onClick : (e :React.MouseEvent<HTMLButtonElement>) => void
}

const InputSearch : React.FC = ({
}) => {
    const [input,setInput] = useState("")
    const router = useRouter()
    const handleSearch  = useCallback(() => {
        console.log('click')
        // router.push('/search')
    },[])
  return (
    <div className='py-2 items-center justify-center pt-4 rounded-xl  md:w-[400px] hidden sm:block'>
        <div className='flex justify-between items-center bg-white rounded'>
            <input className='focus:outline-none text-gray-900 px-3'
            onClick={handleSearch} type='text' 
            placeholder='Search Your Clothes' defaultValue={input} onChange={(e) => setInput(e.currentTarget.value)}/>
            <div onClick={handleSearch} className='p-2 bg-pink-300 text-gray-200 rounded'>
                <BiSearch size={18}/>
            </div>
        </div>
    </div>
  )
}

export default InputSearch