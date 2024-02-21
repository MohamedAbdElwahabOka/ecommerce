import React from 'react'

function ProductInfo({product}) {
  return (
    <div>
                    <h2 className='text-[20px]'>{product?.attributes?.title}</h2>
					<h2 className='text-[15px] text-gray-400'>{product?.attributes?.category}</h2>
					<h2 className='text-[11px] mt-2'>{product?.attributes?.description[0]?.children[0].text}</h2>
					{/* <h2 className='text-[11px] text-gray-500 flex gap-2 mt-2 items-center'>{product?.attributes?.instantDelivery ? <BadgeCheck className='w-5 h-5 text-green-500' /> : <AlertOctagon />} Eligible For Instant Delivery</h2> */}
					<h2 className='text-[24px] text-primary mt-2'>$ {product?.attributes?.price}</h2>
    </div>
  )
}

export default ProductInfo
