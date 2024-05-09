import React from 'react'
import Header from '../components/header/Header'
import Taskbar from '../components/taskbar/Taskbar';
import Items from '../components/items/Items';
import Grid from '../components/grids/Grid';
import Slide from '../components/slides/Slide';
import Word from '../components/words/Word';
import Footer from '../components/footer/Footer';

const Homepage = () => {
  return (
    <div>
      <Header/>
      < Taskbar/>
      <Items/>
      <Grid/>
      <Slide/>
      <Word/>
      <Footer/>
    </div>
  )
}

export default Homepage
