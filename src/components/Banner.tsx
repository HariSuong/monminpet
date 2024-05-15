import React from 'react'

const Banner: React.FC = () => {
  return (
    <div className='bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 px-6 sm:py-20 py-10 font-[sans-serif]'>
      <div className='max-w-screen-xl mx-auto text-center text-white'>
        <h1 className='text-5xl max-sm:text-3xl font-extrabold leading-tight mb-4'>
          Welcome to Our Premium Service
        </h1>
        <p className='text-lg mb-8'>
          Experience excellence like never before with our exclusive products
          and services.
        </p>
        <button
          type='button'
          className='bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-2 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl'
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Banner
