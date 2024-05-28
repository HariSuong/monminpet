import React from 'react'
import { Link } from 'react-router-dom'
import { ServicesListProps } from '../../types/services'

const ServicesList: React.FC<ServicesListProps> = ({ servicesList }) => {
  return (
    <div className='pt-16 sm:max-w-full'>
      {servicesList.map(service => (
        <div
          key={service.id}
          className={`flex w-full overflow-hidden items-center${
            service.id % 2 !== 0 ? ' flex-row-reverse' : ''
          }`}>
          <div className='w-1/2 flex flex-col justify-center items-start bg-white lg:px-24 px-10'>
            <div className='transition-transform transform translate-x-0 delay-500 duration-1000'>
              <h1 className='text-base md:text-2xl lg:text-4xl font-bold mb-4'>
                {service.name.toUpperCase()}
              </h1>
            </div>
            <div className='transition-transform transform translate-y-0 delay-700 duration-1000 leading-10'>
              <div dangerouslySetInnerHTML={{ __html: service.content }} />
            </div>
            <div className='flex justify-center items-center'>
              <Link
                to={`/services/${service.id}`}
                className='px-4 py-2 bg-[#F8EDD8] italic font-semibold text-lg'>
                ĐỌC THÊM
              </Link>
            </div>
          </div>
          <div className='w-1/2 relative'>
            <img
              src={service.thumb}
              alt={service.name}
              className='w-full object-cover'
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServicesList
