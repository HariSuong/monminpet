import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import ProductsCat from '../../components/products/ProductsCat'

import ProductFeature from '../../components/products/ProductFeature'
import ProductVideoService from '../../components/products/ProductVideoService'
import VideoBanner from '../../assets/images/product/banner-product-home.mp4'

const ProductsHome: React.FC = () => {
  return (
    <>
      <Banner type='video' url={VideoBanner} />
      <div className='bg-white'>
        <ProductsCat />
        <ProductFeature />
        <ProductVideoService />
      </div>
      <Footer />
    </>
  )
}

export default ProductsHome
