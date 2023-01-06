import { useFormContext } from 'react-hook-form'

import {
  CEPInput,
  CityAddressInput,
  ComplementAddressInput,
  FormWrapper,
  NeighorhoodAddressInput,
  NumberAddressInput,
  StateAddressInput,
  StreetInput,
} from './styles'

export function CheckoutForm() {
  const { register } = useFormContext()

  return (
    <FormWrapper action="">
      <CEPInput {...register('cep')} type="text" placeholder="CEP" />
      <StreetInput {...register('street')} type="text" placeholder="Rua" />
      <NumberAddressInput
        {...register('numberAddress')}
        type="text"
        placeholder="Número"
      />
      <ComplementAddressInput
        {...register('complementAddress')}
        type="text"
        placeholder="Complemento"
      />
      <NeighorhoodAddressInput
        {...register('neighorhoodAddress')}
        type="text"
        placeholder="Bairro"
      />
      <CityAddressInput
        {...register('cityAddress')}
        type="text"
        placeholder="Cidade"
      />
      <StateAddressInput
        {...register('stateAddress')}
        type="text"
        placeholder="UF"
      />
    </FormWrapper>
  )
}
