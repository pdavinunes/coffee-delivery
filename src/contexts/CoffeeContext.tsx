import { createContext, ReactNode, useReducer, useState } from 'react'

import imageExpresso from '../assets/Type=Expresso.svg'
import imageAmericano from '../assets/Type=Americano.svg'
import imageCubano from '../assets/Type=Cubano.svg'
import imageCapuccino from '../assets/Type=Capuccino.svg'
import imageMochaccino from '../assets/Type=Mochaccino.svg'
import { checkoutFormData } from '../pages/Checkout'

interface Coffee {
  id: string
  name: string
  description: string
  price: number
  image: any
  features: string[]
}

export const CoffeeList = [
  {
    id: crypto.randomUUID(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: imageExpresso,
    features: ['TRADICIONAL'],
  },
  {
    id: crypto.randomUUID(),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    image: imageCubano,
    features: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
  },
  {
    id: crypto.randomUUID(),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    image: imageAmericano,
    features: ['TRADICIONAL'],
  },
  {
    id: crypto.randomUUID(),
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    image: imageCapuccino,
    features: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: crypto.randomUUID(),
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    image: imageMochaccino,
    features: ['TRADICIONAL', 'COM LEITE'],
  },
] as Coffee[]

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeItemCart {
  coffeeId: Coffee['id']
  quantity: number
}

interface CheckoutInfo {
  address: string
  cityWithFU: string
  paymentType: string
}

interface CoffeeContextType {
  coffeeList: Coffee[]
  cartCoffee: CoffeeItemCart[]
  checkoutInfo: CheckoutInfo
  addNewCoffee: (coffeeId: string, quantity: number) => void
  resetCartCoffee: () => void
  removeCoffeeFromCart: (coffeeId: string) => void
  createCheckout: (data: checkoutFormData) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartCoffee, setCartCoffee] = useState([] as CoffeeItemCart[])
  const [checkoutInfo, setCheckoutInfo] = useState({} as CheckoutInfo)

  function addNewCoffee(coffeeId: string, quantity: number) {
    setCartCoffee((state) => {
      const newItem = { coffeeId, quantity }
      const indexExistingItem = state.findIndex(
        (item) => item.coffeeId === newItem.coffeeId,
      )
      let newState = []
      if (indexExistingItem !== -1)
        newState = state.splice(indexExistingItem, 1)
      newState = [...state, newItem]
      return newState
    })
  }

  function removeCoffeeFromCart(coffeeId: string) {
    setCartCoffee((state) => {
      const newState = state.filter((coffee) => coffee.coffeeId !== coffeeId)
      return newState
    })
  }

  function createCheckout(data: checkoutFormData) {
    const newCheckoutInfo = {
      address: `${data.street}, ${data.numberAddress}`,
      cityWithFU: `${data.cityAddress} - ${data.stateAddress}`,
      paymentType: 'Cartão de Crédito',
    } as CheckoutInfo

    setCheckoutInfo(newCheckoutInfo)
  }

  function resetCartCoffee() {
    setCartCoffee([])
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList: CoffeeList,
        cartCoffee,
        addNewCoffee,
        removeCoffeeFromCart,
        resetCartCoffee,
        createCheckout,
        checkoutInfo,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
