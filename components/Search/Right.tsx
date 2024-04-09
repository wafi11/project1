import React from 'react'

const Right = () => {
  return (
    <div>
        <div className='border text-center'>
            <p>GET AN ADITIONAL 20% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gray-800 text-gray-200 py-2 '>GET AN ADITIONAL 20% OFF</p>
        </div>
        <form className='w-full '>
          <div className='border text-center my-2 flex flex-col'>
              <label className='text-start'>Destinatios</label>
              <select className='bg-gray-200 border rounded-md p-2'>
                <option>Mountains</option>
                <option>Sea</option>
                <option>River</option>
                <option>Beach</option>
              </select>
          </div>
          <div className='flex flex-col my-4'>
            <label >Check In</label>
            <input className='border rounded-md p-2 bg-gray-200' type="date" />
          </div>
          <div className='flex flex-col my-4'>
            <label >Check Out</label>
            <input className='border rounded-md p-2 bg-gray-200' type="date" />
          </div>
          <button className='w-full my-4 p-2 rounded-md bg-gradient-to-r from-slate-600 to-slate-400 text-slate-100'>Rates and Avaible</button>
        </form>
    </div>
  )
}

export default Right