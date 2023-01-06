import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  width: 24rem;
  height: 6.5rem;
  padding-bottom: 0.75rem;
  margin-bottom: 0.75rem;
  /* background-color: ${(props) => props.theme.purple}; */
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
`

export const InfoCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;

  > svg {
    width: 2rem;
    height: 2rem;
  }

  span {
    display: flex;
    align-items: center;
    flex-grow: 1;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    /* Base/Subtitle */

    color: ${(props) => props.theme['base-subtitle']};

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`

export const FormCoffeeSelected = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  input {
    width: 4rem;
    /* height: 2rem; */
    padding: 0.4rem 0rem;
  }

  button {
    margin-left: 0.5rem;
    /* height: 2rem; */
    padding: 0.4rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    background: ${(props) => props.theme['base-button']};
    border-radius: 0.375rem;
    border: none;
    svg {
      color: ${(props) => props.theme.purple};
    }

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;
    /* or 19px */

    text-transform: uppercase;

    /* Base/Text */

    color: ${(props) => props.theme['base-text']};

    :hover {
      background-color: ${(props) => props.theme['base-hover']};
    }
  }
`

export const PriceCoffee = styled.div`
  font-weight: bold;
`
