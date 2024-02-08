import { Itim } from 'next/font/google'
import React from 'react'
import ProductItem from './ProductItem'

function ProductList({latestProducts}) {
  return (
    <div>
      {latestProducts.map(item=>(
       < ProductItem product={item} key = {item.id}/>
      ))}
    </div>
  )
}

export default ProductList
