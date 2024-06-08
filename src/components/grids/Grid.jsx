import React from 'react'
import cam from '../../assets/image/cam.webp';
import mac from '../../assets/image/mac.avif';
import applewatch from '../../assets/image/applewatch.webp';
import ipad from '../../assets/image/ipad.avif';
import pods from '../../assets/image/pods.avif';
import card from '../../assets/image/card.avif';



const Grid = () => {
  return (
    <div>
      <section className=' mt-3 grid lg:grid-cols-3  '>
      
      <div className='relative'>
      <div>
          <img src={mac} alt='mac' className='h-96 w-full'/>
        </div>
        <div className='absolute bottom-0 right-0 left-0 top-px '>
        <p className='font-bold text-yellow-100 text-3xl'>MacBook Air</p>
        <p className='text-white'>Lean.Mean.M3 machine .</p>
        <div className='mt-4'>
          <button className='bg-blue-600 text-white p-2 px-4 rounded-3xl hover:bg-transparent mr-2'>Learn more</button>
          <button className='border border-blue-600 text-white p-2 px-10 rounded-3xl hover:bg-blue-600'>Buy</button>
        </div>
        </div>
        
      </div>
      <div className='relative'>
      <div>
          <img src={mac} alt='mac' className='h-96 w-full'/>
        </div>
        <div className='absolute bottom-0 right-0 left-0 top-px '>
        <p className='font-bold text-yellow-100 text-3xl'>MacBook Air</p>
        <p className='text-white'>Lean.Mean.M3 machine .</p>
        <div className='mt-4'>
          <button className='bg-blue-600 text-white p-2 px-4 rounded-3xl hover:bg-transparent mr-2'>Learn more</button>
          <button className='border border-blue-600 text-white p-2 px-10 rounded-3xl hover:bg-blue-600'>Buy</button>
        </div>
        </div>
        
      </div>


      <div className='relative'>
      <div>
          <img src={applewatch} alt='watch' className='h-96 w-full'/>
        </div>
        <div className='absolute bottom-0 right-0 left-0 top-px'>
        <p className='text-yellow-100 font-bold text-3xl'>WATCH</p>
        <p className='text-red-500'>SERIES 9</p>
        <p className='text-white'>Smarter.Brighter.Mightier.</p>
        <div>
          <button className='bg-blue-600 p-2 px-4 text-white hover:bg-transparent  rounded-3xl mr-4'>Learn more</button>
          <button className='border border-blue-600 p-2 px-10 text-white hover:bg-blue-600 rounded-3xl'>Buy</button>
        </div>
        </div>
        
      </div>
      </section>
<section className='grid grid-cols-3 '>

      <div className='relative mt-px'>
      <div>
          <img src={ipad} alt='ipad' className='h-96'/>
        </div>
        <div className='absolute bottom-0 right-0 left-0 top-px'>
        <p className='text-yellow-100 font-bold text-3xl'>iPad</p>
        <p className='text-white'>Lovable.Drawable.Magical.</p>
        <div>
          <button  className='bg-blue-600 p-2 px-4 text-white hover:bg-transparent  rounded-3xl mr-4 mt-4' >Learn more</button>
          <button  className='border border-blue-600 p-2 px-10 text-white hover:bg-blue-600 rounded-3xl'>Buy</button>
        </div>
        </div>
        
      </div>
      <div className='relative mt-px'>
      <div>
          <img src={ipad} alt='ipad' className='h-96'/>
        </div>
        <div className='absolute bottom-0 right-0 left-0 top-px'>
        <p className='text-yellow-100 font-bold text-3xl'>iPad</p>
        <p className='text-white'>Lovable.Drawable.Magical.</p>
        <div>
          <button  className='bg-blue-600 p-2 px-4 text-white hover:bg-transparent  rounded-3xl mr-4 mt-4' >Learn more</button>
          <button  className='border border-blue-600 p-2 px-10 text-white hover:bg-blue-600 rounded-3xl'>Buy</button>
        </div>
        </div>
        
      </div>

      <div className='relative mt-px'>
      <div>
          <img src={pods} alt='pods' className='h-96 w-full'/>
        </div>
        <div className='absolute bottom-0 left-0 right-0 top-px'>
        <p className='text-yellow-100 font-bold text-3xl'>Airpods Pro</p>
        <p className='text-white'>Adaptive Audio. Now playing.</p>
        <div>
          <button className='bg-blue-600 p-2 px-4 text-white hover:bg-transparent  rounded-3xl mr-4 mt-4'>Learn more</button>
          <button  className='border border-blue-600 p-2 px-10 text-white hover:bg-blue-600 rounded-3xl'>Buy</button>
        </div>
        
      </div>
      </div>
      </section>

<section className='grid grid-cols-3 '>
      <div className='relative mt-px'>
      <div>
          <img src={card} alt='card' className='h-96'/>
        </div>
        <div className='absolute bottom-0 right-0 left-0 top-px'>
        <p className='text-yellow-100 font-bold text-3xl'>Card</p>
        <p className='text-white'>Get up to 3% Daily Cash back</p>
        <p className='text-white'>with every purchase.</p>
        <div>
          <button className='bg-blue-600 p-2 px-4 text-white hover:bg-transparent  rounded-3xl mr-4 mt-4'>Learn more</button>
          <button   className='border border-blue-600 p-2 px-4 text-white hover:bg-blue-600 rounded-3xl'>Apply now</button>
        </div>
        </div>
      </div>
     
      <div className='relative mt-px'>
      <div>
          <img src={card} alt='card' className='h-96'/>
        </div>
        <div className='absolute bottom-0 right-0 left-0 top-px'>
        <p className='text-yellow-100 font-bold text-3xl'>Card</p>
        <p className='text-white'>Get up to 3% Daily Cash back</p>
        <p className='text-white'>with every purchase.</p>
        <div>
          <button className='bg-blue-600 p-2 px-4 text-white hover:bg-transparent  rounded-3xl mr-4 mt-4'>Learn more</button>
          <button   className='border border-blue-600 p-2 px-4 text-white hover:bg-blue-600 rounded-3xl'>Apply now</button>
        </div>
        </div>
      </div>
     

      <div className='relative mt-px'>
      <div>
          <img src={cam} alt='cam' className='h-96 w-full'/>
        </div>
        <div className='absolute bottom-0 right-0 left-0  top-px'>
        <p className='font-bold text-yellow-100 text-3xl'>Trade In</p>
        <p className='text-white'>Get $180-$630 in credit when you</p>
        <p className='text-white'>trade in iPhone 11 or higher</p>
        <div>
          <button className='bg-blue-600 p-2 px-4 text-white hover:bg-transparent rounded-3xl mt-4'>Get your estimate</button>
          </div>
          </div>
      </div>

      </section>
    </div>
   
  )
}

export default Grid
