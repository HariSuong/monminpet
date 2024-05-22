// types/products.ts
export interface Product {
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

export interface ProductPagination {
  current_page: number
  data: Product[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: { url: string; label: string; active: boolean }[]
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: string
  to: number
  total: number
}

export interface ProductListProps {
  products: {
    id: number
    name: string
    desc?: string | undefined
    hot?: number
    thumb: string
    price: number
    price_old: number
    video: string
    type_thumb_video: string
    discount?: number
  }[]
}

export interface ProductItemProps {
  id: number
  name: string
  description: string
  price: string
  imageUrl: string
  isNew?: boolean
  isHot?: boolean
}

// src/types/products.ts
export interface ProductDetail {
  id: number
  name: string
  thumb: string
  desc: string
  content: string
  hot: number
  imgs: string[]
  video: string
  type_thumb_video: string
  tags: string[]
  menus: {
    id: number
    name: string
    thumb: string
    desc: string | null
  }
  related: RelatedProduct[]
}

export interface RelatedProduct {
  id: number
  name: string
  thumb: string
  hot: number
  desc: string
  price: number
  price_old: number
  video: string
  type_thumb_video: string
}
