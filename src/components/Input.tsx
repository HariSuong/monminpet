import React from 'react'

interface InputProps {
  type: string
  placeholder: string
  required?: boolean
}

const Input: React.FC<InputProps> = ({ type, placeholder, required }) => {
  return (
    <input
      type={type}
      className={`w-full mt-1 px-6 py-4 rounded-full bg-peach focus:outline-none placeholder-black uppercase`}
      placeholder={placeholder}
      required={required}
    />
  )
}

export default Input
