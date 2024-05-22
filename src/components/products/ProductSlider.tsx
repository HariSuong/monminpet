import React from 'react'
import Slider from 'react-slick'
import { ProductListProps } from '../../types/products'
import { settings } from '../../ultis/SettingSlider'
import ProductItem from './ProductItem'

const ProductSlider: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Slider {...settings}>
      {products.map(product => (
        <ProductItem
          key={product.id}
          id={product.id} // Add this line
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
