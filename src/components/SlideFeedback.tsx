import React from 'react'
import Slider from 'react-slick'

import Lucky from '../assets/images/feedback/lucky.png'
import Cat from '../assets/images/feedback/cat.png'
import Tom from '../assets/images/feedback/tom.png'
import { HiStar } from 'react-icons/hi2'
import SampleNextArrow from './SampleNextArrow'
import SamplePrevArrow from './SamplePrevArrow'

const feedbacks = [
  {
    id: 1,
    name: 'Lucky',
    message:
      'Giao hàng đúng hẹn, chất lượng sản phẩm tuyệt vời. Săn sale được giá hời. Ưng nha!',
    avatar: Lucky
  },
  {
    id: 2,
    name: 'Cat',
    message:
      'Shop bán hàng chính hãng, sau khi sử dụng Fish oil vài ngày bé mèo nhà mình lông mềm hơn.',
    avatar: Cat
  },
  {
    id: 3,
    name: 'Tom',
    message:
      'Nên mua Probiotics nha mọi người. Mèo nhà mình hay nôn và tiêu chảy, sau khi bổ sung hết hẳn luôn í.',
    avatar: Tom
  },
  {
    id: 4,
    name: 'BoTom',
    message:
      'Nên mua Probiotics nha mọi người. Mèo nhà mình hay nôn và tiêu chảy, sau khi bổ sung hết hẳn luôn í.',
    avatar: Tom
  }
]

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     infinite: true,
    //     dots: true
    //   }
    // },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const SlideFeedback: React.FC = () => {
  return (
    <Slider {...settings}>
      {feedbacks.map(feedback => (
        <div key={feedback.id}>
          <div className='flex flex-col gap-3 mt-20 xl:space-x-16 space-x-12'>
            <div className='self-center'>
              <img
                src={feedback.avatar}
                className='xl:w-56 lg:w-40 md:w-36 w-32 mb-5'
              />
            </div>

            <div className='flex'>
              <HiStar className='fill-yellow-600' />
              <HiStar className='fill-yellow-600' />
              <HiStar className='fill-yellow-600' />
              <HiStar className='fill-yellow-600' />
              <HiStar className='fill-yellow-600' />
            </div>
            <h3 className='font-semibold xl:text-2xl lg:text-xl md:text-lg'>
              {feedback.name}
            </h3>
            <p className='lg:text-lg md:text-base'>{feedback.message}</p>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default SlideFeedback
