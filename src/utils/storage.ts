import type { Appointment } from '../types/appointment'

const STORAGE_KEY = 'hairday:appointments'

// Confere se um valor qualquer tem o formato de Appointment.
function isAppointment(value: unknown): value is Appointment {
  if (typeof value !== 'object' || value === null) return false
  const item = value as Record<string, unknown>
  return (
    typeof item.id === 'string' &&
    typeof item.clientName === 'string' &&
    typeof item.date === 'string' &&
    typeof item.time === 'string'
  )
}

// Lê os agendamentos salvos. Se não houver nada (ou o dado estiver
// corrompido), começa com uma lista vazia.
export function loadAppointments(): Appointment[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return []
    const parsed: unknown = JSON.parse(saved)
    return Array.isArray(parsed) ? parsed.filter(isAppointment) : []
  } catch {
    return []
  }
}

export function saveAppointments(appointments: Appointment[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments))
  } catch {
    // navegação privada ou armazenamento cheio: o app continua funcionando em memória
  }
}
