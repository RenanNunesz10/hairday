import type { MouseEvent } from 'react'
import { CalendarIcon, CaretDownIcon } from './Icons'
import './FieldBox.css'
import './DateInput.css'

type DateInputProps = {
  id?: string
  value: string
  onChange: (value: string) => void
  min?: string
  label?: string // usado como aria-label quando não há <label> visível
  compact?: boolean
}

export function DateInput({ id, value, onChange, min, label, compact = false }: DateInputProps) {
  // Abre o calendário nativo ao clicar em qualquer parte do campo.
  function handleClick(event: MouseEvent<HTMLInputElement>) {
    try {
      event.currentTarget.showPicker()
    } catch {
      // alguns navegadores não suportam showPicker; o campo continua funcionando
    }
  }

  return (
    <div className={`field-box date-input ${compact ? 'date-input--compact' : ''}`}>
      <span className="field-box__icon">
        <CalendarIcon />
      </span>
      <input
        id={id}
        type="date"
        className="text-md"
        value={value}
        min={min}
        aria-label={label}
        onClick={handleClick}
        onChange={(event) => onChange(event.target.value)}
      />
      <CaretDownIcon className="date-input__caret" />
    </div>
  )
}
