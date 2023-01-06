import {
  CoffeeSelectedContainer,
  FormCoffeeSelected,
  InfoCoffee,
  PriceCoffee,
} from './styles'

import { Trash } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { useContext } from 'react'

interface CoffeeSelectedItemProps {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export function CoffeeSelectedItem({
  id,
  name,
  price,
  image,
  quantity,
}: CoffeeSelectedItemProps) {
  const { addNewCoffee, removeCoffeeFromCart } = useContext(CoffeeContext)

  const handleCoffeeQuantities = (quantity: number) => {
    if (quantity === 0) {
      removeCoffeeFromCart(id)
    }
    addNewCoffee(id, quantity)
  }

  const handleRemoveCoffee = () => {
    removeCoffeeFromCart(id)
  }

  return (
    <CoffeeSelectedContainer>
      <InfoCoffee>
        <img src={image} alt="" />
        <div>
          <span>{name}</span>
          <FormCoffeeSelected>
            <Counter
              onChange={handleCoffeeQuantities}
              initialValue={quantity}
            />
            <button onClick={handleRemoveCoffee}>
              <Trash size={16} />
              Remover
            </button>
          </FormCoffeeSelected>
        </div>
      </InfoCoffee>
      <PriceCoffee>R$ {price.toFixed(2)}</PriceCoffee>
    </CoffeeSelectedContainer>
  )
}
