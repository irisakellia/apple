import React from 'react';
import iphone from '../../assets/comp/iphone.png';

const Taskbar = () => {
  return (
    <div>
      <div className='text-white font-bold text-4xl mt-10 ml-6'>
        <p>iPhone 13</p>
      </div>
<section  className='inline-flex gap-80'>
      <div>
        <img src={iphone} alt='iphone' className='ml-6 mt-10'/>
        </div>
        <div className='text-white mt-20 '>
          <p className='font-serif'>6.1 “ Display</p>
          <p className='font-serif'>Super Retina XDR display</p>
          <p className='font-serif ml-4 mt-2'> .Aluminium with glass back</p>
          <p className='font-serif ml-4'> .Ring/Silent switch</p>
          <p className='font-serif mt-4 mb-2'>Chipset</p>
          <p className='font-serif ml-4'>.A15 Bionic chip</p>
          <p className='font-serif ml-4'>.6-core CPU</p>
          <p className='font-serif ml-4'>.4-core GPU</p>
          <p className='font-serif ml-4'>.16-core Neural Engine</p>
          <p className='font-serif mt-4 mb-2'>Camera</p>
          <p className='font-serif ml-4'>.Dual-camera system 12MP Main Ultra Wide</p>
          <p className='font-serif ml-4'>.Portrait mode with Focus and Depth Control</p>
          <p className='font-serif mt-4 mb-2'>Battery</p>
          <p className='font-serif ml-4 mb-2'>.Up to 19 hours video playback</p>
          <p className='font-serif mb-2'>Connectivity</p>
          <p className='font-serif ml-4 '>.Superfast 5G cellular</p>
          <div>
         
            <button className='border bg-white rounded-xl p-4 mt-10 py-2 font-serif text-black'>Buy Now</button>
            <p className='font-serif text-xs mt-2'>From $399</p>
           
          </div>
        </div>
        </section>
      
      
    </div>
  );
};

export default Taskbar;
