import React from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

interface AccordionItemProps {
  title: string
  content: string
  isOpen: boolean
  onClick: () => void
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick
}) => {
  return (
    <div className='border-t border-black last:border-b'>
      <button
        className='w-full flex justify-between items-center text-left px-5 py-3 text-xl font-light text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all duration-500'
        onClick={onClick}>
        {title}
        {isOpen ? (
          <HiChevronUp className='w-5 h-5' />
        ) : (
          <HiChevronDown className='w-5 h-5' />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-1000 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}>
        <div className='px-4 py-2 text-gray-600 text-sm'>{content}</div>
      </div>
    </div>
  )
}

export default AccordionItem
