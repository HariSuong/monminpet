import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { fetchProduct } from '../../services/apiProducts'

export const useProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const catId = parseInt(searchParams.get('catId') || '1', 10)
  const currentPage = parseInt(searchParams.get('page') || '1', 10)

  const { data, error, isLoading } = useQuery({
    queryKey: ['products', catId, currentPage],
    queryFn: () => fetchProduct({ catId, page: currentPage })
  })

  const goToPage = (page: number) => {
    setSearchParams({ catId: catId.toString(), page: page.toString() })
  }

  return { products: data, loading: isLoading, error, goToPage, currentPage }
}
