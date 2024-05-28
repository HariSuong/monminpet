import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { ServicesCat } from '../../types/services'
import { fetchServicesCat } from '../../services/apiServices'

export const useServicesCat = (): UseQueryResult<ServicesCat[], Error> => {
  return useQuery<ServicesCat[], Error>({
    queryKey: ['services'],
    queryFn: fetchServicesCat
  })
}
