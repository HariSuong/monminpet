import { useQuery, UseQueryResult } from '@tanstack/react-query'

interface Product {
  id: number
  name: string
  thumb: string
  price: number
  price_old: number
  video: string
  type_thumb_video: string
  discount: number
}

interface Category {
  id: number
  name: string
  thumb: string
  products: Product[]
}

const fetchProductsCat = async (): Promise<Category[]> => {
  try {
    const response = await fetch('https://monminpet.com/public/api/products')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    if (!data.success || !Array.isArray(data.data)) {
      throw new Error('Invalid response structure')
    }
    return data.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const useProductsCat = (): UseQueryResult<Category[], Error> => {
  return useQuery<Category[], Error>({
    queryKey: ['products'],
    queryFn: fetchProductsCat
  })
}
