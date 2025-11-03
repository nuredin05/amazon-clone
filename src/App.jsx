import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Carousel from './components/caraousel/CarouselEffect'
import Category from './components/catagory/category'
function App() {


  return (
    <>
     <Header />
     <Carousel />
     <Category/>
    </>
  )
}

export default App
