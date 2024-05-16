import { UseQueryResult, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { PAGE_SIZE } from '../../ultis/constants'

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

interface ProductsResponse {
  data: Product[]
  total: number
}

const fetchProducts = async (
  categoryId: number,
  page: number
): Promise<ProductsResponse> => {
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
    return { data: data.data.data, total: data.data.total }
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const useProducts = (
  categoryId: number
): UseQueryResult<Product[], Error> => {
  const queryClient = useQueryClient()
  const [searchParams] = useSearchParams()

  // Lấy thông tin trang hiện tại từ query params
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))

  const {
    isFetching,
    data: { data: products, total } = {},
    error
  }: UseQueryResult<ProductsResponse, Error> = useQuery<
    ProductsResponse,
    Error
  >({
    queryKey: ['products', categoryId, page],
    queryFn: () => fetchProducts(categoryId, page)
  })

  // Tính toán số trang
  const pageCount = Math.ceil(total / PAGE_SIZE)

  // Prefetch trang trước và sau nếu có
  if (page < pageCount) {
    queryClient.prefetchQuery(['products', categoryId, page + 1], () =>
      fetchProducts(categoryId, page + 1)
    )
  }

  if (page > 1) {
    queryClient.prefetchQuery(['products', categoryId, page - 1], () =>
      fetchProducts(categoryId, page - 1)
    )
  }

  return { isFetching, error, data: products ? products.data : [], total }
}
