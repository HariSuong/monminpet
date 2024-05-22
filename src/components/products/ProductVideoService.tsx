import React from 'react'
import VideoService from '../../assets/images/product/video-pet-product.mp4'

const ProductVideoService: React.FC = () => {
  return (
    <div className='flex h-full overflow-hidden items-center py-12 lg:gap-24'>
      <div className='w-full lg:w-2/3 flex flex-col justify-center items-start p-10 bg-white lg:pl-24 '>
        <div className='transition-transform transform translate-x-0 delay-500 duration-1000'>
          <h1 className='text-base md:text-2xl lg:text-4xl font-bold mb-4 leading-7'>
            ĐẶT THÚ CƯNG CỦA BẠN LÊN HÀNG ĐẦU
          </h1>
        </div>
        <div className='transition-transform transform translate-y-0 delay-700 duration-1000'>
          <p className='text-xs md:text-base lg:text-lg'>
            Chúng tôi đảm bảo sản phẩm được kiểm nghiệm và chọn lọc kỹ càng bởi
            đội ngũ Bác sĩ Thú Y tại MonMin Pet giàu kinh nghiệm.
          </p>
        </div>
      </div>
      <div className='w-full lg:w-3/4 relative'>
        <video
          className='w-full h-4/5 object-cover'
          src={VideoService}
          controls
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  )
}

export default ProductVideoService
