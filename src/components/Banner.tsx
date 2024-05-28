import React, { useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
interface BannerProps {
  type: string
  url: string
  position?: string
  to?: string
}

const Banner: React.FC<BannerProps> = ({ type, url, position, to }) => {
  const [searchParams] = useSearchParams()
  const catId = Number(searchParams.get('catId'))

  console.log(catId)

  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnd = () => {
    if (videoRef.current) {
      setTimeout(() => {
        videoRef.current?.play()
      }, 100) // 1 giây
    }
  }

  // const { products } = useProducts()
  const image = to ? (
    <Link to={to}>
      <div className='max-w-full mx-auto text-center relative'>
        <img src={url} className='w-full' />
        <div className='absolute -right-4 bottom-12'>
          <p className='bg-orange-100 px-10 py-4 font-semibold text-lg rounded-s-full text-center'>
            {position === 'product' && (
              <Link to={`/products/?catId=2`}>
                Đồ của <br /> SẾP {catId === 1 ? 'CÚN' : 'MÈO'} ở<br /> đây nè
              </Link>
            )}
          </p>
        </div>
      </div>
    </Link>
  ) : (
    <div className='max-w-full mx-auto text-center relative'>
      <img src={url} className='w-full' />
      <div className='absolute -right-4 bottom-12'>
        <p className='bg-orange-100 px-10 py-4 font-semibold text-lg rounded-s-full text-center'>
          {position === 'product' && (
            <Link to={`/products/?catId=2`}>
              Đồ của <br /> SẾP {catId === 1 ? 'CÚN' : 'MÈO'} ở<br /> đây nè
            </Link>
          )}
        </p>
      </div>
    </div>
  )

  const content =
    type === 'video' ? (
      <div className='flex justify-center'>
        {/* <img src={ImgService} alt='service' className='w-3/4' /> */}
        <video
          ref={videoRef}
          className='w-full object-cover'
          src={url}
          autoPlay
          loop={false}
          muted
          onEnded={handleVideoEnd}
        />
      </div>
    ) : (
      image
    )

  return content
}

export default Banner
