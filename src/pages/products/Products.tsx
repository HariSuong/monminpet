import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
import Pagination from '../../components/Pagination'
import ProductList from '../../components/products/ProductList'
import { useProducts } from '../../components/products/useProducts'

const Products: React.FC = () => {
  const { products, isPending, error } = useProducts()

  if (isPending) return <Loading />
  if (error) return <div>Error fetching products.</div>

  return (
    <>
      <Banner />
      <div className='font-[sans-serif] bg-gray-100'>
        <div className='p-4 mx-auto lg:max-w-7xl sm:max-w-full'>
          <ProductList products={products} />
          <Pagination />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Products
