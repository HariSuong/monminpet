import React from 'react'
import ProductItem from './ProductItem'

const ProductList: React.FC = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6'>
      <ProductItem
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
      />
      <ProductItem
        name='FERA PET'
        description='Bột bổ sung sữa dê bổ lông tóc cho chó và mèo'
        price='990.000đ'
        imageUrl='https://readymadeui.com/images/product15.webp'
      />
      <ProductItem
        name='FERA PET'
        description='Bột bổ sung chất xơ Pumpkin Plus cho chó và mèo'
        price='1.200.000đ'
        imageUrl='https://readymadeui.com/images/product10.webp'
        isNew={true}
      />
    </div>
  )
}

export default ProductList
