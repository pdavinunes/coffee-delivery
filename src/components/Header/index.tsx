import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  CounterItensCart,
  HeaderContainer,
  LocationButton,
  ShopButton,
} from './styles'

import logoCoffeeDelivery from '../../assets/logoCoffeeDelivery.svg'
import { NavLink } from 'react-router-dom'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { useContext } from 'react'

export function Header() {
  const { cartCoffee } = useContext(CoffeeContext)
  const value = cartCoffee.length

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <div>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Fortaleza, CE
        </LocationButton>
        <NavLink to={value ? '/checkout' : '/'} title="Checkout">
          <ShopButton>
            <ShoppingCart size={22} weight="fill" />
            {value ? <CounterItensCart>{value}</CounterItensCart> : <></>}
          </ShopButton>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
