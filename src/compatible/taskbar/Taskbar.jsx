import React from 'react'

import bri from '../../assets/compatible/bri.png'
import cube from '../../assets/compatible/cube.png'

const Taskbar = () => {
  return (
    <div>
        <section className='border-2 border-white inline-flex w-[900px] ml-20 rounded-2xl' >
    <div>
        <p  className='text-white ml-10 font-bold text-2xl mt-10'>HOW CAN WE </p>
        <p  className='text-white ml-10 font-bold text-2xl mt-2'>HELP YOU TODAY ?</p>
        <p className='text-white text-xs mt-6 ml-10 text-opacity-80'>With Category and requests</p>
        
        </div>

<div>
        <img src={bri} alt='bri' className='ml-60 mt-10'/>
        </div>
   
    </section>
    <div className='ml-20'> 
      <p className='text-white text-3xl mt-6 font-medium'>Select the category</p>
    </div>
    <div>
      <p className='text-white text-sm font-medium float-right mr-10 mt-0'>Show all</p>
    </div>
    </div>
  )
}

export default Taskbar;
