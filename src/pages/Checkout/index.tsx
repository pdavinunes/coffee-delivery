import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { CoffeeSelectedItem } from './components/CoffeeSelectedItem'
import {
  AddressCoffeeCard,
  ButtonConfirmation,
  CartCard,
  CheckoutAddressHeader,
  CheckoutContainer,
  PaymentCard,
  PaymentMethods,
  StyledNavLink,
  SubtitleCheckout,
  TextInfoCart,
  PaymentButton,
} from './styles'

import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CheckoutForm } from './components/CheckoutForm'
import { useNavigate } from 'react-router-dom'

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o campo!'),
  street: zod.string().min(1, 'Informe o campo!'),
  numberAddress: zod.string().min(1, 'Informe o campo!'),
  complementAddress: zod.string().nullable(),
  neighorhoodAddress: zod.string().min(1, 'Informe o campo!'),
  cityAddress: zod.string().min(1, 'Informe o campo!'),
  stateAddress: zod.string().min(1, 'Informe o campo!'),
})

export type checkoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const { cartCoffee, coffeeList, createCheckout, resetCartCoffee } =
    useContext(CoffeeContext)

  const navigate = useNavigate()

  const checkoutForm = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  const [paymentType, setPaymentType] = useState('')

  const { reset, handleSubmit } = checkoutForm

  function handleCreateCheckout(data: checkoutFormData) {
    if (paymentType === '') {
      alert('Selecione método de pagamento')
      return
    }
    createCheckout(data)
    reset()
    resetCartCoffee()
    navigate('/success')
  }

  function ensure<T>(
    argument: T | undefined | null,
    message: string = 'This value was promised to be there.',
  ): T {
    if (argument === undefined || argument === null) {
      throw new TypeError(message)
    }

    return argument
  }

  const coffeeSelecteds = cartCoffee.map((coffeeSelected) => {
    const coffee = ensure(
      coffeeList.find((c) => c.id === coffeeSelected.coffeeId),
    )
    return {
      ...coffee,
      quantity: coffeeSelected.quantity,
    }
  })

  let priceTotalItens = 0
  const freightRate = 4.7

  if (coffeeSelecteds.length) {
    priceTotalItens = coffeeSelecteds.reduce((acc, cur) => {
      const totalCurrentItem = cur.quantity * cur.price
      return acc + totalCurrentItem
    }, 0)
  }
  const finalPrice = priceTotalItens + freightRate

  useEffect(() => {
    if (!coffeeSelecteds.length) {
      navigate('/')
    }
  }, [coffeeSelecteds.length, navigate])

  return (
    <CheckoutContainer>
      <div>
        <SubtitleCheckout>Complete seu pedido</SubtitleCheckout>
        <AddressCoffeeCard>
          <CheckoutAddressHeader>
            <MapPinLine size={22} />
            <div>
              <strong>Endereço de Entrega</strong>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </CheckoutAddressHeader>
          <div>
            <FormProvider {...checkoutForm}>
              <CheckoutForm />
            </FormProvider>
          </div>
        </AddressCoffeeCard>
        <PaymentCard>
          <CheckoutAddressHeader>
            <CurrencyDollar size={22} />
            <div>
              <strong>Pagamento</strong>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </CheckoutAddressHeader>
          <PaymentMethods>
            <PaymentButton
              onClick={() => setPaymentType('credit')}
              isActive={paymentType === 'credit'}
            >
              <CreditCard size={16} />
              Cartão de Crédito
            </PaymentButton>
            <PaymentButton
              onClick={() => setPaymentType('debit')}
              isActive={paymentType === 'debit'}
            >
              <Bank size={16} />
              Cartão de Débito
            </PaymentButton>
            <PaymentButton
              onClick={() => setPaymentType('money')}
              isActive={paymentType === 'money'}
            >
              <Money size={16} />
              Dinheiro
            </PaymentButton>
          </PaymentMethods>
        </PaymentCard>
      </div>
      <div>
        <SubtitleCheckout>Cafés selecionados</SubtitleCheckout>
        <CartCard>
          {coffeeSelecteds.length
            ? coffeeSelecteds.map((coffeeSelected) => {
                return (
                  <CoffeeSelectedItem
                    key={coffeeSelected.id}
                    id={coffeeSelected.id}
                    name={coffeeSelected.name}
                    image={coffeeSelected.image}
                    price={coffeeSelected.price}
                    quantity={coffeeSelected.quantity}
                  />
                )
              })
            : null}
          <TextInfoCart>
            <span>Total de itens</span>
            <span>R$ {priceTotalItens.toFixed(2)}</span>
          </TextInfoCart>
          <TextInfoCart>
            <span>Entrega</span>
            <span>R$ {freightRate.toFixed(2)}</span>
          </TextInfoCart>
          <TextInfoCart>
            <strong>Total</strong>
            <strong>R$ {finalPrice.toFixed(2)}</strong>
          </TextInfoCart>
          <StyledNavLink
            onClick={handleSubmit(handleCreateCheckout)}
            title="Success"
          >
            <ButtonConfirmation>Confirmar pedido</ButtonConfirmation>
          </StyledNavLink>
        </CartCard>
      </div>
    </CheckoutContainer>
  )
}
