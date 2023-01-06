import styled from 'styled-components'

export const ItemIntroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const POINT_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  base: 'base-text',
  purple: 'purple',
} as const

interface PointItemProps {
  pointItemColor: keyof typeof POINT_COLORS
}

export const PointItem = styled.div<PointItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 1000px;
  line-height: 1;
  color: ${(props) => props.theme.white};

  background-color: ${(props) =>
    props.theme[POINT_COLORS[props.pointItemColor]]};
`

export const PointText = styled.span`
  color: ${(props) => props.theme['base-text']};
`
