import React from 'react'

import caricon from '../../assets/mage/caricon.png';
import keeper from '../../assets/mage/keeper.png';
import images from '../../assets/mage/images.png';
import macchip from '../../assets/mage/macchip.png';
import paye from '../../assets/mage/paye.png';
import store from '../../assets/mage/store.png';
import watch from '../../assets/mage/watch.png';

const Sliders = () => {
  return (
    <div>
      <section className='grid grid-cols-5 gap-2 mt-10 '>
        <div className='border-2 border-white rounded-lg p-4 bg-white ml-2 w-56'>
            <img src={caricon} className='h-10 w-10 mt-2'/>
            <div className='font-medium text-xl'>
                <p>Enjoy <span className='text-pink-500'>two-hour delivery</span></p>
                <p>from an Apple Store,</p>
                <p><span>free delivery, </span>or <span className='text-pink-500'>easy</span></p>
                <p><span className='text-pink-500'>pickup.<sup className='text-xs'>2</sup></span></p>
            </div>
        </div>
        <div className='border-2 border-white rounded-lg p-4 bg-white  w-56 '>
            <img src={paye} className='h-10 w-10 mt-2'/>
            <div className='font-medium text-xl'>
<p>Pay in full or <span className='text-orange-500'>pay over</span></p>
<p><span className='text-orange-500'>time.</span> Your choice .</p>
            </div>
        </div>
        <div className='border-2 border-white rounded-lg p-4 bg-white w-56'>
            <img src={images} className='h-10 w-10'/>
            <div className='font-medium text-xl'>
                <p>Make them yours.</p>
                <p className='text-pink-500'>Engrave a mix of emoji ,</p>
                <p className='text-pink-500'>names, and numbers</p>
                <p className='text-pink-500'>for</p>
            </div>
        </div>
        <div className='border-2 border-white rounded-lg p-4 bg-white w-56'>
            <img src={watch} className='h-10 w-10'/>
            <div className='font-medium text-xl'>
                <p className='text-orange-500'>Choose a case. Pick a</p>
                <p className='text-orange-500'>band.<span className='text-black'>Make Apple</span></p>
                <p className='text-orange-500'><span className='text-black'>Watch </span> all your own. </p>
            </div>
        </div>
        <div className='border-2 border-white rounded-lg p-4 bg-white w-56'>
            <img src={macchip} className='h-10 w-10'/>
            <div className='font-medium text-xl'>

            <p className='text-orange-500'>Customize your Mac</p>
                <p className='text-black'>with <span className='text-orange-500'>chip,memory,</span></p>
                <p className='text-orange-500'>storage , <span className='text-black'>and color </span>  </p>
            </div>
        </div>
        
      </section>

      <div className='mt-10 ml-4 font-bold text-2xl'>
        <p>Help is here .<span className='text-black text-opacity-50'> whenever and however you need it</span></p>
      </div>
    </div>
  )
}

export default Sliders
