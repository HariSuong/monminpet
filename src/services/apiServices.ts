// services/apiServices.ts
import { ServiceDetail, ServicesCat } from '../types/services'
import { apiFetchData } from '../ultis/apiUtils'
import { LINK_API } from '../ultis/constants'

export const fetchServicesCat = async (): Promise<ServicesCat[]> => {
  const url = `${LINK_API}services`
  return apiFetchData<ServicesCat[]>(url, true)
}

export const fetchServiceDetail = async (
  id: string
): Promise<ServiceDetail> => {
  const url = `${LINK_API}services/detail/${id}`
  const data = await apiFetchData<ServiceDetail>(url)
  console.log('Fetched service detail:', data) // Debug line
  console.log('Fetched id detail:', id) // Debug line
  console.log('Link detail:', `${LINK_API}services/detail/${id}`) // Debug line
  return data
}
