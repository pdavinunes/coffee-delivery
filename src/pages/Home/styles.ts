import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-bottom: 9.8125rem;
  > span {
    padding: 0 20rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;

    color: ${(props) => props.theme['base-title']};
  }
`

export const BannerHome = styled.div`
  height: 3rem;
  background-image: url('Background.svg');
  background-repeat: no-repeat;
  background-position: center, center;
  background-size: cover;
  padding: 21rem 20rem 20rem 20rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;

    width: 36.75rem;
  }
`

export const ListCoffee = styled.div`
  padding: 0 20rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const HomeTitle = styled.strong`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 1.3;

  color: ${(props) => props.theme['base-title']};
`

export const HomeSubtitle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.25;
  line-height: 1.3;

  color: ${(props) => props.theme['base-subtitle']};
`
