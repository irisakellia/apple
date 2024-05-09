import React from 'react'
import { Link } from 'react-router-dom';

import favicon1 from '../../assets/image/favicon1.png';


const Header = () => {
  return (
<div className='sticky top-0 z-50 bg-white shadow-lg'>
    <nav>
        <div className='bg-black w-full h-14 flex items-center'>
            <section className="flex justify-between w-full">
                <div className='h-8 w-8'>
                    <img src ={favicon1} alt='apple'/>
                </div>
                <div className="flex">
                    <Link className='mx-4 text-yellow-100' to={'/'}>Home</Link>
                <Link className='mx-4 text-yellow-100 'to={'/store'}>Store</Link>
                    <Link className='mx-4 text-yellow-100' to={'/mac'}>Mac</Link>
                    <Link className='mx-4 text-yellow-100' to={"/iphone"}>Phone</Link>
                    <Link className='mx-4 text-yellow-100' to={"/support"}>Support</Link>
                    
                </div>
            </section>
        </div>
    </nav>
</div>

  )
}

export default Header
