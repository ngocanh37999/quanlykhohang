import date from 'date-and-time'
import { Products } from 'src/types/product.type'
import helper from 'src/utils/helper'

export const products: Products[] = [
  {
    _id: helper.generate_id(),
    price: 3190000,
    rating: 4.6,
    maSP: helper.generate_maSP(),
    bH: 12,
    khoHang: true,
    price_before_discount: 3990000,
    quantity: 138,
    sold: 1200,
    view: 6901,
    name: 'Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng',
    image: 'https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg',
    createdAt: '2022-12-27 23:26:28',
    updatedAt: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    buy_count: 1
  },
  {
    _id: helper.generate_id(),
    price: 2590000,
    rating: 4.2,
    maSP: helper.generate_maSP(),
    bH: 36,
    khoHang: true,
    price_before_discount: 3490000,
    quantity: 73,
    sold: 6800,
    view: 4022,
    name: 'Điện thoại OPPO A12 (3GB/32GB) - Hàng chính hãng',
    image: 'https://api-ecom.duthanhduoc.com/images/aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg',
    createdAt: '2022-12-27 23:26:28',
    updatedAt: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    buy_count: 1
  },
  {
    _id: helper.generate_id(),
    price: 20990000,
    rating: 5,
    maSP: helper.generate_maSP(),
    bH: 12,
    khoHang: false,
    price_before_discount: 26990000,
    quantity: 17,
    sold: 482,
    view: 1571,
    name: 'Điện thoại Apple Iphone 12 64GB - Hàng chính hãng VNA',
    image: 'https://api-ecom.duthanhduoc.com/images/a7fb7a18-743a-42bb-bead-36370c1d1aba.jpg',
    createdAt: '2022-12-27 23:26:28',
    updatedAt: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    buy_count: 1
  },
  {
    _id: helper.generate_id(),
    price: 2130000,
    rating: 5,
    maSP: helper.generate_maSP(),
    bH: 12,
    khoHang: false,
    price_before_discount: 2690000,
    quantity: 269,
    sold: 5600,
    view: 1111,
    name: 'Điện Thoại Realme C11 (2GB/32GB) - Hàng Chính Hãng',
    image: 'https://api-ecom.duthanhduoc.com/images/51ef469d-0eb5-48fb-958d-ce2b9c664adc.jpg',
    createdAt: '2022-12-27 23:26:28',
    updatedAt: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    buy_count: 1
  },
  {
    _id: helper.generate_id(),
    price: 1949000,
    rating: 5,
    maSP: helper.generate_maSP(),
    bH: 24,
    khoHang: true,
    price_before_discount: 1990000,
    quantity: 409,
    sold: 1000,
    view: 918,
    name: 'Điện Thoại Xiaomi Redmi 9A 2GB/32GB - Hàng Chính Hãng',
    image: 'https://api-ecom.duthanhduoc.com/images/4e9c8364-7604-4b61-8658-9f18655bae40.jpg',
    createdAt: '2022-12-27 23:26:28',
    updatedAt: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    buy_count: 1
  },
  {
    _id: helper.generate_id(),
    price: 244550,
    rating: 3.8,
    maSP: helper.generate_maSP(),
    bH: 12,
    khoHang: false,
    price_before_discount: 489000,
    quantity: 9920,
    sold: 728,
    view: 1336,
    name: 'Đồng Hồ Nam WWOOR 8826 Máy Nhật Dây Thép Mành Cao Cấp - Nhiều Màu',
    image: 'https://api-ecom.duthanhduoc.com/images/1881b221-e9df-4b91-8d13-9d46c995a5d6.jpg',
    createdAt: '2022-12-27 23:26:28',
    updatedAt: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    buy_count: 1
  },
  {
    _id: helper.generate_id(),
    price: 300000,
    rating: 5,
    maSP: helper.generate_maSP(),
    bH: 36,
    khoHang: true,
    price_before_discount: 450000,
    quantity: 4034,
    sold: 2400,
    view: 668,
    name: 'Đồng Hồ Nam CRRJU CR8940 Dây Thép Cao Cấp',
    image: 'https://api-ecom.duthanhduoc.com/images/ffa092a6-c35e-4de3-b955-99f368f57546.jpg',
    createdAt: '2022-12-27 23:26:28',
    updatedAt: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    buy_count: 1
  },
  {
    _id: helper.generate_id(),
    price: 199000,
    rating: 5,
    maSP: helper.generate_maSP(),
    bH: 12,
    khoHang: false,
    price_before_discount: 250000,
    quantity: 3091,
    sold: 2500,
    view: 659,
    name: 'Đồng Hồ Nam FNGEEN Dây Thép Cao Cấp Không Gỉ, Có Lịch Ngày, Phong Cách Doanh Nhân Sang Trọng',
    image: 'https://api-ecom.duthanhduoc.com/images/37256021-1e7c-40f4-8e0f-d665f7cb95bd.jpg',
    createdAt: '2022-12-27 23:26:28',
    updatedAt: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    buy_count: 1
  },
  {
    _id: helper.generate_id(),
    price: 260000,
    rating: 5,
    maSP: helper.generate_maSP(),
    bH: 36,
    khoHang: true,
    price_before_discount: 500000,
    quantity: 4050,
    sold: 2300,
    view: 559,
    name: 'Đồng Hồ Điện Tử Thể Thao Nam Chính Hãng SMAEL JAPAN 2020 - Phong Cách Quân Đội',
    image: 'https://api-ecom.duthanhduoc.com/images/a7dfed1e-6beb-4390-af5e-24413bf619a6.jpg',
    createdAt: '2022-12-27 23:26:28',
    updatedAt: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    buy_count: 1
  },
  {
    _id: helper.generate_id(),
    price: 229000,
    rating: 5,
    maSP: helper.generate_maSP(),
    bH: 12,
    khoHang: false,
    price_before_discount: 399000,
    quantity: 100123,
    sold: 31500,
    view: 4549,
    name: 'Đồng Hồ Nam WWOOR 8018 Dây Thép Nhật Cao Cấp Nhiều Màu',
    image: 'https://api-ecom.duthanhduoc.com/images/a04c55a2-9569-4a59-a6de-2b3bbdcb570a.jpg',
    createdAt: '2022-12-27 23:26:28',
    updatedAt: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    buy_count: 1
  }
]

