import React from 'react'
import { HiChevronLeft } from 'react-icons/hi'

const Pagination: React.FC = () => {
  return (
    <div className='w-full my-8'>
      <ul className='flex space-x-3 justify-center mt-8'>
        <li className='flex items-center justify-center shrink-0 cursor-pointer bg-gray-300 w-9 h-8 rounded'>
          <HiChevronLeft className='w-3 fill-gray-500' />
        </li>
        <li className='flex items-center justify-center shrink-0 cursor-pointer text-sm font-bold text-[#333] w-9 h-8 rounded'>
          1
        </li>
        <li className='flex items-center justify-center shrink-0 cursor-pointer text-sm font-bold bg-[#007bff] text-white w-9 h-8 rounded'>
          2
        </li>
        <li className='flex items-center justify-center shrink-0 cursor-pointer text-sm font-bold text-[#333] w-9 h-8 rounded'>
          3
        </li>
        <li className='flex items-center justify-center shrink-0 cursor-pointer text-sm font-bold text-[#333] w-9 h-8 rounded'>
          4
        </li>
        <li className='flex items-center justify-center shrink-0 cursor-pointer bg-gray-300 w-9 h-8 rounded'>
          <HiChevronLeft className='w-3 fill-gray-500 rotate-180' />
        </li>
      </ul>
    </div>
  )
}

export default Pagination
