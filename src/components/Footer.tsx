import React from 'react'
import { Link } from 'react-router-dom'
import LogoFooter from '../assets/images/logo/logo-footer.png'
import IconFb from '../assets/images/social/facebook.png'
import IconZalo from '../assets/images/social/zalo.png'
import IconInsta from '../assets/images/social/instagram.png'
import IconYtb from '../assets/images/social/ytb.png'
import IconShopee from '../assets/images/social/cart-shoppee.png'
import IconLazada from '../assets/images/social/lazada.png'
import IconTiktok from '../assets/images/social/tiktok.png'

import IconAdress from '../assets/images/icon/icon-address.png'
import IconPhone from '../assets/images/icon/icon-phone.png'
import IconEmail from '../assets/images/icon/icon-email.png'

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#424040] px-10 py-28 font-[sans-serif] tracking-wide'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-16 gap-8'>
        <div className='lg:flex lg:items-center'>
          <a href='javascript:void(0)'>
            <img src={LogoFooter} alt='MonMinPet' className='w-full' />
          </a>
        </div>
        <div>
          <h4 className='text-lg font-semibold mb-6 text-white uppercase'>
            về chúng tôi
          </h4>
          <div className='flex gap-7'>
            <ul className='space-y-4'>
              <li>
                <Link to='/' className='text-gray-300 hover:text-white text-sm'>
                  TRANG CHỦ
                </Link>
              </li>
              <li>
                <Link
                  to='/aboutUs'
                  className='text-gray-300 hover:text-white text-sm'>
                  GIỚI THIỆU
                </Link>
              </li>
              <li>
                <Link
                  to='/products/home'
                  className='text-gray-300 hover:text-white text-sm'>
                  SẢN PHẨM
                </Link>
              </li>
            </ul>
            <ul className='space-y-4'>
              <li>
                <Link
                  to='/services'
                  className='text-gray-300 hover:text-white text-sm'>
                  DỊCH VỤ
                </Link>
              </li>
              <li>
                <Link
                  to='/academy'
                  className='text-gray-300 hover:text-white text-sm'>
                  ACADEMY
                </Link>
              </li>
              <li>
                <Link
                  to='/posts'
                  className='text-gray-300 hover:text-white text-sm'>
                  TIN TỨC
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className='text-lg font-semibold mb-6 text-white uppercase'>
            Kết nối với chúng tôi
          </h4>
          <ul className='flex space-x-4 items-center mb-4'>
            <li>
              <a href='javascript:void(0)'>
                <img src={IconFb} alt='Facebook' className='w-6' />
              </a>
            </li>
            <li>
              <a href='javascript:void(0)'>
                <img src={IconZalo} alt='Zalo' className='w-10' />
              </a>
            </li>
            <li>
              <a href='javascript:void(0)'>
                <img src={IconInsta} alt='Instagram' className='w-10' />
              </a>
            </li>
            <li>
              <a href='javascript:void(0)'>
                <img src={IconYtb} alt='Youtube' className='w-10' />
              </a>
            </li>
          </ul>
          <ul className='flex space-x-4 items-center'>
            <li>
              <a href='javascript:void(0)'>
                <img src={IconShopee} alt='Facebook' className='w-10' />
              </a>
            </li>
            <li>
              <a href='javascript:void(0)'>
                <img src={IconLazada} alt='Zalo' className='w-14' />
              </a>
            </li>
            <li>
              <a href='javascript:void(0)'>
                <img src={IconTiktok} alt='Instagram' className='w-10' />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-semibold mb-6 text-white uppercase'>
            liên hệ
          </h4>
          <ul className='space-y-4'>
            <li>
              <Link
                to='https://maps.app.goo.gl/HwucvRTriBddpoi27'
                target='_blank'
                className='text-gray-300 hover:text-white text-sm flex items-center gap-3'>
                <img src={IconAdress} alt='Address' className='w-7' />
                <p className='text-white'>1046 Âu Cơ, P14, Tân Bình</p>
              </Link>
            </li>
            <li>
              <Link
                to='tel:0939233398'
                className='text-gray-300 hover:text-white text-sm flex items-center gap-3'>
                <img src={IconPhone} alt='Phone' className='w-7' />
                <p className='text-white'>0939 233 398</p>
              </Link>
            </li>

            <li>
              <Link
                to='mailto:Monminpet@gmail.com'
                className='text-gray-300 hover:text-white text-sm flex items-center gap-3'>
                <img src={IconEmail} alt='Phone' className='w-7' />
                <p className='text-white'>Monminpet@gmail.com</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
