import React from 'react'
import Image from 'next/image'
import {List} from 'lucide-react'
import Link from 'next/link'

function ProductItem({product}) {

    return (
        <div className='p-1 hover:cursor-pointer'>
		<Image src={product?.attributes?.banner?.data?.attributes?.url}
			alt='banner-card'
			width={400}
			height={350}
			className='rounded-t-lg h-[170px] object-cover'
			/>
			<div className='flex items-center justify-between p-3 rounded-b-lg bg-gray-50'>
			<div>
				<h2 className='text[12px] font-medium line-clamp-1'>
					{product?.attributes?.titel}
				</h2>
				<h2 className='text-[10px] text-gray-400 flex gap-1 items-center'>
				<List className='w-4 h-4' />{product?.attributes?.category}
				</h2>
			</div>
			<h2>{product?.attributes?.price}</h2>
			</div>
        </div>
	)
}

export default ProductItem
