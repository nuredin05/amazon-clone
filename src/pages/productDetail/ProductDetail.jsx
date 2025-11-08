import React, { useEffect ,useState} from 'react'
import Layout from '../../components/layout/LayOut'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ProductUrl } from '../../../api/endPoints'
import Product from '../../components/product/Product'
import ProductCard from '../../components/product/ProductCard'

import classes from './productDetail.module.css'


 function ProductDetail() {

  
  const [products, setProducts]=useState([]);
    const {productId }=useParams()
      useEffect(()=>{
        axios.get(`${ProductUrl}/products/${productId }`)
        .then((res)=>{
          setProducts(res.data)
        }).catch((err)=>{
          console.log(err);
        })
        

      },[])

  
  return (
    <div>
      <ProductCard product={products}/>
     
    </div>
  );
}
export default ProductDetail;