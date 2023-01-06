import styled, { DefaultTheme, StyledComponent } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  margin-top: 3.375rem;

  padding: 1.25rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 0.375rem 36px;

  > img {
    margin-top: -2.5rem;
  }
`

export const TitleCoffee = styled.strong`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 1rem;
`

export const DescriptionCoffee = styled.strong`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.3;
  color: ${(props) => props.theme['base-label']};
  margin-top: 1rem;
  margin-bottom: 2.0625rem;
`

export const FormCoffee = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const PriceCoffee = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
  margin-right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.12rem;

  ::before {
    font-size: 0.875rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    content: 'R$';
  }
`

export const InputQuantity = styled.input`
  width: 5rem;
  height: 2.375rem;
  margin-left: 1.5rem;
`

const BaseButton = styled.button`
  border: none;
  outline: none;
  margin-left: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
`

export const ShopButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  display: flex;
  cursor: pointer;
  align-items: center;
  position: relative;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
  }
` as StyledComponent<'button', DefaultTheme, {}, never>

export const FeatureItem = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;

  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;

  text-transform: uppercase;
`

export const FeatureList = styled.div`
  display: flex;
  margin-top: 0.75rem;
  gap: 0.5rem;
`
