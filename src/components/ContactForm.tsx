/* eslint-disable @typescript-eslint/no-unused-vars */
// ContactForm.tsx
import React, { useState } from 'react'
import { ServicesListProps } from '../types/services'
import Input from '../components/Input'
import CustomSelect from '../components/CustomSelect'
import Button from '../components/Button'

interface Option {
  value: string
  label: string
}

const ContactForm: React.FC<ServicesListProps> = ({ servicesList }) => {
  const [selectedService, setSelectedService] = useState<Option | null>(null)
  const [selectedPet, setSelectedPet] = useState<Option | null>(null)

  const serviceOptions: Option[] = servicesList.map(({ name, id }) => ({
    value: String(id),
    label: name
  }))

  const petOptions: Option[] = [
    { value: 'cho', label: 'Chó' },
    { value: 'meo', label: 'Mèo' }
  ]

  const handleServiceChange = (option: Option | null) => {
    setSelectedService(option)
    console.log('Selected service:', option)
  }

  const handlePetChange = (option: Option | null) => {
    setSelectedPet(option)
    console.log('Selected pet:', option)
  }

  return (
    <div className='min-h-screen bg-contact bg-cover bg-center flex items-center justify-center p-4'>
      <div className='p-8 max-w-screen-lg w-full mx-auto'>
        <h2 className='text-2xl font-light'>ĐẶT LỊCH HẸN</h2>
        <h3 className='text-4xl font-semibold mb-6'>BOOKING NOW!</h3>
        <p></p>
        <form>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 uppercase'>
            <CustomSelect
              options={serviceOptions}
              placeholder='Chọn chuyên khoa *'
              required
              onChange={handleServiceChange}
            />
            <CustomSelect
              options={petOptions}
              placeholder='Chọn thú nuôi *'
              required
              onChange={handlePetChange}
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 '>
            <Input type='text' placeholder='Tên' required />
            <Input type='email' placeholder='Email' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <Input type='tel' placeholder='Số điện thoại' required />
            <Input type='datetime-local' placeholder='' />
          </div>
          <div className='mb-4'>
            <textarea
              className='w-full mt-1 px-6 py-4 rounded-3xl bg-peach text-black placeholder-black uppercase'
              placeholder='Nhắn nhủ'></textarea>
          </div>
          <div className='text-center'>
            <Button type='submit'>GỬI YÊU CẦU</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
