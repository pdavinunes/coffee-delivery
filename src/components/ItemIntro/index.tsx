import { ReactNode } from 'react'
import {
  ItemIntroContainer,
  PointItem,
  PointText,
  POINT_COLORS,
} from './styles'

interface ItemIntroProps {
  pointItemColor: keyof typeof POINT_COLORS
  text: ReactNode
  children: ReactNode
}

export function ItemIntro({ pointItemColor, text, children }: ItemIntroProps) {
  return (
    <ItemIntroContainer>
      <PointItem pointItemColor={pointItemColor}>{children}</PointItem>
      <PointText>{text}</PointText>
    </ItemIntroContainer>
  )
}
