// components/products/useProducts.ts
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { fetchProduct } from '../../services/apiProducts'
import { ProductPagination } from '../../types/products'

export const useProducts = () => {
  const queryClient = useQueryClient()
  const [searchParams] = useSearchParams()

  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))
  const catId = !searchParams.get('catId')
    ? 1
    : Number(searchParams.get('catId'))

  const {
    data: productPagination,
    isLoading,
    error
  } = useQuery<ProductPagination>({
    queryKey: ['products', { catId, page }],
    queryFn: () => fetchProduct({ catId, page })
  })

  // Prefetch next and previous pages for better user experience
  if (page < (productPagination?.last_page || 1)) {
    queryClient.prefetchQuery({
      queryKey: ['products', { catId, page: page + 1 }],
      queryFn: () => fetchProduct({ catId, page: page + 1 })
    })
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['products', { catId, page: page - 1 }],
      queryFn: () => fetchProduct({ catId, page: page - 1 })
    })
  }

  return {
    products: productPagination?.data || [],
    isPending: isLoading,
    error
  }
}
