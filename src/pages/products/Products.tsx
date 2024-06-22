import React from 'react'
import { useProducts } from '../../components/products/useProducts'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
import Pagination from '../../components/Pagination'
import ProductList from '../../components/products/ProductList'

import BannerImg from '../../assets/images/product/banner-product.png'

const Products: React.FC = () => {
  const { products, loading, error, goToPage, currentPage } = useProducts()

  if (loading) return <Loading />
  if (error) return <div>Error fetching products.</div>

  if (!products) return null // Kiểm tra nếu products là null

  const { links, last_page, data } = products

  return (
    <>
      <Banner url={BannerImg} type='image' position='product' />
      <div className='font-[sans-serif] bg-gray-100'>
        <div className='p-4 mx-auto lg:max-w-7xl sm:max-w-full'>
          <ProductList products={data} />
          <Pagination
            pageInfo={{ current_page: currentPage, links, last_page }}
            onPageChange={goToPage}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Products
