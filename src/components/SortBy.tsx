import { useSearchParams } from 'react-router-dom'
import Select from './Select'

interface Option {
  options: Array<{ label: string; value: string }>
}

const SortBy: React.FC<Option> = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set('sortBy', e.target.value)

    setSearchParams(searchParams)
  }

  return <Select options={options} type='white' onChange={handleChange} />
}

export default SortBy
