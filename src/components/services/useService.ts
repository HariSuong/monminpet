// hooks/useService.ts
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { ServiceDetail } from '../../types/services'
import { fetchServiceDetail } from '../../services/apiServices'

export const useService = (
  id: string
): UseQueryResult<ServiceDetail, Error> => {
  return useQuery<ServiceDetail, Error>({
    queryKey: ['service', id],
    queryFn: () => fetchServiceDetail(id),
    enabled: !!id
  })
}
