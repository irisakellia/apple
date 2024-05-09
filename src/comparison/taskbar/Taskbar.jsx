import React from 'react'

import airnew from '../../assets/mac/images/airnew.png';
import compare from '../../assets/mac/images/compare.png';
import displays from '../../assets/mac/images/displays.png';
import imac from '../../assets/mac/images/imac.png';
import macbookpro from '../../assets/mac/images/macbookpro.png';
import macpro from '../../assets/mac/images/macpro.png';
import minimac from '../../assets/mac/images/minimac.png';
import sets from '../../assets/mac/images/sets.png';
import shopmac from '../../assets/mac/images/shopmac.png';
import studio from '../../assets/mac/images/studio.png';



const Taskbar = () => {
  return (
    <div>
      <section className='flex inline  ml-20 mr-20 mt-10 justify-between gap-10'>
        <div>
            <img src={airnew} alt=''/>
        
            <div className='text-black text-opacity-50 text-xs'>
                <p>MacBook Air</p>
                <p className='text-orange-500'>New</p>
            </div>
        </div>
        <div>
            <img src={macbookpro} alt=''/>
            <div className='text-black text-opacity-50 text-xs'>
                <p>MacBook Pro</p>
            </div>
        </div>
        <div>
            <img src={imac} alt=''/>
            <div className='text-black text-opacity-50 text-xs'>
                <p>iMac</p>
            </div>
        </div>
        <div>
            <img src={minimac} alt=''/>
            <div className='text-black text-opacity-50 text-xs'>
                <p>Mac mini</p>
            </div>
        </div>
        <div>
            <img src={studio} alt=''/>
            <div className='text-black text-opacity-50 text-xs'>
                <p>Mac studio</p>
            </div>
        </div>
        <div>
            <img src={macpro} alt=''/>
            <div className='text-black text-opacity-50 text-xs'>
                <p>Mac Pro</p>
            </div>
        </div>
        <div>
            <img src={compare} alt=''/>
            <div className='text-black text-opacity-50 text-xs'>
                <p>compare</p>
            </div>
        </div>
        <div>
            <img src={displays} alt=''/>
            <div className='text-black text-opacity-50 text-xs'>
                <p>Displays</p>
            </div>
        </div>
        <div>
            <img src={sets} alt='' className='h-20 w-20'/>
            <div className='text-black text-opacity-50 text-xs'>
                <p>Accessories</p>
            </div>
        </div>
        <div>
            <img src={shopmac} alt=''/>
            <div className='text-black text-opacity-50 text-xs'>
                <p>Shop Mac</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Taskbar
