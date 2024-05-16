import { Product } from '../types/products'

export interface Category {
  id: number
  name: string
  thumb: string
  products: Product[]
}
