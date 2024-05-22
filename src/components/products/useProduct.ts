// src/hooks/useProduct.ts
import { useQuery } from '@tanstack/react-query'
import { fetchProductDetail } from '../../services/apiProducts'
import { ProductDetail } from '../../types/products'

export const useProduct = (productId: number) => {
  return useQuery<ProductDetail, Error>({
    queryKey: ['product', productId],
    queryFn: () => fetchProductDetail(productId)
  })
}
