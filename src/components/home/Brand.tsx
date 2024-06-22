import React from 'react'
import Slider from 'react-slick'
import Logo1 from '../../assets/images/home/brand/logo1.png'
import Logo2 from '../../assets/images/home/brand/logo2.png'
import Logo3 from '../../assets/images/home/brand/logo3.png'
import Logo4 from '../../assets/images/home/brand/logo4.png'
import Logo5 from '../../assets/images/home/brand/logo5.png'
import Logo6 from '../../assets/images/home/brand/logo6.png'

const Brand: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // 1024px trở xuống
        settings: {
          slidesToShow: 4, // Hiển thị 4 logo
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // 768px trở xuống
        settings: {
          slidesToShow: 2, // Hiển thị 2 logo
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // 480px trở xuống
        settings: {
          slidesToShow: 2, // Hiển thị 1 logo
          slidesToScroll: 2
        }
      }
    ]
  }

  return (
    <div className='p-4 relative w-full bg-[#424040]'>
      <Slider {...settings}>
        <div>
          <img className='w-auto h-20 mx-auto' src={Logo1} />
        </div>
        <div>
          <img className='w-auto h-20 mx-auto' src={Logo2} />
        </div>
        <div>
          <img className='w-auto h-20 mx-auto' src={Logo3} />
        </div>
        <div>
          <img className='w-auto h-20 mx-auto' src={Logo4} />
        </div>
        <div>
          <img className='w-auto h-20 mx-auto' src={Logo5} />
        </div>
        <div>
          <img className='w-auto h-20 mx-auto' src={Logo6} />
        </div>
      </Slider>
    </div>
  )
}

export default Brand
