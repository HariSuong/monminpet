import React from 'react'
import { HiOutlineStar, HiStar } from 'react-icons/hi2'
import BadgeCoupon from '../../assets/images/badge-coupon.png'
import RelateProduct1 from '../../assets/images/relate-product-1.png'
import RelateProduct2 from '../../assets/images/relate-product-2.png'
import { TiShoppingCart } from 'react-icons/ti'

const ProductInfo: React.FC = () => {
  return (
    <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
      <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
        Pera Pet
      </h1>
      <p className='text-gray-900 text-lg font-extralight mb-1'>
        Bột bổ sung sữa dê bổ lông tóc cho chó và mèo
      </p>
      <div className='flex mb-4'>
        <span className='flex items-center'>
          <HiStar className='text-yellow-500 w-4 h-4' />
          <HiStar className='text-yellow-500 w-4 h-4' />
          <HiStar className='text-yellow-500 w-4 h-4' />
          <HiStar className='text-yellow-500 w-4 h-4' />
          <HiOutlineStar className='text-yellow-500 w-4 h-4' />

          <span className='text-yellow-500 italic text-sm font-extralight ml-3'>
            (7 đánh giá | Đã bán: 123)
          </span>
        </span>
      </div>

      <div className='mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'>
        <div className='flex items-center mb-5 space-x-3'>
          <span className='text-xl font-semibold'>Giá</span>
          <p className='bg-black px-3 py-2 text-white font-semibold text-2xl'>
            990.000đ
          </p>
          <p className='text-[#A9829C] font-medium line-through'>1.200.000đ</p>
        </div>
        <div className='flex items-center mb-5 space-x-3'>
          <span className='text-xl font-semibold'>Mã giảm giá</span>
          <div className='relative'>
            <img
              src={BadgeCoupon}
              alt='badge-coupon'
              className='w-full object-cover'
            />
            <span className='absolute bottom-0 top-0 left-0 right-0 h-full w-full font-medium text-center text-white pointer-events-none flex items-center justify-center'>
              KM01
            </span>
          </div>
        </div>
        {/* Tạo một div giống cấu trúc như trên nhưng nối dung là size, background màu sắc #D89C17 và có border màu đen, bên trong là số kg, ví dụ 180kg */}
        <div className='flex items-center mb-5 space-x-3'>
          <span className='text-xl font-semibold'>Size</span>
          <div className='bg-[#D89C17] px-3 py-2 text-black border border-black font-semibold text-lg'>
            180g
          </div>
        </div>

        <div className='flex items-center mb-5 space-x-3'>
          <span className='text-xl font-semibold'>Số lượng</span>
          {/* Tôi muốn tạo một input group có dấu trừ, số lượng và dấu trừ */}
          <div className='flex items-center'>
            <button className='hover:bg-gray-300 px-4 py-2 border border-gray-900 border-r-0'>
              -
            </button>
            <input
              type='text'
              className='w-12 px-4 py-2 border border-gray-900 text-center active:bg-gray-100 focus:outline-none'
              value='1'
            />
            <button className='hover:bg-gray-300 px-4 py-2 border border-gray-900 border-l-0'>
              +
            </button>
          </div>
        </div>

        <div className='flex'>
          <button className='hover:bg-[#D89C17] bg-[#F8EDD8] text-black px-6 py-2 border border-black flex items-center font-semibold'>
            <TiShoppingCart className='w-8 h-8 mr-2 font-thin' />

            <span>Thêm vào giỏ hàng</span>
          </button>
          <button className='hover:bg-[#D89C17] bg-gradient-to-r from-[#8F0000] via-[#920000] to-[#B20101] text-white py-2 px-3 ml-4 font-semibold text-lg'>
            Mua ngay
          </button>
        </div>
        <div className='mt-5'>
          <p className='text-xl italic font-semibold'>Kết hợp tốt với:</p>

          <div className='ml-2 space-x-2 mt-5'>
            {/* Tôi muốn tạo một thẻ div sản phẩm kèm theo là flex gồm có 1 bên là 1 thumbnai, bên cạnh thumbnail sẽ 1 cụm, gồm dòng 1 là tên, dòng 2 là giá, bên cạnh giá là "-Thêm vào giỏ hàng", cả thẻ div có background là (#F8EDD8)*/}
            <div className='flex items-center bg-[#F8EDD8] pe-2 mb-3'>
              <img
                src={RelateProduct1}
                alt='thumbnail'
                className='w-20 h-20 object-cover bg-white'
              />
              <div className='ml-4'>
                <p className='text-sm italic font-extralight'>
                  Bột bổ sung Probiotics cho chó và mèo
                </p>
                <div className='flex gap-1'>
                  <p className='text-base font-bold'>990.000đ</p>
                  <p className='text-base font-bold italic'>
                    {' '}
                    - Thêm vào giỏ hàng
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center bg-[#F8EDD8] pe-2 mb-3'>
              <img
                src={RelateProduct2}
                alt='thumbnail'
                className='w-20 h-20 object-cover bg-white'
              />
              <div className='ml-4'>
                <p className='text-sm italic font-extralight'>
                  Dầu cá + Vitamin E bổ sung cho chó và mèo
                </p>
                <div className='flex gap-1'>
                  <p className='text-base font-bold'>990.000đ</p>
                  <p className='text-base font-bold italic'>
                    {' '}
                    - Thêm vào giỏ hàng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