class DetailProducts {
  public filterDienThoai: Products[]
  private filterDongHo: Products[]
  private filterDongHoConHang: Products[]
  private filterDienThoaiConHang: Products[]
  constructor() {
    this.filterDienThoai = products.filter((item) => item.name.toLowerCase().includes('điện thoại'.toLowerCase()))
    this.filterDongHo = products.filter((item) => item.name.toLowerCase().includes('đồng hồ'.toLowerCase()))
    this.filterDienThoai = this.filterDienThoai.filter((item) => item.khoHang === true)
    this.filterDongHoConHang = this.filterDongHo.filter((item) => item.khoHang === true)
    this.filterDienThoaiConHang = this.filterDienThoai.filter((item) => item.khoHang === true)
  }
  // tính tổng điện thoại:
  public totalDienThoai = () =>
    this.filterDienThoai.reduce((result, current) => {
      return result + current.price * current.quantity
    }, 0)
  // tính tổng đồng hồ:
  public totalDongHo = () =>
    this.filterDongHo.reduce((result, current) => {
      return result + current.price * current.quantity
    }, 0)
  // tính điện thoại còn hàng:
  public dienThoaiConHang = () =>
    this.filterDienThoaiConHang.reduce((result, current) => {
      return result + current.price * current.quantity
    }, 0)
  // tính đồng hồ còn hàng:
  public dongHoConHang = () =>
    this.filterDongHoConHang.reduce((result, current) => {
      return result + current.price * current.quantity
    }, 0)
}
export const detailProducts = new DetailProducts()
