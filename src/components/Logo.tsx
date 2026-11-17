import { ScissorsIcon } from './Icons'
import './Logo.css'

export function Logo() {
  return (
    <div className="logo">
      <span>HairDay</span>
      <ScissorsIcon size={18} className="logo__icon" />
    </div>
  )
}
