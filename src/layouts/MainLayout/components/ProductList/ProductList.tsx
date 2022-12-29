import { Fragment, useContext } from 'react'
import Product from './Product/Product'
import { AppContext } from 'src/contexts/app.context'
import helper from 'src/utils/helper'
import useLogic from 'src/hooks/useLogic'
import { detailProducts } from 'src/apis/product.api'

export default function ProductList() {
  const { localProducts } = useContext(AppContext)
  const {
    isAllChecked,
    handleCheckAll,
    checkedProductsCount,
    totalCheckedProductPrice,
    totalCheckedProductSavingPrice,
    searchText,
    handleChange
  } = useLogic()

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <div className='flex  w-full items-center justify-between bg-white pb-4 dark:bg-gray-900'>
        <label htmlFor='table-search' className='sr-only'>
          Search
        </label>
        <div className='relative w-full px-2'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <svg
              className='h-5 w-5 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <input
            type='text'
            id='table-search-users'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            placeholder='Tìm kiếm sản phẩm trong kho hàng'
            value={searchText}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='mb-4 flex justify-between'>
        <p
          className='text-blue-600 transition duration-150 ease-in-out hover:text-blue-700'
          data-bs-toggle='tooltip'
          title="Hi! I'm tooltip"
        >
          Tổng giá điện thoại: {helper.formatCurrency(detailProducts.totalDienThoai())}
        </p>

        <p
          className='text-blue-600 transition duration-150 ease-in-out hover:text-blue-700'
          data-bs-toggle='tooltip'
          title="Hi! I'm tooltip"
        >
          Tổng giá đồng hồ: {helper.formatCurrency(detailProducts.totalDongHo())}
        </p>

        <p
          className='text-blue-600 transition duration-150 ease-in-out hover:text-blue-700'
          data-bs-toggle='tooltip'
          title="Hi! I'm tooltip"
        >
          Tổng giá điện thoại còn hàng: {helper.formatCurrency(detailProducts.dienThoaiConHang())}
        </p>

        <p
          className='text-blue-600 transition duration-150 ease-in-out hover:text-blue-700'
          data-bs-toggle='tooltip'
          title="Hi! I'm tooltip"
        >
          Tổng giá đồng hồ còn hàng: {helper.formatCurrency(detailProducts.dongHoConHang())}
        </p>
      </div>

      <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
        <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='p-4'>
              <div className='flex items-center'>
                <input
                  id='checkbox-all-search'
                  type='checkbox'
                  checked={isAllChecked}
                  onChange={handleCheckAll}
                  className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                />
                <label htmlFor='checkbox-all-search' className='sr-only'>
                  checkbox
                </label>
              </div>
            </th>

            <th scope='col' className='py-3 px-6 text-center'>
              Thông tin sản phẩm
            </th>
            <th scope='col' className='py-3 px-6'>
              Số lượng
            </th>
            <th scope='col' className='py-3 px-6'>
              Giá
            </th>
          </tr>
        </thead>

        <tbody>
          {localProducts.length > 0 &&
            localProducts.map((product, index) => {
              if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
                return
              }
              return (
                <Fragment key={product._id}>
                  <Product product={product} index={index} />
                </Fragment>
              )
            })}
        </tbody>
      </table>

      {/*  */}
      <div className='sticky bottom-0 z-10 mt-8 flex flex-col rounded-sm border border-gray-100 bg-white p-5 shadow sm:flex-row sm:items-center'>
        <div className='flex items-center'>
          <div className='flex flex-shrink-0 items-center justify-center pr-3'>
            <input
              id='checkbox-all-search'
              type='checkbox'
              checked={isAllChecked}
              onChange={handleCheckAll}
              className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
            />
            <label htmlFor='checkbox-all-search' className='sr-only'>
              checkbox
            </label>
          </div>

          <button className='mx-3 border-none bg-none' onClick={handleCheckAll}>
            Chọn tất cả ({localProducts.length})
          </button>
        </div>

        <div className='mt-5 flex flex-col sm:ml-auto sm:mt-0 sm:flex-row sm:items-center'>
          <div>
            <div className='flex items-center sm:justify-end'>
              <div>Giá tổng item các số lượng thanh toán ({checkedProductsCount} sản phẩm):</div>
              <div className='ml-2 text-2xl text-orange'>₫{helper.formatCurrency(totalCheckedProductPrice)}</div>
            </div>
            <div className='flex items-center text-sm sm:justify-end'>
              <div className='text-gray-500'>Tiết kiệm</div>
              <div className='ml-6 text-orange'>₫{helper.formatCurrency(totalCheckedProductSavingPrice)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
