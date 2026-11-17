import type { Appointment, NewAppointment } from '../types/appointment'
import { AppointmentForm } from './AppointmentForm'
import { Logo } from './Logo'
import './ScheduleSidebar.css'

type ScheduleSidebarProps = {
  appointments: Appointment[]
  onAddAppointment: (data: NewAppointment) => void
}

export function ScheduleSidebar({ appointments, onAddAppointment }: ScheduleSidebarProps) {
  return (
    <aside className="sidebar">
      <Logo />

      <header className="sidebar__header">
        <h1 className="title-lg">Agende um atendimento</h1>
        <p className="text-sm">
          Selecione data, horário e informe o nome do cliente para criar o agendamento
        </p>
      </header>

      {/* A sidebar só repassa os dados e a função do App para o formulário */}
      <AppointmentForm appointments={appointments} onSubmit={onAddAppointment} />
    </aside>
  )
}
