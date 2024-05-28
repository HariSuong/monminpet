import React, { useRef } from 'react'
import Banner from '../assets/images/services/bannerthuy.png'
import VideoContent from '../assets/images/services/baohiemthuy.mp4'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { useServicesCat } from '../components/services/useServicesCat'
import Loading from '../components/Loading'

const PetInsurance: React.FC = () => {
  const { data, isPending, error } = useServicesCat()
  const videoRef = useRef<HTMLVideoElement>(null)

  if (isPending) return <Loading />

  if (error) return <div>Error fetching products.</div>

  const handleVideoEnd = () => {
    if (videoRef.current) {
      setTimeout(() => {
        videoRef.current?.play()
      }, 10000) // 30 giây
    }
  }

  return (
    <div className='flex flex-col justify-center'>
      <img src={Banner} alt='service' className='w-full' />
      <video
        ref={videoRef}
        className='w-full object-cover'
        src={VideoContent}
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd}
      />
      {data && <ContactForm servicesList={data} />}
      <Footer />
    </div>
  )
}

export default PetInsurance
