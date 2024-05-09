import React from 'react'

import ipen from '../../assets/ima/ipen.jpg';
import mam from '../../assets/ima/mam.jpg';
import pod from '../../assets/ima/pod.jpg';
import pods from '../../assets/ima/pods.jpg';
import pos from '../../assets/ima/pos.jpg';
import round from '../../assets/ima/round.jpg';
import sets from '../../assets/ima/sets.jpg';
import tags from '../../assets/ima/tags.jpg';



const Loud = () => {
  return (
    <div>
      <div>
        <p className=' ml-4 font-bold mt-10 mb-10'><span className='text-orange-500 text-2xl'>personalization.</span> <span className='text-black text-opacity-50 text-2xl'>Add a little reminder of your love.</span></p>
      </div>
      <section className='grid grid-cols-8 gap-2'>
        <div>
            <img src={mam} alt='mam' className='rounded-2xl h-auto'/>
            <div>
                <p className='text-black text-opacity-50 text-xs font-medium'>FREE ENGRAVING</p>
                <p className='font-medium text-sm mt-2'>Make it uniquely theirs</p>
            </div>
        </div>
        <div>
            <img src={pos} alt='pods' className='rounded-2xl'/>
            <div>
                <p className='text-orange text-xs font-medium'>Free Engraving</p>
                <p className='font-medium text-sm mt-2' >Airpods Pro (2nd generation)</p>
                <p className='font-medium text-black text-opacity-50 text-xs mt-4'>$249.00</p>
            </div>
        </div>
        <div>
            <img src={tags} alt='pods' className='rounded-2xl'/>
            <div>
                <p className='text-orange-500 text-xs font-medium'>Free Engraving</p>
                <p className='font-medium text-sm mt-2'>AirTag 4 pack</p>
                <p className='text-black text-opacity-50 text-xs mt-8 font-medium'>$99.00</p>
            </div>
        </div>

        <div>
            <img src={sets} alt='pods' className='rounded-2xl'/>
            <div>
                <p className='text-orange-500 text-xs font-medium'>Free Engraving</p>
                <p className='font-medium mt-2 text-sm'>AirPoda Max - Pink</p>
                <p  className='text-black text-opacity-50 text-xs font-medium mt-8'>$549.00</p>
            </div>
        </div>
        <div>
            <img src={pods} alt='pods'className='rounded-2xl'/>
            <div>
                <p className='text-orange-500 text-xs font-medium'>Free Engraving</p>
                <p className='font-medium text-sm mt-2'>Beats Fit Pro True Wireless</p>
                <p className='text-black text-opacity-50 font-medium text-xs mt-2'>$199.99</p>
            </div>
        </div>
        <div>
            <img src={ipen} alt='pods'className='rounded-2xl'/>
            <div>
                <p className='text-orange-500 text-xs font-medium'>Free Engraving</p>
                <p className='font-medium text-sm mt-2'>Apple Pencil (2nd generation)</p>
                  <p className='text-black text-opacity-50 text-xs mt-2 font-medium'>$129.00</p>
            </div>
        </div>
        <div>
            <img src={round} alt='pods' className='rounded-2xl'/>
            <div>
                <p className='text-orange-500 text-xs font-medium'>Free Engraving</p>
                <p className='font-medium text-sm mt-2'>Earbuds - Ivory</p>
                <p className='text-black text-opacity-50 font-medium text-xs mt-8'>$249.95</p>
            </div>
        </div>
        <div>
            <img src={pod} alt='pods'className='rounded-2xl'/>
            <div>
                <p className='text-orange-500 text-xs font-medium'>Free Engraving</p>
               <p className='font-medium text-sm mt-2'>MagSafe Charging Case</p>
                <p className='text-black text-opacity-50 text-xs font-medium mt-2'>$179.00</p>
            </div>
        </div>
      </section>

      <div>
        <p className='font-bold text-2xl mt-10 ml-4 '><span className='text-orange-500'>The Apple Store difference. </span><span className='text-black text-opacity-50'>Even more reasons to shop with us .</span></p>
        </div>
    </div>
  )
}

export default Loud


