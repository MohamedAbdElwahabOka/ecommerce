'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis'
// import {ArrowRight} from 'lucide-react'
function ProductSection() {
    const [latestProducts, setLatestProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
useEffect(()=>{
    getLatestProducts_();
},[])

	const getLatestProducts_=()=>{
		ProductApis.getLatestProducts().then(res=>{
			console.log(res.data.data);
            setLatestProducts(res.data.data);
            // setLoading(true)

		})
    }
  return (
    <div>
       <ProductList latestProducts = {latestProducts}/>
    </div>
  )
}

export default ProductSection
