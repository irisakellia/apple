import React from 'react'

import Header from '../components/header/Header.jsx';
import Taskbar from '../companion/taskbar/Taskbar.jsx';
import Credit from '../companion/credit/Credit.jsx';
import Footer from '../components/footer/Footer.jsx';

const IphonePage = () => {
  return (
    <div className='bg-black'>
      <Header/>
      <Taskbar/>
      <Credit/>
      <Footer/> 
     
    </div>
  )
}

export default IphonePage
