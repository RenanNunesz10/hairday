import { AppointmentForm } from './AppointmentForm'
import { Logo } from './Logo'
import './ScheduleSidebar.css'

export function ScheduleSidebar() {
  return (
    <aside className="sidebar">
      <Logo />

      <header className="sidebar__header">
        <h1 className="title-lg">Agende um atendimento</h1>
        <p className="text-sm">
          Selecione data, horário e informe o nome do cliente para criar o agendamento
        </p>
      </header>

      <AppointmentForm />
    </aside>
  )
}
