import React, { useRef } from 'react'
import VideoFreature from '../../assets/images/product/services-prodct.mp4'

const ProductFeature: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnd = () => {
    if (videoRef.current) {
      setTimeout(() => {
        videoRef.current?.play()
      }, 3000) // 30 giây
    }
  }
  return (
    <div className='flex justify-center'>
      {/* <img src={ImgService} alt='service' className='w-3/4' /> */}
      <video
        ref={videoRef}
        className='w-3/4 h-4/5 object-cover'
        src={VideoFreature}
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd}
      />
    </div>
  )
}

export default ProductFeature
