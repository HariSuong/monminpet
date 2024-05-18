import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { PageInfo } from '../types/pagination'

const Pagination: React.FC<{
  pageInfo: PageInfo
  onPageChange: (page: number) => void
}> = ({ pageInfo, onPageChange }) => {
  const { current_page, last_page, links } = pageInfo

  const handlePageChange = (url: string | null) => {
    if (url) {
      const urlParams = new URLSearchParams(url.split('?')[1])
      const page = parseInt(urlParams.get('page') || '1', 10)
      onPageChange(page)
    }
  }

  return (
    <div className='w-full my-8'>
      <ul className='flex space-x-3 justify-center mt-8'>
        <li
          className={`flex items-center justify-center shrink-0 cursor-pointer bg-gray-300 w-9 h-8 rounded ${
            current_page === 1 ? 'opacity-50 pointer-events-none' : ''
          }`}
          onClick={() => handlePageChange(links[0].url)}>
          <HiChevronLeft className='w-3 fill-gray-500' />
        </li>
        {links.map((link, index) => {
          if (
            link.label === '&laquo; Previous' ||
            link.label === 'Next &raquo;'
          )
            return null
          return (
            <li
              key={index}
              className={`flex items-center justify-center shrink-0 cursor-pointer text-sm font-bold ${
                link.active ? 'bg-[#007bff] text-white' : 'text-[#333]'
              } w-9 h-8 rounded`}
              onClick={() => handlePageChange(link.url)}>
              {link.label}
            </li>
          )
        })}
        <li
          className={`flex items-center justify-center shrink-0 cursor-pointer bg-gray-300 w-9 h-8 rounded ${
            current_page === last_page ? 'opacity-50 pointer-events-none' : ''
          }`}
          onClick={() => handlePageChange(links[links.length - 1].url)}>
          <HiChevronRight className='w-3 fill-gray-500' />
        </li>
      </ul>
    </div>
  )
}

export default Pagination
