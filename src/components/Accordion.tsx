import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

interface AccordionItemData {
  id: number
  title: string
  content: string
}

const accordionData: AccordionItemData[] = [
  {
    id: 1,
    title: 'Khi nào thú cưng cần tiêm phòng?',
    content: 'Câu trả lời cho câu hỏi Khi nào thú cưng cần tiêm phòng?'
  },
  {
    id: 2,
    title: 'Lịch tiêm cho chó và mèo là khi nào?',
    content: 'Câu trả lời cho câu hỏi Lịch tiêm cho chó và mèo là khi nào?'
  },
  {
    id: 3,
    title: 'Hàm lượng calo của sản phẩm này?',
    content: 'Có 15 kcal/ thìa cà phê'
  },
  {
    id: 4,
    title: 'Sữa dê này có phải sữa từ dê ăn cỏ không?',
    content: 'Sữa dê này 100% từ sữa từ dê ăn cỏ'
  },
  {
    id: 5,
    title: 'Sữa dê đến từ đâu?',
    content: 'Sữa dê này đến từ dê ăn cỏ'
  }
]

const Accordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1)

  const handleClick = (id: number) => {
    setOpenId(id === openId ? null : id)
  }

  return (
    <div className='w-full mx-auto my-8'>
      <h2 className='text-2xl font-semibold text-gray-800 mb-12 mt-16 uppercase'>
        câu hỏi thường gặp
      </h2>
      {accordionData.map(item => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={item.id === openId}
          onClick={() => handleClick(item.id)}
        />
      ))}
    </div>
  )
}

export default Accordion
