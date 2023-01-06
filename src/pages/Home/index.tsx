import {
  BannerHome,
  HomeContainer,
  HomeSubtitle,
  HomeTitle,
  ListCoffee,
} from './styles'

import imagem from '../../assets/Imagem.svg'
import { ListIntro } from './components/ListIntro'
import { CoffeeCard } from './components/CoffeeCard'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Home() {
  const { coffeeList, cartCoffee } = useContext(CoffeeContext)
  return (
    <HomeContainer>
      <BannerHome>
        <div>
          <HomeTitle>
            Encontre o café perfeito para qualquer hora do dia
          </HomeTitle>
          <HomeSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </HomeSubtitle>
          <ListIntro />
        </div>
        <img src={imagem} alt="" />
      </BannerHome>
      <span>Nossos cafés</span>
      <ListCoffee>
        {coffeeList.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              image={coffee.image}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
              features={coffee.features}
            />
          )
        })}
      </ListCoffee>
    </HomeContainer>
  )
}
