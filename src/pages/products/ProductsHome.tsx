import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import ProductsCat from '../../components/products/ProductsCat'

const ProductsHome: React.FC = () => {
  return (
    <>
      <Banner />
      <div className='bg-white'>
        <ProductsCat />
      </div>
      <Footer />
    </>
  )
}

export default ProductsHome
