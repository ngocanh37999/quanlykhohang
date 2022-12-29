/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-named-as-default */
import { useContext, useEffect, useMemo, useState } from 'react'
import produce from 'immer'
import keyBy from 'lodash/keyBy'
import { AppContext } from 'src/contexts/app.context'
import { products } from 'src/apis/product.api'

export default function useLogic() {
  const { localProducts, setLocalProducts } = useContext(AppContext)
  const [searchText, setSearchText] = useState('')

  const handleQuantity = (productIndex: number, value: number, enable: boolean) => {
    setLocalProducts(
      produce((draft) => {
        draft[productIndex].buy_count = value
      })
    )
  }
  const handleTypeQuantity = (productIndex: number) => (value: number) => {
    setLocalProducts(
      produce((draft) => {
        draft[productIndex].buy_count = value
      })
    )
  }
  const isAllChecked = useMemo(() => localProducts.every((product) => product.checked), [localProducts])
  const checkedProducts = useMemo(() => localProducts.filter((product) => product.checked), [localProducts])

  const checkedProductsCount = checkedProducts.length
  const totalCheckedProductPrice = useMemo(
    () =>
      checkedProducts.reduce((result, current) => {
        return result + current.price * current.buy_count
      }, 0),
    [checkedProducts]
  )
  const totalCheckedProductSavingPrice = useMemo(
    () =>
      checkedProducts.reduce((result, current) => {
        return result + (current.price_before_discount - current.price) * current.buy_count
      }, 0),
    [checkedProducts]
  )
  const handleCheck = (productIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalProducts(
      produce((draft) => {
        draft[productIndex].checked = event.target.checked
      })
    )
  }
  //
  useEffect(() => {
    setLocalProducts((prev) => {
      const extendedProductsObject = keyBy(prev, '_id')
      return (
        products?.map((product) => {
          return {
            ...product,
            checked: Boolean(extendedProductsObject[product._id]?.checked)
          }
        }) || []
      )
    })
  }, [])

  const handleCheckAll = () => {
    setLocalProducts((prev) =>
      prev.map((product) => ({
        ...product,
        checked: !isAllChecked
      }))
    )
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }
  return {
    handleQuantity,
    handleTypeQuantity,
    isAllChecked,
    checkedProductsCount,
    totalCheckedProductPrice,
    totalCheckedProductSavingPrice,
    handleCheck,
    handleCheckAll,
    searchText,
    handleChange
  }
}
