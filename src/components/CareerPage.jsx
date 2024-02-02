import React from 'react'

function CareerPage() {
  return (
    <div className='w-[100vw] h-[100vh] overflow-x-hidden'>
      <div className='flex flex-col sm:flex-row w-full gap-6  sm:gap-0 px-8 sm:px-0 justify-around mt-6 '>
        <div className='sm:w-[45%] w-full h-[20rem]  '>
          <div className='h-[65%] bg-gray-200'></div>
          <div className='w-full flex justify-center my-2 md:text-3xl text-xl'>Interviewing at AI Chef Master</div>
          <div className='w-full flex justify-center'>
            <button className='bg-[#2B0AF2] text-white px-4 py-2 mt-3 rounded-2xl'>Learn More</button>
          </div>
        </div>
        <div className='sm:w-[45%] w-full h-[20rem]  '>
          <div className='h-[65%] bg-gray-200'></div>
          <div className='w-full flex justify-center my-2 md:text-3xl text-xl'>Interviewing at AI Chef Master</div>
          <div className='w-full flex justify-center'>
            <button className='bg-[#2B0AF2] text-white px-4 py-2 mt-3 rounded-2xl'>Learn More</button>
          </div>
        </div>
      </div>
   
     
    </div>
  )
}

export default CareerPage