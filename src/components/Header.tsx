import React, { useState } from 'react'
import { HiBars3 } from 'react-icons/hi2'
import { Link, NavLink } from 'react-router-dom'
import CartIcon from '../assets/images/icon/cart.png'
import SearchIcon from '../assets/images/icon/search.png'
import UserIcon from '../assets/images/icon/user.png'
import Logo from '../assets/images/logo/logo-monminpet.png'

const Header: React.FC = () => {
  const [collapseMenu, setCollapseMenu] = useState(false)

  const handleToggle = () => {
    setCollapseMenu(!collapseMenu)
  }

  return (
    <>
      <header
        className={`font-[sans-serif] tracking-wide w-full z-50 absolute top-0 transition duration-300 bg-transparent`}>
        <div className='flex flex-wrap items-center gap-4 px-10 py-4 relative min-h-[70px]'>
          <NavLink to='/' className='hidden max-lg:block'>
            <img src={Logo} alt='MonMinPet' className='w-28' />
          </NavLink>

          <div
            id='collapseMenu'
            className={`${
              collapseMenu ? 'block' : 'hidden max-lg:hidden'
            } w-full lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}>
            <button
              onClick={handleToggle}
              id='toggleClose'
              className='lg:hidden fixed top-2 right-4 z-[100] rounded-full p-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 fill-black'
                viewBox='0 0 320.591 320.591'>
                <path
                  d='M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z'
                  data-original='#000000'></path>
                <path
                  d='M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z'
                  data-original='#000000'></path>
              </svg>
            </button>

            <div className='lg:flex max-lg:fixed bg-white lg:bg-transparent max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 py-10 justify-center items-center'>
              <ul className='lg:flex 2xl:gap-x-8 lg:gap-x-8 max-lg:space-y-2 2xl:space-x-14 lg:space-x-4 2xl:ml-24 lg:ml-14'>
                <li className='mb-6 hidden max-lg:block'>
                  <NavLink to='/'>
                    <img
                      src='https://readymadeui.com/readymadeui.svg'
                      alt='logo'
                      className='w-28'
                    />
                  </NavLink>
                </li>
                <li className='max-lg:border-b max-lg:py-3'>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive
                        ? 'hover:font-semibold text-black font-semibold block text-[15px]'
                        : 'hover:font-semibold text-black font-light block text-[15px]'
                    }>
                    TRANG CHỦ
                  </NavLink>
                </li>
                <li className='max-lg:border-b max-lg:py-3'>
                  <NavLink
                    to='/aboutUs'
                    className={({ isActive }) =>
                      isActive
                        ? 'hover:font-semibold text-black font-semibold block text-[15px]'
                        : 'hover:font-semibold text-black font-light block text-[15px]'
                    }>
                    GIỚI THIỆU
                  </NavLink>
                </li>
                <li className='max-lg:border-b max-lg:py-3'>
                  <NavLink
                    to='/products/home'
                    className={({ isActive }) =>
                      isActive
                        ? 'hover:font-semibold text-black font-semibold block text-[15px]'
                        : 'hover:font-semibold text-black font-light block text-[15px]'
                    }>
                    SẢN PHẨM
                  </NavLink>
                </li>
              </ul>

              <NavLink
                to='/'
                className='m-auto mx-2 absolute lg:left-2/4 lg:top-4 lg:-translate-x-1/2 max-lg:hidden'>
                <img src={Logo} alt='logo' className='w-28' />
              </NavLink>

              <ul className='lg:flex 2xl:space-x-20 lg:space-x-10 max-lg:space-y-2 max-lg:mt-2 ml-auto lg:mr-6 2xl:mr-28'>
                <li className='max-lg:border-b max-lg:py-3'>
                  <NavLink
                    to='/services'
                    className={({ isActive }) =>
                      isActive
                        ? 'hover:font-semibold text-black font-semibold block text-[15px]'
                        : 'hover:font-semibold text-black font-light block text-[15px]'
                    }>
                    DỊCH VỤ
                  </NavLink>
                </li>
                <li className='max-lg:border-b max-lg:py-3'>
                  <NavLink
                    to='/academy'
                    className={({ isActive }) =>
                      isActive
                        ? 'hover:font-semibold text-black font-semibold block text-[15px]'
                        : 'hover:font-semibold text-black font-light block text-[15px]'
                    }>
                    ACADEMY
                  </NavLink>
                </li>
                <li className='max-lg:border-b max-lg:py-3'>
                  <NavLink
                    to='/posts'
                    className={({ isActive }) =>
                      isActive
                        ? 'hover:font-semibold text-black font-semibold block text-[15px]'
                        : 'hover:font-semibold text-black font-light block text-[15px]'
                    }>
                    TIN TỨC
                  </NavLink>
                </li>
              </ul>

              <ul className='flex mt-10 lg:mt-0 2xl:space-x-8 lg:space-x-2 space-x-6'>
                <li>
                  <Link to='/'>
                    <img src={SearchIcon} className='w-6 h-6' />
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <img src={UserIcon} className='w-6 h-6' />
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <img src={CartIcon} className='w-6 h-6' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex ml-auto lg:hidden'>
            <button id='toggleOpen' onClick={handleToggle}>
              <HiBars3 className='w-7 h-7' />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
