import React from 'react'
import Slider from 'react-slick'
import SampleNextArrow from '../SampleNextArrow'
import SamplePrevArrow from '../SamplePrevArrow'

interface SliderThumbProps {
  images: string[]
}

const SliderThumb: React.FC<SliderThumbProps> = ({ images }) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img
            src={images[i]}
            alt={`thumbnail-${i}`}
            style={{ width: '100%' }} // Sử dụng inline style để thiết lập width theo phần trăm
            className='h-16 object-cover mx-auto'
          />
        </a>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  return (
    <div className='slider-container w-full lg:w-1/2'>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className='flex justify-center items-center'>
            <img
              src={img}
              alt={`slide-${index}`}
              className='object-cover w-full h-auto'
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderThumb
