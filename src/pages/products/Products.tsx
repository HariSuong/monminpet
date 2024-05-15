import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Pagination from '../../components/Pagination'
import ProductList from '../../components/products/ProductList'

const Products: React.FC = () => {
  return (
    <>
      <Banner />
      <div className='font-[sans-serif] bg-gray-100'>
        <div className='p-4 mx-auto lg:max-w-7xl sm:max-w-full'>
          <ProductList />
          <Pagination />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Products
