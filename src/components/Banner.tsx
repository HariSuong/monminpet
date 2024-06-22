import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Video from './Video'

interface BannerProps {
  type: string
  url: string
  position?: string
  to?: string
  time?: number
}

const Banner: React.FC<BannerProps> = ({
  type,
  url,
  position = '',
  to,
  time = 100
}) => {
  const [searchParams] = useSearchParams()
  const catId = Number(searchParams.get('catId'))

  const image = to ? (
    <Link to={to}>
      <div className='max-w-full mx-auto text-center relative z-10'>
        <img src={url} className='w-full' />
        {position === 'product' && (
          <div className='absolute right-0 bottom-12'>
            <p className='bg-orange-100 px-10 py-4 font-semibold text-lg rounded-s-full text-center'>
              {catId === 1 && (
                <Link to={`/products/?catId=2`}>
                  Đồ của <br /> SẾP MÈO ở<br /> đây nè
                </Link>
              )}
              {catId === 2 && (
                <Link to={`/products/?catId=1`}>
                  Đồ của <br /> SẾP CÚN ở<br /> đây nè
                </Link>
              )}
            </p>
          </div>
        )}
      </div>
    </Link>
  ) : (
    <div className='max-w-full mx-auto text-center relative z-10'>
      <img src={url} className='w-full' />
      {position === 'product' && (
        <div className='absolute right-0 bottom-12'>
          <p className='bg-orange-100 px-10 py-4 font-semibold text-lg rounded-s-full text-center'>
            {catId === 1 && (
              <Link to={`/products/?catId=2`}>
                Đồ của <br /> SẾP MÈO ở<br /> đây nè
              </Link>
            )}
            {catId === 2 && (
              <Link to={`/products/?catId=1`}>
                Đồ của <br /> SẾP CÚN ở<br /> đây nè
              </Link>
            )}
          </p>
        </div>
      )}
    </div>
  )

  const content = type === 'video' ? <Video url={url} time={time} /> : image

  return content
}

export default Banner
