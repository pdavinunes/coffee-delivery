import { ListIntroContainer } from './styles'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ItemIntro } from '../../../../components/ItemIntro'

export function ListIntro() {
  return (
    <ListIntroContainer>
      <ItemIntro pointItemColor="yellowDark" text="Compra simples e segura">
        <ShoppingCart weight="fill" />
      </ItemIntro>
      <ItemIntro pointItemColor="base" text="Embalagem mantém o café intacto">
        <Package weight="fill" />
      </ItemIntro>
      <ItemIntro pointItemColor="yellow" text="Entrega rápida e rastreada">
        <Timer weight="fill" />
      </ItemIntro>
      <ItemIntro
        pointItemColor="purple"
        text="O café chega fresquinho até você"
      >
        <Coffee weight="fill" />
      </ItemIntro>
    </ListIntroContainer>
  )
}
