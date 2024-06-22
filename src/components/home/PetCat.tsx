import React from 'react'
import IconMeo from '../../assets/images/icon/iconmeo.png'
import IconHoa from '../../assets/images/icon/iconhoa.png'

import Dog from '../../assets/images/icon/dog.png'
import Cat from '../../assets/images/icon/cat.png'

import { Link } from 'react-router-dom'
import Title from '../Title'

const PetCat: React.FC = () => {
  return (
    <div className='p-4 relative'>
      <img
        src={IconMeo}
        alt='Icon Mèo'
        className='absolute -bottom-4 right-0 w-1/4 z-0'
      />
      <img
        src={IconHoa}
        alt='Icon Hoa'
        className='absolute top-0 left-0 w-1/4 z-0'
      />

      <div className='p-8 flex items-center justify-center mx-auto z-10 gap-x-72 pt-20'>
        <Link
          to='/products/?catId=1'
          className='flex flex-col gap-4 items-center'>
          <h3 className='uppercase font-semibold text-lg'>Dành cho sếp cún</h3>
          <img src={Dog} />
        </Link>

        <Link
          to='/products/?catId=2'
          className='flex flex-col gap-4 items-center'>
          <h3 className='uppercase font-semibold text-lg'>Dành cho sếp mèo</h3>
          <img src={Cat} />
        </Link>
      </div>
      <div className='ml-40'>
        <Title title='sản phẩm cho boss' subtitle='all product' />
      </div>
    </div>
  )
}

export default PetCat
