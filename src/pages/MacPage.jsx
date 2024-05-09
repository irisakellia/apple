import React from 'react'

import Header from '../components/header/Header.jsx';
import Essentials from '../comparison/essentials/Essentials.jsx';
import Get from '../comparison/get/Get.jsx';
import Explore from '../comparison/explore/Explore.jsx';
import Know from '../comparison/know/Know.jsx';
import Mac from '../comparison/mac/Mac.jsx';
import Footer from '../components/footer/Footer.jsx';
import Taskbar from '../comparison/taskbar/Taskbar.jsx';
import Word from '../components/words/Word.jsx';


const MacPage = () => {
  return (
    <div>
      
        <Header/>
        <Taskbar/>
        <div className='bg-gray-50'>
        <Get/>
        </div>
        <Mac/>
        <Explore/>
        <div className=''>
        <Know/>
          </div>
          <Essentials/>
<Word/>
          <Footer/>
        
        {/*
        
     
      
      
      <Know/>
     
      <Place/>
      <Significant/> */}
      

    </div>
  )
}

export default MacPage


