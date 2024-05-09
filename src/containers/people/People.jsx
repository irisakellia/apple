import React from 'react'
import kalisa from '../../assets/mag/kalisa.jpg'

const People = () => {
  return (
    <div className='mt-10'>
      <div className='flex '>
        <img src={kalisa} className='h-96 w-96 rounded-xl ml-10 '/>
        <div className='ml-10 mt-20 font-medium font-serif'>
            <p>You can shop one on one with a <span className='text-orange-500'>specialist</span> by online or on store . </p>
            <p className='mt-2'>Shop with a <span className='text-orange-500'>Specialist</span> Over Video . </p>
            <p className='mt-2'>choose your next device in a guided , one-way video session.</p>
            <h2 className='text-black text-opacity-50 font-medium text-xs mt-2 mb-2'>TODAY AT APPLE</h2>
            <p className='mt-2'>Join free sessions at your Apple Store.</p>
            <p className='mt-2'>Learn about the latest features and how to go further with your Apple devices</p>
            <p className='mt-2'>Get expert service and support at the <span className='hover:underline cursor-pointer'>Genius Bar .</span> </p>
            <p className='text-black text-opacity-50 text-xs mt-20'>+352 798 45320</p>
        </div>
      </div>
      <div className='ml-4 mt-10'>
        <p className='font-bold text-2xl'>The Apple experience.<span className='text-black text-opacity-50'>Do even more with Apple products and services.</span> </p>
      </div>
    </div>
  )
}

export default People
