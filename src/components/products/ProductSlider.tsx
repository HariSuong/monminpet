import React from 'react'
import Slider from 'react-slick'
import { settings } from '../../ultis/SettingSlider'
import ProductItem from './ProductItem'

interface Product {
  products: {
    id: number
    name: string
    thumb: string
    price: number
    price_old: number
    video: string
    type_thumb_video: string
    discount: number
  }[]
}

const ProductSlider: React.FC<Product> = ({ products }) => {
  return (
    <Slider {...settings}>
      {products.map(product => (
        <ProductItem
          key={product.id}
          name={product.name}
          description='Bột hỗ trợ xương và khớp Hip + Joint Dog cho chó'
          price={product.price.toString()}
          imageUrl={product.thumb}
          isHot={true}
        />
      ))}
    </Slider>
  )
}

export default ProductSlider
