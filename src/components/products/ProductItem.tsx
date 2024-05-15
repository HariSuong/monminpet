// src/components/ProductItem.tsx

import React from 'react'
import Badge from './Badge'

interface ProductItemProps {
  name: string
  description: string
  price: string
  imageUrl: string
  isNew?: boolean
  isHot?: boolean
}

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  description,
  price,
  imageUrl,
  isNew = false,
  isHot = false
}) => {
  return (
    <div className='bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative'>
      {/* <div className='bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4'>
        <HiOutlineHeart className='inline-block w-[18px]' />
      </div> */}
      <div className='w-11/12 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
        <img
          src={imageUrl}
          alt={name}
          className='h-full w-full object-contain'
        />
        {isNew && <Badge title='NEW!' />}
        {isHot && <Badge title='HOT!' />}
      </div>
      <div className='text-center'>
        <h3 className='text-lg font-extrabold text-gray-800'>{name}</h3>
        <p className='text-gray-600 text-sm mt-2'>{description}</p>
        <h4 className='text-lg text-gray-800 font-bold mt-4'>{price}</h4>
      </div>
    </div>
  )
}

export default ProductItem
