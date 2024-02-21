'use client'
import Breadcrumb from '@/app/_components/Breadcrumb';
import ProductApis from '@/app/_utils/ProductApis'
import React, { useEffect, useState } from 'react'
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import { usePathname } from "next/navigation";

function ProductDetails({ params }) {
  const path = usePathname();
  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProductById_();
  }, [params.productId])
  const getProductById_ = () => {
    ProductApis.getProductById(params.productId).then((res) => {
      console.log(res.data.data);
      setProductDetails(res.data.data);
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="px-10 py-8 md:px-28">
      <Breadcrumb />
      <div className="grid justify-around grid-cols-1 gap-5 mt-10 sm:gap-0 sm:grid-cols-2">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
    </div>
  )
}

export default ProductDetails
