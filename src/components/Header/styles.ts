import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70rem;
  margin: 0 auto;

  height: 6.5rem;

  > div {
    display: flex;
  }
`

const BaseButton = styled.button`
  border: none;
  outline: none;
  margin-left: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
`

export const LocationButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  gap: 0.5rem;
  display: flex;
  align-items: center;

  font-size: 0.875rem;
  line-height: 1.3;
`

export const ShopButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  display: flex;
  cursor: pointer;
  align-items: center;
  position: relative;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }
`

export const CounterItensCart = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.8rem;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.3;
`
