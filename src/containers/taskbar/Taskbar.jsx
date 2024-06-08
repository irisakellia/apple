import React from 'react'
import accessories from '../../assets/imagess/accessories.png';
import airtag from '../../assets/imagess/airtag.png';
import homepod from '../../assets/imagess/homepod.png';
import ipad from '../../assets/imagess/ipad.png';
import maczs from '../../assets/imagess/maczs.png';
import phones from '../../assets/imagess/phones.png';
import pods from '../../assets/imagess/pods.png';
import tv from '../../assets/imagess/tv.png';
import visionpro from '../../assets/imagess/visionpro.png';
import watch from '../../assets/imagess/watch.png';



const Taskbar = () => {
  return (
    <div className='bg-gray-100'>
      <div>
        <div className='font-bold text-4xl ml-10'>
            <p ><span className='text-black'>Store.</span> <span className='text-black text-opacity-50'>The best way to buy the</span></p>
            <p className='text-black text-opacity-50 mt-2'>products you love. </p>
        </div>


       
        <div className='w-50 h-50 inline-flex mt-20'>
            <div>
                <img src={maczs} alt='macs'/>
                <p className='ml-6'>Mac</p>
            </div>
            <div>
                <img src={phones} alt='macs'/>
                <p className='ml-6'>iPhone</p>
            </div>
            <div>
                <img src={ipad} alt='macs'/>
                <p className='ml-6'>iPad</p>
            </div>
            <div>
                <img src={watch} alt='macs'/>
                <p className='ml-6'>Apple Watch</p>
            </div>
            <div>
                <img src={visionpro} alt='macs'/>
                <p className='ml-6'>Apple Vision Pro</p>
            </div>
            <div>
                <img src={pods} alt='macs'/>
                <p className='ml-6'>AirPods</p>
            </div>
            <div>
                <img src={airtag} alt='macs'/>
                <p className='ml-6'>Airtag</p>
            </div>
            <div>
                <img src={tv} alt='macs'/>
                <p className='ml-6'>Apple TV 4K</p>
            </div>
            <div>
                <img src={homepod} alt='macs'/>
                <p className='ml-6'>Homepod</p>
            </div>
            <div>
                <img src={accessories} alt='macs'/>
                <p className='ml-6'>Accessories</p>
            </div>

        </div>
      </div>

      <div>
        <p className='font-bold text-2xl mt-5 mb-5 bg-gray-100'>The Latest. <span className='text-black text-opacity-50'>Take a look at what's new, right now.</span></p>
      </div>
    </div>
  )
}

export default Taskbar
