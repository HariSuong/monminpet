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
      value={value}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
