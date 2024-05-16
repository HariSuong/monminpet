import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Pagination from '../../components/Pagination'
import ProductList from '../../components/products/ProductList'
import { useProducts } from '../../components/products/useProducts'
import { useLocation } from 'react-router'
import Loading from '../../components/Loading'

const Products: React.FC = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const categoryId: string | number | null = searchParams.get('categoryId')

  const categoryIdAsNumber: number | null = categoryId
    ? parseInt(categoryId)
    : null

  const {
    data: products,
    isLoading,
    isError
  } = useProducts(categoryIdAsNumber || 1, 1) // Gọi hook useProducts với categoryId

  if (isLoading) return <Loading />
  if (isError) return <div>Error fetching products.</div>

  return (
    <>
      <Banner />
      <div className='font-[sans-serif] bg-gray-100'>
        <div className='p-4 mx-auto lg:max-w-7xl sm:max-w-full'>
          <ProductList products={products || []} />
          {/* // Provide a default value of an empty array if products is undefined */}
          <Pagination />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Products
