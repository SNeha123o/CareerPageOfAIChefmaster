import React from 'react'
import {  Typography } from "@material-tailwind/react";
import work from './work.jpg'
import { Button } from "@material-tailwind/react";

const Page1 = () => {
  return (
    <>
   <div className='bg-black h-full'>
    <h1 className='text-white text-8xl text-center justify-center pt-64 pb-64'>"Embrace your uniqueness"</h1>
   </div>
   <div className='bg-gradient-to-b from-sky-400 to-slate-50 h-full py-56'>
    <p className='text-5xl text-center my-2'>Bring your talents to AI CHEFMASTER</p>
    <p className='text-5xl text-center my-2'>and help us create the future of</p>
    <p className='text-5xl text-center my-2'>digital experiences</p>
    <div className='flex justify-center pt-8'>
   <input className='rounded-lg p-3 w-64 placeholder-black' name="myInput" placeholder='Enter a Job title,Keyword'/>
   <Button className='bg-indigo-700 ml-10 transform transition duration-500 hover:scale-110 w-32 '>Search</Button>
   </div>
   </div>
   <div className='bg-black h-full py-64'>
    <h1 className='text-white text-6xl text-center justify-center py-5'>Work at AI CHEFMASTER</h1>
    <p className='text-cyan-800 text-6xl text-center justify-center py-5'>We're more than just a Workplace,</p>
    <p className='text-cyan-500 text-6xl text-center justify-center pb-5'>we're Family</p>
    <a className='text-indigo-700 flex justify-center text-4xl py-3 transform transition duration-500 hover:scale-110'href="#">Work at AI Chef Master 🡪</a>
   </div>
   <div>
      <div className="relative h-full w-full">
        <img
          src={work}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-90 text-6xl"
            >
              "Infusing innovation into every algorithm, I am the
              AI chef master, blending code and cuisine in a perfect harmony
              of taste and tech."
              <br />
              <a className='text-blue-800 text-3xl transform transition duration-500 hover:scale-110' href="">Learn More about Technology 🡪</a>
            </Typography>
            
          </div>
        </div>
      </div>
      
   </div>
    </>
  )
}

export default Page1