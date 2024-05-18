import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { fetchProduct } from '../../services/apiProducts'
import { ProductPagination } from '../../types/products'
import { useEffect } from 'react'

export const useProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const catId = parseInt(searchParams.get('catId') || '1', 10)
  const currentPage = parseInt(searchParams.get('page') || '1', 10)

  const queryClient = useQueryClient()

  const { data, error, isLoading } = useQuery<ProductPagination, Error>({
    queryKey: ['products', catId, currentPage],
    queryFn: () => fetchProduct({ catId, page: currentPage })
  })

  // prefetch dữ liệu của trang tiếp theo và trang trước đó
  useEffect(() => {
    if (data) {
      const { last_page } = data

      if (currentPage < last_page) {
        queryClient.prefetchQuery({
          queryKey: ['products', catId, currentPage + 1],
          queryFn: () => fetchProduct({ catId, page: currentPage + 1 })
        })
      }

      if (currentPage > 1) {
        queryClient.prefetchQuery({
          queryKey: ['products', catId, currentPage - 1],
          queryFn: () => fetchProduct({ catId, page: currentPage - 1 })
        })
      }
    }
  }, [data, currentPage, catId, queryClient])

  const goToPage = (page: number) => {
    setSearchParams({ catId: catId.toString(), page: page.toString() })
  }

  return { products: data, loading: isLoading, error, goToPage, currentPage }
}
