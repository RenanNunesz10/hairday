import type { ReactNode } from 'react'
import './FieldBox.css'

type TextInputProps = {
  id?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  icon?: ReactNode
}

export function TextInput({ id, value, onChange, placeholder, icon }: TextInputProps) {
  return (
    <div className="field-box">
      {icon && <span className="field-box__icon">{icon}</span>}
      <input
        id={id}
        type="text"
        className="text-md"
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
