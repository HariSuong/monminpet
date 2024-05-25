import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

import BannerImg from '../assets/images/banner-tam-thoi-home.png'

const Home: React.FC = () => {
  return (
    <>
      <Banner type='image' url={BannerImg} />
      <Footer />
    </>
  )
}

export default Home
