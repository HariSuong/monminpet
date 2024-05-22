import React from 'react'
import Title from '../Title'
import { useProductsCat } from './useProductsCat'
import ProductSlider from './ProductSlider'
import Loading from '../Loading'

const ProductsCat: React.FC = () => {
  const { data, isPending, error } = useProductsCat()
  if (isPending) return <Loading />
  if (error) return <div>Error: {error.message}</div>

  const products = data?.map(cat => {
    if (cat.products.length === 0) return null
    return (
      <div key={cat.id}>
        <Title
          title={cat.name}
          subtitle='best seller'
          to={`/products/?catId=${cat.id}&page=1`}
        />
        <div className='font-[sans-serif] '>
          <div className='p-4 mx-auto lg:max-w-7xl sm:max-w-full'>
            <ProductSlider products={cat.products} />
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className='py-4 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8'>
      {products}
    </div>
  )
}

export default ProductsCat
