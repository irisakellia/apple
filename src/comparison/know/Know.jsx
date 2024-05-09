import React from 'react'

import m2 from '../../assets/mac/magi/m2.png'
import m3 from '../../assets/mac/magi/m3.png'
import macbboo from '../../assets/mac/magi/macbboo.png'

const Know = () => {
  return (
    <div className='mt-10 '>
      <div className=''>
        <p className='font-bold text-4xl ml-10'>Explore the lineup.</p>
        <p className='text-blue-500 text-sm font-light float-right mt-10'>Compare all modules></p>
      </div>

      <div>
        <div className='cursor-pointer  inline'>
          <button className='p-2 py-1 border border-black rounded-2xl mt-10 ml-10 bg-black text-white hover:bg-transparent hover:text-black'>Laptops</button>
          <button className='p-2 py-1 border border-white rounded-2xl ml-6 bg-gray-200 hover:bg-black hover:text-white'>Desktops</button>
          <button className='p-2 py-1 border border-white rounded-2xl ml-6 bg-gray-300 hover:bg-black hover:text-white'>Displays</button>
        </div>
      </div>


<div className='inline- flex mt-8 ml-8 gap-1'>
  <section>
<div>
  <img src ={macbboo} alt='mac' className='h-30 w-60' />
  <div>
    <p className='text-orange-500 text-xs mt-6'>NEW M3 models</p>
    <p className='font-bold text-xl mt-2'>MacBook Air 13" and 15"</p>
    <p className='font-medium mt-2 text-sm'>M2 or M3 chip</p>

    <p className='text-black text-opacity-70 font-medium mt-2 text-sm'>Strikingly thin and fast so you can</p>
    <p className='text-black text-opacity-70 font-medium text-sm '>work,play, or create anywhere.</p>
    <p className='text-black text-opacity-60 font-bold text-sm mt-2'>From $999 or $83.25/mo. for 12 mo.</p>
  </div>
  <div className='cursor-pointer mt-4'>
    <button className=' rounded-3xl border border-blue-500 p-4 py-1 bg-blue-500'>Learn more</button>
    <button className='hover:bg-blue-100 rounded-3xl p-10 py-1 bg-white ml-4'>Buy></button>
  </div>
  <div className='h-px w-96 bg-gray-400  mt-4'>

  </div>
  <div className='mt-10'>
    <p className='font-bold text-xl'>13.6" or 15.3"</p>
    <p className='text-black text-opacity-50 text-xs'>Liquid Retina display with 500 nits of brightness</p>
    <p className='text-black text-opacity-50 text-xs'>and support for 1 billion colors</p>
  </div>
  <div>
    <img src={m2} alt='image' className='mt-10'/>
    <div>
      <p className='text-xs mt-2 text-black text-opacity-70'>Apple M2 or M3 chip</p>
      <p className='text-xs mt-4 text-black text-opacity-70'>Up to</p>
      <p className='font-bold text-xl mt-2'>18 hours</p>
      <p className='text-xs mt-2 text-black text-opacity-70'>battery life</p>
      <p className='text-bold text-xl mt-4'>4 ports</p>
      <p className='text-xs text-black text-opacity-70 mt-2'>2x Thunderbolt / USB 4,</p>
      <p className='text-xs text-black text-opacity-70'>headphone jack, MagSafe</p>
      <p className='font-bold text-xl mt-2'>2.7 lb. or 3.3 lb.</p>
      <p className='text-xs mt-2 text-black text-opacity-70'>Weight</p>
    </div>
  </div>
</div>
      </section>
    

      <section className=''>
<div>
  <img src ={macbboo} alt='mac' className='h-40 w-70' />
  <div>
    <p className='font-bold mt-2 text-xl'>MacBook Air 14" and 16"</p>
    <p className='mt-2 text-sm font-medium'>M3, M3 Pro, or M3 Max chip</p>
<p className='text-black text-opacity-70 text-sm font-medium'>
    <p>The most advanced Mac laptops</p>
    <p>for demanding workflows.</p>
    <p className='mt-2'>From $1599 or $133.25/mo. for 12 mo.</p></p>
  </div>
  <div className='mt-6'>
    <button className=' rounded-3xl border border-blue-500 p-4 py-1 bg-blue-500' >Learn more</button>
    <button className='hover:bg-blue-100 rounded-3xl p-10 py-1 bg-white ml-4'>Buy></button>
  </div>
  <div className='h-px w-96 bg-gray-400 mt-4'>

  </div>
  <div className='mt-10'>
    <p className='font-bold text-xl'>14.2" or 16.2"</p>
    <p className='text-black text-opacity-70 text-xs mt-2'>
    <p>Liquid Retina XDR display with 1000 nits</p>
    <p>of HDR and 600 nits of SDR brightness</p>
    <p>and up to 120Hz refresh rates</p></p>
  </div>
  <div>
    <img src={m3} alt='image'className='mt-2'/>
    <div>
      <p className='mt-2 text-xs text-black text-opacity-70'>Apple M3,M3 Pro, or M3 Max chip</p>
      <p className='mt-4 text-xs text-black text-opacity-70'>Up to</p>
      <p className='font-bold mt-4 text-xl'>22 hours</p>
      <p className='text-black text-opacity-70 mt-2  text-xs'>battery life</p>
      <p className='font-bold mt-2 text-xl'>7 ports</p>
      <p className='text-xs text-black text-opacity-70 mt-2'><p>2x Thunderbolt / USB 4,</p>
      <p>3x Thunderbolt 4,HDMI, SDXC, </p>
      <p>headphone jack, MagSafe</p></p>
      <p className='font-bold text-xl mt-2'>3.4 lb. or 4.7 lb.</p>
      <p className='text-xs text-black text-opacity-70 mt-2'>Weight</p>
    </div>
  </div>
</div>
      </section>
      </div>
    
           
        
      
    </div>
  )
}

export default Know
