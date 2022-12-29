import QuantityController from 'src/components/QuantityController'
import useLogic from 'src/hooks/useLogic'
import { ExtendedProducts } from 'src/types/product.type'
import helper from 'src/utils/helper'

export default function Product({ product, index }: { product: ExtendedProducts; index: number }) {
  const { handleCheck, handleQuantity, handleTypeQuantity } = useLogic()

  return (
    <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
      <td className='w-4 p-4'>
        <div className='flex items-center'>
          <input
            id='checkbox-table-search-1'
            type='checkbox'
            checked={product.checked}
            onChange={handleCheck(index)}
            className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
          />

          <label htmlFor='checkbox-table-search-1' className='sr-only'>
            checkbox
          </label>
        </div>
      </td>

      <th
        scope='row'
        className='flex max-w-[40rem] items-center truncate whitespace-nowrap py-4 px-1 text-gray-900 dark:text-white'
      >
        <img className='w-32 rounded p-4' src={product.image} alt='' />
        <div className='pl-2'>
          <div className='text-base font-semibold '>{product.name}</div>
          <table>
            <tbody className=' font-normal text-gray-500 '>
              <tr>
                <td className='w-[80px]'>Mã SP:</td>

                <td>{product.maSP}</td>
              </tr>
              <tr>
                <td>Bảo hành:</td>
                <td>{product.bH} Tháng</td>
              </tr>
              <tr>
                <td valign='top'>Kho hàng:</td>
                {product.khoHang && (
                  <td>
                    <span className='dongbotonkho'>
                      <span
                        className='detail'
                        style={{
                          background: '#278c56',
                          color: '#fff',
                          padding: '2px 10px',
                          whiteSpace: 'pre-line'
                        }}
                      >
                        <i className='far fa-check' /> Còn hàng
                      </span>
                    </span>
                  </td>
                )}
                {!product.khoHang && (
                  <td>
                    <span
                      className='flex items-center gap-1'
                      style={{ background: '#eaeaea', color: '#555', padding: '2px 10px', whiteSpace: 'pre-line' }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-3 w-3 '
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                        />
                      </svg>
                      Liên hệ
                    </span>
                    <br />
                  </td>
                )}
              </tr>
            </tbody>
          </table>
          <span className='text-lg font-semibold text-[#ec1b23]'>{helper.formatCurrency(product.price)} đ</span>
        </div>
      </th>

      <td className='py-4 px-6'>
        <QuantityController
          max={product.quantity}
          value={product.buy_count}
          onIncrease={(value) => handleQuantity(index, value, value <= product.quantity)}
          onDecrease={(value) => handleQuantity(index, value, value >= 1)}
          onType={handleTypeQuantity(index)}
        />
      </td>

      <td className='py-4 px-6 font-semibold text-gray-900 dark:text-white'>
        {' '}
        <div className='flex items-center'>
          ₫
          {`${
            product.price * product.buy_count
              ? helper.formatCurrency(product.price * product.buy_count)
              : helper.formatCurrency(product.price)
          }`}
        </div>
      </td>
    </tr>
  )
}
