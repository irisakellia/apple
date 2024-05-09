import React from 'react'
import bent from '../../assets/comp/bent.png';
import multiple from '../../assets/comp/multiple.png';
import phones from '../../assets/comp/phones.png'

const Credit = () => {
  return (
    <div>
        <div>
            <p className='text-white ml-96 mt-10 font-serif'>EVERYTHING YOU NEED TO KNOW !</p>
        </div>
      <div className=''>
        <img src={bent} alt='bent' className='items-center ml-96 mt-10'/>
      </div>
      <div className='font-serif'>
        <p className='text-red-950 text-2xl font-bold font-serif ml-6'>The Insides</p>
        <p className='text-white ml-8 text-sm mt-4'>The iphone xs and xs max use the new A12 Bionic chip . Both phones</p>
        <p className='text-white ml-8 text-sm'>have a silicone and a 4-core which are lower and more powerful</p>
        <p className='text-white ml-8 text-sm'>than iphone x land trigger .</p>
      </div>

      <div className='text-red-950 font-serif text-xl ml-96  mt-10'>
        <p>No other phone</p>
        <p>is like iPhone</p>
      </div>
      <div className='ml-60 mt-10'>
        <img src={multiple} alt='phone' className='w-[500px]' />
</div>    

<div className='mt-20 text-white'>
    <p className=' ml-6 font-serif text-2xl text-red-950'>Exceptional materials</p>
    <p className='ml-6 mt-4 font-serif text-xs'>Our phones has the best reliable and strong os that</p>
    <p className='ml-6 font-serif text-xs'>make them strong , the titanium is very strong</p>
</div>
<div>
    <img src={phones} alt='phone' className='ml-96 w-[200px] mb-96'/>
</div>

<div>
   
</div>

    </div>
  );
};

export default Credit ;
