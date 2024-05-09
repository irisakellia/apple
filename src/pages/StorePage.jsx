import React from 'react'

import Experience from '../containers/experience/Experience.jsx'
import Footer from '../components/footer/Footer.jsx';
import Header from '../components/header/Header.jsx';
import Loud from '../containers/loud/Loud.jsx';
import Materials from '../containers/materials/Materials.jsx';
import People from '../containers/people/People.jsx';
import Sliders from '../containers/sliders/Sliders.jsx';
import Stores from '../containers/stores/Stores.jsx';
import Taskbar from '../containers/taskbar/Taskbar.jsx';
import Words from '../containers/words/Words.jsx';
import Word from '../components/words/Word.jsx';


const StorePage = () => {
  return (
    <div className='bg-gray-100'>
   <Header/>
   <Words/>
   <Taskbar/>
   <Experience/>
   <Materials/>
   <Loud/>
   <Sliders/>
   <People/>
   <Stores/>
   <Word/>
   <Footer/>

     {/* <Experience/>
     <Footer/>
     <Header/>
     <Loud/>
     <Materials/>
     <People/>
     <Sliders/>
     <Stores/>
     <Taskbar/>
     <Words/> */}
    </div>
  )
}

export default StorePage

