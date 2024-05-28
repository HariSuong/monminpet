import React from 'react'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return (
    <button
      type={type}
      className={`bg-gradient-to-r from-black to-[#555555] text-white px-4 py-2 rounded-full italic`}>
      {children}
    </button>
  )
}

export default Button
