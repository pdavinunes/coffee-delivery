import { ShoppingCart } from 'phosphor-react'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Counter } from '../../../../components/Counter'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import {
  CoffeeCardContainer,
  DescriptionCoffee,
  FeatureItem,
  FeatureList,
  FormCoffee,
  InputQuantity,
  PriceCoffee,
  ShopButton,
  TitleCoffee,
} from './styles'

interface CoffeeCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
  features: string[]
}

export function CoffeeCard({
  id,
  image,
  description,
  name,
  price,
  features,
}: CoffeeCardProps) {
  const priceString = price.toFixed(2)
  let initialQuantityValue = 0

  const { addNewCoffee, cartCoffee, removeCoffeeFromCart } =
    useContext(CoffeeContext)

  const handleCoffeeQuantities = (quantity: number) => {
    if (quantity === 0) {
      removeCoffeeFromCart(id)
    }
    addNewCoffee(id, quantity)
  }

  const currentCoffeeInCart = cartCoffee.find(
    (coffee) => coffee.coffeeId === id,
  )

  if (currentCoffeeInCart) initialQuantityValue = currentCoffeeInCart.quantity

  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />
      <FeatureList>
        {features.map((feature) => {
          return <FeatureItem key={feature}>{feature}</FeatureItem>
        })}
      </FeatureList>
      <TitleCoffee>{name}</TitleCoffee>
      <DescriptionCoffee>{description}</DescriptionCoffee>
      <FormCoffee>
        <PriceCoffee>{priceString}</PriceCoffee>
        <Counter
          initialValue={initialQuantityValue}
          onChange={handleCoffeeQuantities}
        />
        <NavLink
          onClick={() => handleCoffeeQuantities(1)}
          to="/checkout"
          title="Checkout"
        >
          <ShopButton>
            <ShoppingCart size={22} weight="fill" />
          </ShopButton>
        </NavLink>
      </FormCoffee>
    </CoffeeCardContainer>
  )
}
