// export interface Product {
//   id: number
//   name: string
//   desc: string
//   hot: number
//   thumb: string
//   price: number
//   price_old: number
//   video: string
//   type_thumb_video: string
// }

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

// export interface ProductPagination {
//   current_page: number
//   data: ProductListProps
//   first_page_url: string
//   from: number
//   last_page: number
//   last_page_url: string
//   links: { url: string; label: string; active: boolean }[]
//   next_page_url: string
//   path: string
//   per_page: number
//   prev_page_url: string
//   to: number
//   total: number
// }

export interface ProductItemProps {
  id: number
  name: string
  description: string
  price: string
  imageUrl: string
  isNew?: boolean
  isHot?: boolean
}
