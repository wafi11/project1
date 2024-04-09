import React from 'react'

const UpperNav = () => {
  return (
    <div className='bg-white top-0 sticky'>
      <div className='container'>
          <div className='flex justify-between items-center'>
              <h4 className='text-md'>Shopping Everyday</h4>
                <div className='flex gap-4 md:gap-8 items-center'>
                  <div className='md:flex items-center gap-3 hidden'>
                    <div className='px-2 text-gray-900 font-semibold '>
                      <a href="/login">Sign In</a>
                    </div>
                    <div className='px-2 text-gray-900 font-semibold '>
                      <a href="/register">Sign Up</a>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default UpperNav