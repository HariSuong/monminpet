import React from 'react'
import Banner from '../components/Banner'
import VideoBanner from '../assets/images/services/banner.mp4'
import VetCoach from '../assets/images/services/vetcoach.png'
import Avatar1 from '../assets/images/services/avatar1.png'
import { Link } from 'react-router-dom'

const Services: React.FC = () => {
  return (
    <>
      <Banner type='video' url={VideoBanner} />
      <Banner type='image' url={VetCoach} />
      <div className='py-4 sm:max-w-full'>
        <div className='flex h-full overflow-hidden items-center py-12 lg:gap-24'>
          <div className='w-full lg:w-2/3 flex flex-col justify-center items-start p-10 bg-white lg:pl-24 '>
            <div className='transition-transform transform translate-x-0 delay-500 duration-1000'>
              <h1 className='text-base md:text-2xl lg:text-4xl font-bold mb-4 leading-7'>
                NỘI KHOA{' '}
              </h1>
            </div>
            <div className='transition-transform transform translate-y-0 delay-700 duration-1000 leading-8'>
              <p className='text-xs md:text-base lg:text-lg'>
                Các bệnh thường gặp trên khoa nội: viêm gan, suy giảm chức năng
                gan, tắt mật, do sỏi, suy thận cấp và mãn, suy tim do thiếu máu,
                do cao huyết áp, do hở van tim, do thoái hóa cơ tim, bao gồm cả
                các bệnh ở tụy, lách, bàng quang, các trường hợp ung thư, rối
                loạn chuyển hóa, hay trúng độc, …. Ngoài ra còn điều trị các
                bệnh lý thuộc bệnh nhiễm như:
              </p>
              <ul className='list-disc'>
                <li>Ghẻ lở, dị ứng, viêm da, nấm da....</li>
                <li>Tiêu chảy, kiết lị, ký sinh trùng máu.</li>
                <li>
                  Nhiễm trùng trên các cơ quan hô hấp, tiêu hóa, tiết niệu...
                </li>
                <li>
                  Tiêu chảy cấp tính ra máu, viêm phổi, viêm dây thần kinh do
                  virus
                </li>
              </ul>

              <Link
                to='/'
                className='px-4 py-2 bg-[#F8EDD8] italic font-semibold text-lg'>
                ĐỌC THÊM{' '}
              </Link>
            </div>
          </div>
          <div className='w-full lg:w-3/4 relative'>
            <img src={Avatar1} className='h-1/2 object-cover' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
