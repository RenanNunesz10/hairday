import type { Appointment } from '../types/appointment'
import { groupAppointmentsByPeriod, PERIODS } from '../utils/periods'
import { DateInput } from './DateInput'
import { PeriodSection } from './PeriodSection'
import './AppointmentList.css'

type AppointmentListProps = {
  appointments: Appointment[]
  selectedDate: string
  onDateChange: (date: string) => void
  onDeleteAppointment: (id: string) => void
}

export function AppointmentList({
  appointments,
  selectedDate,
  onDateChange,
  onDeleteAppointment,
}: AppointmentListProps) {
  // filter + sort + reduce: { morning: [...], afternoon: [...], night: [...] }
  const groups = groupAppointmentsByPeriod(appointments, selectedDate)

  return (
    <section className="agenda">
      <header className="agenda__header">
        <div>
          <h2 className="title-lg">Sua agenda</h2>
          <p className="text-sm">Consulte os seus cortes de cabelo agendados por dia</p>
        </div>
        <DateInput
          compact
          label="Data da agenda"
          value={selectedDate}
          onChange={onDateChange}
        />
      </header>

      <div className="agenda__periods">
        {PERIODS.map((period) => (
          <PeriodSection
            key={period.id}
            period={period}
            appointments={groups[period.id]}
            onDeleteAppointment={onDeleteAppointment}
          />
        ))}
      </div>
    </section>
  )
}
