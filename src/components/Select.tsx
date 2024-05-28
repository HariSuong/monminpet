interface Option {
  options: Array<{ label: string; value: string }>
  value?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  type: string
}

const Select: React.FC<Option> = ({ options, value, onChange, type }) => {
  return (
    <select
      className={`text-base py-2 px-4 border ${
        type === 'white' ? '' : 'border-gray-300'
      } rounded-sm bg-white font-medium shadow-sm outline-none active:outline-indigo-500 focus:outline-indigo-500`}
      onChange={e => onChange(e)}
      value={value}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

// export default Select

// import React from 'react'
// import styles from './ContactForm.module.css'

// import IconDropDown from '../assets/images/icon-dropdown.png'

// interface Option {
//   value: string
//   label: string
// }

// interface SelectProps {
//   options: Option[]
//   placeholder: string
//   required?: boolean
// }

// const Select: React.FC<SelectProps> = ({ options, placeholder, required }) => {
//   return (
//     <div className={styles.selectWrapper}>
//       <select
//         className={`${styles.customSelect} w-full mt-1 px-6 py-4 pr-10 rounded-full bg-peach text-black appearance-none`}
//         required={required}>
//         <option value=''>{placeholder}</option>
//         {options.map(option => (
//           <option value={option.value} key={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//       <img
//         src={IconDropDown}
//         alt='Dropdown Icon'
//         className={`${styles.icon} absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none`}
//       />
//     </div>
//   )
// }

// export default Select
