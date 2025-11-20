import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import CarouselComponent from './components/Carousel/CarouselComponent'
import Category from './components/Category/Category'
import Product from './components/Product/Product'
import { Routing } from './Routing'
import Loader from './components/Loader/Loader'
import { DataContext } from './components/DataProvider/DataProvider'
import { auth } from './utils/firebase'
import { Type } from './utils/action.type'

function App() {
  const[{user},dispatch]=useContext(DataContext)
useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
  if(authUser){
    dispatch({
      type:Type.SET_USER,
      user:authUser
    })

    }else{
      dispatch({
        type:Type.SET_USER,
        user:null
      })
  }
})
},[])
  return (
    <>
    <Routing/>
    
     {/* <Loader/> */}
    </>
  )
}

export default App
