import React from 'react'
import GredientText from './GradientText'
import GredientTextReverse from './GradientTextReverse'
import {  Typography,Button } from "@material-tailwind/react";
import work from './work.jpg'


const Page2 = () => {
  return (
    <>
    <div className='h-full py-52'>
    <h1 className='font-medium text-6xl flex justify-center py-5'>Life at AI Chef Master</h1>
    <GredientText className="text-6xl flex justify-center py-2">Join our community</GredientText>
    <GredientTextReverse className="text-6xl flex justify-center py-2">and Become a Member.</GredientTextReverse>
    <p className='flex justify-center text-4xl pt-2 py-2'>"Embark on a journey with us, where your presence isn't </p>
    <p className='flex justify-center text-4xl py-2'> just welcomed - it's crucial. Join our community and play</p>
    <p className='flex justify-center text-4xl py-2'> a pivotal role in defining the very essence of who we are"</p>
    <a className='text-indigo-800 flex justify-center text-3xl transform transition duration-500 hover:scale-110 py-5' href="#">Learn More about AI Chefmaster 🡪</a>
   </div>
   <div className="relative h-full w-full">
        <img
          src={work}
          className="h-full w-full"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-90 text-6xl"
            >
              "Unlock your potential, be authentic, and thrive at AI Chef master"
              <br />
              <a className='text-blue-800 text-3xl' href="">Learn More about Operations 🡪</a>
            </Typography>
            
          </div>
        </div>
      </div>
      
   <div className='h-full py-12'>
    <h1 className='flex justify-center text-5xl font-bold py-5'>Browse categories.</h1>
    <p className='flex justify-center text-4xl pt-5 pb-12'>Take your career to the
    <GredientText className='ml-3'> next level</GredientText>. Discover the perfect job for you</p>
    <div>

    <div className='flex bg-white justify-around'>
        <div className="w-80 h-80 bg-gray-200 shadow-lg shadow-indigo-500/20 mb-10 transform transition duration-500 hover:scale-110 border-6 rounded">
          <img className='h-64 mt-1' src={work} alt='AIimage' />
          
          <div className="flex gap-4 justify-center">
            <Button className='bg-white w-full h-16 text-indigo-700 text-2xl'> Operations 🡪</Button>
          </div>
        </div>

        <div className="w-80 h-80 bg-gray-200 shadow-lg shadow-indigo-500/20 rounded-lg mb-10 transform transition duration-500 hover:scale-110">
          <img className='h-64 mt-1' src={work} alt='AIimage' />
          
          <div className="flex gap-4 justify-center">
            <Button className='bg-white w-full h-16 text-indigo-700 text-2xl'>R & D 🡪</Button>
          </div>
        </div>

        <div className="w-80 h-80 bg-gray-200 shadow-lg shadow-indigo-500/20 rounded-lg mb-10 transform transition duration-500 hover:scale-110">
          <img className='h-64 mt-1' src={work} alt='AIimage' />
          
          <div className="flex gap-4 justify-center">
            <Button className='bg-white w-full h-16 text-indigo-700 text-2xl'>Technology 🡪</Button>
          </div>
        </div>
      </div>
      <div className='flex bg-white justify-around mt-5'>
      <div className="w-80 h-80 bg-gray-200 shadow-lg shadow-indigo-500/20 rounded-lg mb-10 transform transition duration-500 hover:scale-110">
          <img className='h-64 mt-1' src={work} alt='AIimage' />
          
          <div className="flex gap-4 justify-center">
            <Button className='bg-white w-full h-16 text-indigo-700 text-2xl'> Sale & marketing 🡪</Button>
          </div>
        </div>

        <div className="w-80 h-80 bg-gray-200 shadow-lg shadow-indigo-500/20 rounded-lg mb-10 transform transition duration-500 hover:scale-110">
          <img className='h-64 mt-1' src={work} alt='AIimage' />
          
          <div className="flex gap-4 justify-center">
            <Button className='bg-white w-full h-16 text-indigo-700 text-2xl'> Design 🡪</Button>
          </div>
        </div>

        <div className="w-80 h-80 bg-gray-300 shadow-lg shadow-indigo-500/20 rounded-lg mb-10 transform transition duration-500 hover:scale-110">
          <img className='h-64 mt-1' src={work} alt='AIimage' />
          
          <div className="flex gap-4 justify-center">
            <Button className='bg-white w-full h-16 text-indigo-700 text-2xl'> Internships 🡪</Button>
          </div>
        </div>
      </div>
    </div>
   </div>
   
    </>
  )
}

export default Page2