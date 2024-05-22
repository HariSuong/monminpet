import React from 'react'
import { HiChevronRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

interface BreadcrumbProps {
  parentPage: string
  parentLink: string
  currentPage: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  parentPage,
  parentLink,
  currentPage
}) => {
  return (
    <ul className='flex items-center justify-start italic font-[sans-serif] space-x-4 mb-10'>
      <li className='text-gray-400 text-sm cursor-pointer'>
        <Link to='/'>Trang chủ</Link>
      </li>
      <li>
        <HiChevronRight className='fill-gray-400 w-3.5' />
      </li>
      <li className='text-gray-400 text-sm cursor-pointer'>
        <Link to={parentLink}>{parentPage}</Link>
      </li>
      <li>
        <HiChevronRight className='fill-gray-400 w-3.5' />
      </li>
      <li className='text-[#333] text-sm cursor-pointer'>{currentPage}</li>
    </ul>
  )
}

export default Breadcrumb
