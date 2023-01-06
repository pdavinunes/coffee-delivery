import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { CounterContainer } from './styles'

interface CounterProps {
  initialValue: number
  onChange?: (quantity: number) => void
}

export function Counter({ onChange, initialValue = 0 }: CounterProps) {
  const [counterValue, setCounterValue] = useState(initialValue)

  function handleSetCounterValue(type?: string) {
    const newCounterValue =
      type === 'minus' ? counterValue - 1 : counterValue + 1

    if (newCounterValue <= 0) return

    setCounterValue(newCounterValue)
    if (onChange) onChange(newCounterValue)
  }

  return (
    <CounterContainer>
      <Minus weight="bold" onClick={() => handleSetCounterValue('minus')} />
      <input
        type="number"
        disabled
        value={counterValue}
        min={1}
        max={99}
        id=""
      />
      <Plus weight="bold" onClick={() => handleSetCounterValue()} />
    </CounterContainer>
  )
}
