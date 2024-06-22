import React from 'react'
import IconQuote from '../assets/images/icon/iconquote.png'
import Title from './Title'
import SlideFeedback from './SlideFeedback'

const FeedBack: React.FC = () => {
  return (
    <div className='mt-40 mx-20 h-screen relative'>
      <img src={IconQuote} className='w-12 absolute -top-10 -left-20' />
      <Title title='FEEDBACK' subtitle='khách hàng nói gì' />
      <div className='lg:px-14 xl:px:28'>
        <SlideFeedback />
      </div>
    </div>
  )
}

export default FeedBack
