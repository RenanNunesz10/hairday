import type { Appointment } from '../types/appointment'
import { TrashIcon } from './Icons'
import './AppointmentItem.css'

type AppointmentItemProps = {
  appointment: Appointment
}

export function AppointmentItem({ appointment }: AppointmentItemProps) {
  return (
    <li className="appointment-item">
      <strong className="title-md">{appointment.time}</strong>
      <span className="text-md">{appointment.clientName}</span>
      <button
        type="button"
        className="appointment-item__delete"
        aria-label={`Excluir agendamento de ${appointment.clientName} às ${appointment.time}`}
      >
        <TrashIcon size={18} />
      </button>
    </li>
  )
}
