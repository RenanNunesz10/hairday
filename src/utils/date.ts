// Data de hoje no formato "YYYY-MM-DD", usando o fuso horário local.
// (toISOString() usa UTC e pode devolver o dia errado à noite.)
export function getToday(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Verifica se um horário de uma data já passou.
export function isPastTime(date: string, time: string): boolean {
  const slot = new Date(`${date}T${time}:00`)
  return slot.getTime() < Date.now()
}
