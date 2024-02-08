import React from 'react'
import Image from 'next/image'
// import {List} from 'lucide-react'
import Link from 'next/link'

function ProductItem({product}) {

    return (
        <>

        <h1>
            {product?.attributes?.titel}
        </h1>
		<Image src={product?.attributes?.banner?.data?.attributes?.url}
			alt='banner-card'
			width={400}
			height={350}
			className='rounded-t-lg h-[170px] object-cover'
			/>
		
        
        
        </>
	)
}

export default ProductItem
