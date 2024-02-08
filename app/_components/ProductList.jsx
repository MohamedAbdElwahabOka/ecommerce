import { Itim } from 'next/font/google'
import React from 'react'
import ProductItem from './ProductItem'

function ProductList({latestProducts}) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10'>
      {latestProducts.map(item=>(
       < ProductItem product={item} key = {item.id}/>
      ))}
    </div>
  )
}

export default ProductList
