import React from 'react'
import SeeAll from './SeeAll'

interface TitleProps {
  title: string
  subtitle: string
  to: string
}

const Title: React.FC<TitleProps> = ({ title, subtitle, to }) => {
  return (
    <div className='flex items-center justify-between px-4 sm:px-6 lg:px-0 my-10'>
      <div>
        <p className='uppercase font-thin text-2xl mb-2'>{title}</p>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900 uppercase'>
          {subtitle}
        </h2>
      </div>
      <SeeAll to={to} />
    </div>
  )
}

export default Title
