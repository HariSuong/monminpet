import React from 'react'
import ProductItem from './ProductItem'

interface Product {
  id: number
  name: string
  desc: string
  hot: number
  thumb: string
  price: number
  price_old: number
  video: string
  type_thumb_video: string
}

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  console.log(products)

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6'>
      {products.map(product => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.desc}
          price={`${product.price}đ`}
          imageUrl={product.thumb}
          isHot={product.hot === 1}
        />
      ))}
      {/* <ProductItem
        name='FERA PET'
        description='Bột hỗ trợ xương và khớp Hip + Joint Dog cho chó'
        price='1.200.000đ'
        imageUrl='https://readymadeui.com/images/product13.webp'
        isHot={true}
      />
      <ProductItem
        name='FERA PET'
        description='Bột hỗ trợ bàng quang cho chó và mèo'
        price='1.200.000đ'
        imageUrl='https://readymadeui.com/images/product14.webp'
        isNew={true}
      /> */}
    </div>
  )
}

export default ProductList
