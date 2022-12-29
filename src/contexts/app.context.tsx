import { createContext, useState } from 'react'
import { ExtendedProducts } from 'src/types/product.type'

interface AppContextInterface {
  localProducts: ExtendedProducts[]
  setLocalProducts: React.Dispatch<React.SetStateAction<ExtendedProducts[]>>
}

export const getInitialAppContext: () => AppContextInterface = () => ({
  localProducts: [],
  setLocalProducts: () => null
})
const initialAppContext = getInitialAppContext()
export const AppContext = createContext<AppContextInterface>(initialAppContext)
export const AppProvider = ({
  children,
  defaultValue = initialAppContext
}: {
  children: React.ReactNode
  defaultValue?: AppContextInterface
}) => {
  const [localProducts, setLocalProducts] = useState<ExtendedProducts[]>(defaultValue.localProducts)

  return (
    <AppContext.Provider
      value={{
        localProducts,
        setLocalProducts
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
