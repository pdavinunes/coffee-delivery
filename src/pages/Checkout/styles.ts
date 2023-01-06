import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 2.5rem 20rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
`

export const SubtitleCheckout = styled.span`
  font-size: 1.125rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`

export const CheckoutAddressHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  gap: 0.5rem;
  > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
  > div {
    > strong {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
    > span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      /* or 10.5rem */

      display: flex;
      align-items: center;

      /* Base/Text */

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const AddressCoffeeCard = styled.div`
  max-width: 40rem;
  height: 23.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2rem;
  margin-top: 0.9rem;

  > div {
    display: flex;
  }
`

export const PaymentCard = styled.div`
  max-width: 40rem;
  height: 12.93rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  margin-top: 0.9rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CartCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.625rem;
  width: 28rem;
  max-height: 100vh;
  padding: 2rem;
  margin-top: 0.9rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.875rem;
`

export const StyledNavLink = styled.button`
  text-decoration: none;
  border: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export const ButtonConfirmation = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  width: 23rem;
  height: 2.875rem;

  background: ${(props) => props.theme.yellow};
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  text-decoration: none;
  outline: none;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const TextInfoCart = styled.div`
  display: flex;
  width: 24rem;
  justify-content: space-between;
`

interface PaymentButtonProps {
  isActive: boolean
}

export const PaymentButton = styled.button<PaymentButtonProps>`
  cursor: pointer;
  border-radius: 0.375rem;
  border: ${(props) => (props.isActive ? '1px solid #8047f8' : 'none')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 11.167rem;
  height: 3.188rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) =>
    props.isActive ? props.theme['purple-light'] : props.theme['base-button']};
`
