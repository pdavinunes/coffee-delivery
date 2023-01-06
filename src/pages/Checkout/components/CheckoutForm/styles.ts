import styled from 'styled-components'

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 0.5rem;
`

export const InputBase = styled.input`
  height: 2.625rem;
  padding: 0 1rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 0.25rem;
  margin-top: 1rem;
`

export const CEPInput = styled(InputBase)`
  grid-column-start: 1;
  grid-column-end: 2;
`

export const StreetInput = styled(InputBase)`
  grid-column-start: 1;
  grid-column-end: 5;
`

export const NumberAddressInput = styled(InputBase)`
  grid-column-start: 1;
  grid-column-end: 2;
`

export const ComplementAddressInput = styled(InputBase)`
  grid-column-start: 2;
  grid-column-end: 5;
`

export const NeighorhoodAddressInput = styled(InputBase)`
  grid-column-start: 1;
  grid-column-end: 2;
`

export const CityAddressInput = styled(InputBase)`
  grid-column-start: 2;
  grid-column-end: 3;
`

export const StateAddressInput = styled(InputBase)`
  grid-column-start: 3;
  grid-column-end: 5;
`
