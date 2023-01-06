import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 5rem 20rem;

  > strong {
    display: block;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};
  }

  > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;
`

export const OrderInfo = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
  }

  border: double 2px transparent;
  border-radius: 0 20px 0 20px;
  background-image: linear-gradient(
      ${(props) => props.theme.background},
      ${(props) => props.theme.background}
    ),
    radial-gradient(
      circle at top left,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`
