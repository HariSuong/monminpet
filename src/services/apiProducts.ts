import { Category } from '../types/cats'
import { ProductDetail, ProductPagination } from '../types/products'

export const fetchProductsCat = async (): Promise<Category[]> => {
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

export const fetchProducts = async ({
  catId,
  page
}: {
  catId: number
  page: number
}): Promise<ProductPagination> => {
  try {
    const response = await fetch(
      `https://monminpet.com/public/api/products/${catId}?page=${page}`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()

    if (!data.success) {
      throw new Error('Invalid response structure')
    }
    return data.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

// // Tôi muốn viết hàm gọi api lấy sản phẩm chi tiết, đây là link https://monminpet.com/public/api/products/detail/{id}
// // Hãy viết hàm fetchProductDetail ở đây

export const fetchProductDetail = async (
  id: number
): Promise<ProductDetail> => {
  const response = await fetch(
    `https://monminpet.com/public/api/products/detail/${id}`
  )
  const data = await response.json()
  if (data.success) {
    return data.data as ProductDetail
  } else {
    throw new Error('Failed to fetch product detail: ' + data.message)
  }
}
