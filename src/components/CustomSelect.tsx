/* eslint-disable @typescript-eslint/no-explicit-any */
// CustomSelect.tsx
import React from 'react'
import Select, { components } from 'react-select'
import IconDropDown from '../assets/images/icon-dropdown.png'

interface Option {
  value: string
  label: string
}

interface CustomSelectProps {
  options: Option[]
  placeholder: string
  required?: boolean
  onChange: (option: Option | null) => void
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder,
  required,
  onChange
}) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: '#F8EDD8', // bg-peach
      padding: '1rem',
      borderRadius: '9999px', // rounded-full
      borderColor: 'transparent',
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'transparent'
      }
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'black'
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'black'
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: 0,
      color: 'black'
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: '#F8EDD8', // bg-peach
      borderRadius: '0.5rem'
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#E0D4C8' : '#F8EDD8', // highlight selected option
      color: 'black',
      '&:hover': {
        backgroundColor: '#E0D4C8'
      }
    })
  }

  const DropdownIndicator = (props: any) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <img
            src={IconDropDown}
            alt='Dropdown Icon'
            className='w-4 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none'
          />
        </components.DropdownIndicator>
      )
    )
  }

  return (
    <Select
      options={options}
      placeholder={placeholder}
      styles={customStyles}
      components={{ DropdownIndicator }}
      isClearable={!required}
      onChange={onChange}
    />
  )
}

export default CustomSelect
