import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 4.5rem;
  height: 2rem;

  /* Base/Button */

  background: ${(props) => props.theme['base-button']};
  border-radius: 0.375rem;

  > svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }

  > input {
    background: transparent;
    margin: 0;
    border: none;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    :disabled {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      /* identical to box height, or 21px */

      text-align: center;

      /* Base/Title */

      color: ${(props) => props.theme['base-title']};
    }
  }
`
