import { BannerInfo, OrderInfo, SuccessContainer } from './styles'

import illustrationDevlivery from '../../assets/Illustration.svg'
import { ItemIntro } from '../../components/ItemIntro'
import { CurrencyDollar, MapPin, ShoppingCart, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Success() {
  const { checkoutInfo } = useContext(CoffeeContext)
  return (
    <SuccessContainer>
      <strong>Uhu! Pedido confirmado</strong>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <BannerInfo>
        <OrderInfo>
          <div>
            <ItemIntro
              pointItemColor="purple"
              text={
                <span>
                  Entrega em <b>{checkoutInfo.address}</b>
                  <br /> {checkoutInfo.cityWithFU}
                </span>
              }
            >
              <MapPin weight="fill" />
            </ItemIntro>
            <ItemIntro
              pointItemColor="yellow"
              text={
                <span>
                  Previsão de entrega <br />
                  <b>20 min - 30 min</b>
                </span>
              }
            >
              <Timer weight="fill" />
            </ItemIntro>
            <ItemIntro
              pointItemColor="yellowDark"
              text={
                <span>
                  Pagamento na entrega
                  <br /> <b>{checkoutInfo.paymentType}</b>
                </span>
              }
            >
              <CurrencyDollar weight="fill" />
            </ItemIntro>
          </div>
        </OrderInfo>
        <img src={illustrationDevlivery} alt="" />
      </BannerInfo>
    </SuccessContainer>
  )
}
