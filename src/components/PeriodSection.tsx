import type { ComponentType } from 'react'
import type { Appointment, Period, PeriodId } from '../types/appointment'
import { AppointmentItem } from './AppointmentItem'
import { CloudSunIcon, MoonStarsIcon, SunHorizonIcon } from './Icons'
import './PeriodSection.css'

// Cada período tem o seu ícone. Record garante que os 3 ids estão aqui.
const PERIOD_ICONS: Record<PeriodId, ComponentType> = {
  morning: SunHorizonIcon,
  afternoon: CloudSunIcon,
  night: MoonStarsIcon,
}

type PeriodSectionProps = {
  period: Period
  appointments: Appointment[]
  onDeleteAppointment: (id: string) => void
}

export function PeriodSection({ period, appointments, onDeleteAppointment }: PeriodSectionProps) {
  const Icon = PERIOD_ICONS[period.id]

  return (
    <section className="period" aria-labelledby={`period-${period.id}`}>
      <header className="period__header">
        <div className="period__title">
          <Icon />
          <h2 id={`period-${period.id}`} className="text-sm">
            {period.label}
          </h2>
        </div>
        <span className="text-sm">{period.range}</span>
      </header>

      {appointments.length === 0 ? (
        <p className="period__empty text-sm">
          Você ainda não tem agendamentos cadastrados nesse período.
        </p>
      ) : (
        <ul className="period__list">
          {appointments.map((appointment) => (
            <AppointmentItem
              key={appointment.id}
              appointment={appointment}
              onDelete={onDeleteAppointment}
            />
          ))}
        </ul>
      )}
    </section>
  )
}
