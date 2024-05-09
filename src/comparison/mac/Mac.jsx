import React from 'react'

import xlarge_2xmv from '../../assets/mac/videos/xlarge_2x.mp4';

const Mac = () => {
  return (
    <div>
      <div>
        <h1 className='text-3xl font-extrabold ml-8 mt-10'>Mac</h1>
      </div>
      <div className='float-right mr-4 font-medium'>
        <p>If you can dream it,</p>
        <p>Mac can do it</p>
      </div>

      <div>
        <video 
        source
        src={xlarge_2xmv}
        autoPlay
        className='rounded-3xl w-[980px] h-auto ml-20 mr-20 mt-20'/>
      </div>
      <div className='mt-20 ml-10 font-extrabold text-3xl h-20'>
        <p>Get to know Mac.</p>
      </div>
    </div>
  )
}

export default Mac
