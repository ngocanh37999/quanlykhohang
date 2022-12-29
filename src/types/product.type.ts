export interface Products {
  _id: string
  price: number
  rating: number
  maSP: string
  bH: number
  khoHang: boolean
  price_before_discount: number
  quantity: number
  sold: number
  view: number
  name: string
  image: string
  createdAt: string
  updatedAt: string
  buy_count: number
}

export interface ExtendedProducts extends Products {
  checked: boolean
}
