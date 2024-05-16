import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { fetchProductsCat } from '../../services/apiProducts'
import { Category } from '../../types/cats'

export const useProductsCat = (): UseQueryResult<Category[], Error> => {
  return useQuery<Category[], Error>({
    queryKey: ['products'],
    queryFn: fetchProductsCat
  })
}
