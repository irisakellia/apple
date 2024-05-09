import React from 'react'

import mca from '../../assets/mac/im/mca.jpg'
import tv from '../../assets/mac/im/tv.jpg'

const Essentials = () => {
  return (
    <div className='ml-20'>
     <div className='mt-20'>

        <p className=' ml-10 font-bold text-4xl '>Mac essentials .</p>
        </div> 
        <p className=' mr-10 float-right text-blue-500 text-sm'>All Mac accessories</p>
        <div className='inline-flex'>
    <div className='mt-20 h-60 rounded-3xl border border-gray-100 bg-gray-100 p-2'>
        <img src={mca} className='h-40 w-50 ml-10' />
    </div>
    <div className='mt-20 h-60 rounded-3xl border border-gray-100 bg-gray-100 p-2 ml-20'>
        <img src={tv} className='h-40 w-50 ml-10' />
    </div>
</div>


    </div>
    
  )
}

export default Essentials
