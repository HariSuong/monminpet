import { useQuery, UseQueryResult } from '@tanstack/react-query'
import axios from 'axios'

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

const fetchProducts = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<{
      success: boolean
      message: string
      data: Category[]
    }>('https://monminpet.com/public/api/products')

    if (
      response.data &&
      response.data.success &&
      Array.isArray(response.data.data)
    ) {
      return response.data.data
    } else {
      throw new Error('Invalid response structure')
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const useProducts = (): UseQueryResult<Category[], Error> => {
  return useQuery<Category[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts
  })
}
