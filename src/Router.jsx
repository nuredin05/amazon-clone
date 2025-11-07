import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Landing from './pages/Landing/Landing'
import SignIn from './pages/Auth/SignIn'
import Payment from './pages/paymet/Paymet'
import Orders from './pages/orders/Orders'
import Cart from './pages/cart/Cart'
import Result from './pages/result/Result';
import ProductDetail from './pages/productDetail/ProductDetail'
export default function Routing() {
  return (
     <Router>
          <Routes>
            <Route path ='/' element={<Landing/>}/>
            <Route path ='/Auth' element={<SignIn/>}/>
            <Route path ='/payment' element={<Payment/>}/>
            <Route path ='/orders' element={<Orders/>}/>
            <Route path ='/category/:categoryName' element={<Result/>}/>
            <Route path ='/products/:productId' element={<ProductDetail/>}/>
            <Route path ='/cart' element={<Cart/>}/>

          </Routes>
     </Router>
 
  )
}
