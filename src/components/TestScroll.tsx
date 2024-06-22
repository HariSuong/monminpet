import React, { useState, useEffect } from 'react'

const TestScroll: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = 300 // Adjust this value to match the height of your banner
      console.log('Scroll event triggered')
      console.log('Window scrollY:', window.scrollY)
      setIsScrolled(window.scrollY > bannerHeight)
    }

    console.log('Adding scroll event listener')
    window.addEventListener('scroll', handleScroll)
    return () => {
      console.log('Removing scroll event listener')
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    console.log('isScrolled:', isScrolled)
  }, [isScrolled])

  return (
    <div style={{ height: '200vh', backgroundColor: '#f0f0f0' }}>
      <header
        className={`font-[sans-serif] tracking-wide w-full z-50 fixed top-0 transition duration-300 ${
          isScrolled
            ? 'bg-white bg-opacity-50 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
        style={{ height: '70px', lineHeight: '70px' }}>
        Header Content
      </header>
      <div style={{ paddingTop: '100px' }}>
        <div style={{ height: '300px', backgroundColor: 'lightcoral' }}>
          Banner Content (Height 300px)
        </div>
        <div style={{ height: '1500px', backgroundColor: 'lightblue' }}>
          Scrollable Content (Height 1500px)
        </div>
      </div>
    </div>
  )
}

export default TestScroll
