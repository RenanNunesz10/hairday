import type { ComponentProps } from 'react'
import './Button.css'

// Aceita todas as props de um <button> normal (type, disabled, onClick...).
type ButtonProps = ComponentProps<'button'>

export function Button({ className = '', ...props }: ButtonProps) {
  return <button className={`button title-sm ${className}`} {...props} />
}
