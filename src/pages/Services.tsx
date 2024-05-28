import React from 'react'
import VideoBanner from '../assets/images/services/banner.mp4'
import BaoHiemThuCung from '../assets/images/services/bao-hiem-thu-cung.png'
import VetCoach from '../assets/images/services/vetcoach.png'
import Banner from '../components/Banner'

import Loading from '../components/Loading'
import ServicesList from '../components/services/ServicesList'
import { useServicesCat } from '../components/services/useServicesCat'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Services: React.FC = () => {
  const { data, isPending, error } = useServicesCat()

  if (isPending) return <Loading />

  if (error) return <div>Error fetching products.</div>

  return (
    <>
      <Banner type='video' url={VideoBanner} />
      <Banner type='image' url={VetCoach} />
      {data && <ServicesList servicesList={data} />}
      <Banner type='image' url={BaoHiemThuCung} to='/pet-insurance' />
      {data && <ContactForm servicesList={data} />}
      <Footer />
    </>
  )
}

export default Services
