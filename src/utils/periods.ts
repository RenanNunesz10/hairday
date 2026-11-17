import type { Appointment, Period, PeriodId } from '../types/appointment'

// Horários disponíveis, conforme o Figma.
export const PERIODS: Period[] = [
  {
    id: 'morning',
    label: 'Manhã',
    range: '09h-12h',
    hours: ['09:00', '10:00', '11:00', '12:00'],
  },
  {
    id: 'afternoon',
    label: 'Tarde',
    range: '13h-18h',
    hours: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
  },
  {
    id: 'night',
    label: 'Noite',
    range: '19h-21h',
    hours: ['19:00', '20:00', '21:00'],
  },
]

// Descobre o período de um horário: "14:00" -> "afternoon".
export function getPeriodId(time: string): PeriodId {
  const hour = Number(time.split(':')[0])
  if (hour <= 12) return 'morning'
  if (hour <= 18) return 'afternoon'
  return 'night'
}

export type AppointmentsByPeriod = Record<PeriodId, Appointment[]>

// filter() -> só a data escolhida
// sort()   -> ordem cronológica ("09:00" < "10:00" funciona como texto)
// reduce() -> separa os agendamentos em manhã, tarde e noite
export function groupAppointmentsByPeriod(
  appointments: Appointment[],
  date: string,
): AppointmentsByPeriod {
  return appointments
    .filter((appointment) => appointment.date === date)
    .sort((a, b) => a.time.localeCompare(b.time))
    .reduce<AppointmentsByPeriod>(
      (groups, appointment) => {
        const periodId = getPeriodId(appointment.time)
        return {
          ...groups,
          [periodId]: [...groups[periodId], appointment],
        }
      },
      { morning: [], afternoon: [], night: [] },
    )
}
