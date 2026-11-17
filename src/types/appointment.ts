// Representa um agendamento cadastrado no HairDay.
export type Appointment = {
  id: string
  clientName: string
  date: string // formato "YYYY-MM-DD" (mesmo valor do <input type="date">)
  time: string // formato "HH:00"
}

// Os três períodos do dia exibidos na agenda.
export type PeriodId = 'morning' | 'afternoon' | 'night'

export type Period = {
  id: PeriodId
  label: string
  range: string // texto exibido no canto do card, ex.: "09h-12h"
  hours: string[]
}
