import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductCard from '../../components/product/ProductCard'
import { ProductUrl } from '../../../api/endPoints'
import classes from './productDetail.module.css'


export default function ProductDetail() {

  const [productId]=useParams();
  const [products, setProducts]=useState();

  useEffect(()=>{
  axios.get(`${ProductUrl}/product/${productId}`)
  .then((res)=>{
    setProducts(res.data)
   setProducts(res.data)
  }).catch((err)=>{
    console.log(err);
  })
  },[])
  
  return (
    <div>
      <ProductCard product={products}/>
    </div>
  )
}
