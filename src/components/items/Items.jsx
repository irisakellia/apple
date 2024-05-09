import React from 'react'
import large_2x from '../../assets/video/large_2x.mp4';

const Items = () => {
  return (
    <div>
      
      <div className="w-full relative">
  <video 
    autoPlay
    muted
    playsInline
    src={large_2x} 
    className="w-full h-96 object-cover "
  />
  <div className='absolute bottom-0 right-0 left-0 text-center'>
    <p className='text-yellow-100 font-bold text-3xl '>Vision Pro</p>
    <div className=''>
      <button className='bg-blue-600 p-2 px-4 text-white rounded-3xl mr-2 hover:bg-transparent'>Learn more</button>
      <button className='border border-blue-600 p-2 px-10 text-white rounded-3xl hover:bg-blue-600'>Buy</button>
    </div>
  </div>
</div>


      

     
    </div>
  )
}

export default Items
