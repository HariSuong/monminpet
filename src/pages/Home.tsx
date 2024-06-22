import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import PetCat from '../components/home/PetCat'
import FeedBack from '../components/FeedBack'
import Brand from '../components/home/Brand'

import BannerImg from '../assets/images/banner-tam-thoi-home.png'
import BiQuyetThuCung from '../assets/images/home/thucanthucung.mp4'
import CamKetHuongVi from '../assets/images/home/camketthucung.mp4'
import TiemChungChoThu from '../assets/images/home/tiemchungchothu.mp4'
import DichVuCungCao from '../assets/images/home/dichvucungcap-codichvu.mp4'
import VideoDog from '../assets/images/services/banner.mp4'

const Home: React.FC = () => {
  return (
    <>
      <Banner type='image' url={BannerImg} />
      <div
        id='observer-target'
        style={{ height: '50px', backgroundColor: 'transparent' }}>
        <PetCat />
        <Banner type='video' url={BiQuyetThuCung} time={1000} />
        <Banner type='video' url={CamKetHuongVi} time={3000} />
        <Banner type='video' url={TiemChungChoThu} time={3000} />
        <Banner type='video' url={DichVuCungCao} time={3000} />
        <FeedBack />
        <Brand />
        <Banner type='video' url={VideoDog} />
        <Footer />
      </div>
    </>
  )
}

export default Home
