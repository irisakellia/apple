import React from 'react'
import Header from '../components/header/Header';
import Taskbar from '../compatible/taskbar/Taskbar';
import Whites from '../compatible/whites/Whites'
import Footer from '../components/footer/Footer'
import Words from '../components/words/Word';

const SupportPage = () => {
  return (
    <div className='bg-black'>
      <Header/>
      <Taskbar/>
      <Whites/>
      <Footer/>
      <Words/>
      
    </div>
  )
}

export default SupportPage
