import React, { useEffect } from 'react'

function ProductDetails({params}) {
   
  return (
    <div>
      {params.productId}
    </div>
  )
}

export default ProductDetails
