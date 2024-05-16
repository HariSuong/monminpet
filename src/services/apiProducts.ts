import { Category } from '../types/cats'
import { ProductPagination } from '../types/products'

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

export const fetchProduct = async ({
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
