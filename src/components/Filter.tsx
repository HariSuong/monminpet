import { useSearchParams } from 'react-router-dom'

interface FilterOption {
  filterField: string
  options: Array<{ label: string; value: string }>
}

const Filter: React.FC<FilterOption> = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentParams = searchParams.get(filterField) || options[0] //options.at(0)

  const handleClick = (value: string) => {
    searchParams.set(filterField, value)
    setSearchParams(searchParams)
  }

  return (
    <div className='border border-gray-100 bg-gray-100 shadow-sm rounded-sm p-1 flex gap-1'>
      {options.map(option => (
        <button
          key={option.value}
          className={`${
            currentParams === option.value
              ? 'bg-indigo-600 text-indigo-50'
              : 'bg-white'
          } rounded-sm font-medium text-sm px-2 py-2 transition-all duration-300 hover:bg-indigo-600 hover:text-indigo-50 disabled:bg-gray-300 disabled:text-gray-500`}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default Filter
