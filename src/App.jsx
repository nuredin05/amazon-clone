import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Carousel from './components/caraousel/CarouselEffect'
import Category from './components/catagory/Category'
import Product from './components/product/Product'
import Routing from './Router'
function App() {


  return (
    <>
     <Header />
       {/* <Carousel />
      <Category />
      <Product /> */}
      <Routing />
    </>
  )
}

export default App;
