import { UseQueryResult, useQuery } from '@tanstack/react-query'

interface Product {
  id: number
  name: string
  desc: string
  hot: number
  thumb: string
  price: number
  price_old: number
  video: string
  type_thumb_video: string
}

const fetchProducts = async (
  categoryId: number | null,
  page: number
): Promise<Product[]> => {
  if (categoryId === 0) return []

  try {
    const response = await fetch(
      `https://monminpet.com/public/api/products/${categoryId}?page=${page}`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    if (!data.success || !data.data) {
      throw new Error('Invalid response structure')
    }
    return data.data.data.map((item: Product) => ({
      id: item.id,
      name: item.name,
      desc: item.desc,
      hot: item.hot,
      thumb: item.thumb,
      price: item.price,
      price_old: item.price_old,
      video: item.video,
      type_thumb_video: item.type_thumb_video
    }))
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const useProducts = (
  categoryId: number,
  page: number
): UseQueryResult<Product[], Error> => {
  return useQuery<Product[], Error>({
    queryKey: ['products', categoryId, page],
    queryFn: () => fetchProducts(categoryId, page)
  })
}
