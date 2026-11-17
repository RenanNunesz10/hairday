import { useState, type FormEvent } from 'react'
import type { NewAppointment } from '../types/appointment'
import { PERIODS } from '../utils/periods'
import { getToday, isPastTime } from '../utils/date'
import { Button } from './Button'
import { DateInput } from './DateInput'
import { TextInput } from './TextInput'
import { TimeSlot } from './TimeSlot'
import { UserSquareIcon } from './Icons'
import './AppointmentForm.css'

type AppointmentFormProps = {
  onSubmit: (data: NewAppointment) => void
}

// Devolve a mensagem de erro, ou '' quando está tudo preenchido.
function validate(date: string, time: string, clientName: string): string {
  if (!date) return 'Selecione uma data.'
  if (!time) return 'Selecione um horário.'
  if (!clientName.trim()) return 'Informe o nome do cliente.'
  if (isPastTime(date, time)) return 'Esse horário já passou. Escolha outro.'
  return ''
}

export function AppointmentForm({ onSubmit }: AppointmentFormProps) {
  // Estado local de cada campo do formulário (inputs controlados).
  const [date, setDate] = useState(getToday())
  const [time, setTime] = useState('')
  const [clientName, setClientName] = useState('')
  const [error, setError] = useState('')

  // Sempre que o usuário mexe em um campo, a mensagem de erro some.
  function handleDateChange(newDate: string) {
    setDate(newDate)
    setTime('') // ao trocar o dia, o horário escolhido é limpo
    setError('')
  }

  function handleTimeSelect(newTime: string) {
    setTime(newTime)
    setError('')
  }

  function handleNameChange(newName: string) {
    setClientName(newName)
    setError('')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault() // evita recarregar a página

    const message = validate(date, time, clientName)
    if (message) {
      setError(message)
      return
    }

    // Envia os dados para o App (que cria o id e salva na lista).
    onSubmit({ date, time, clientName: clientName.trim() })

    // Limpa o formulário para o próximo agendamento (a data continua).
    setTime('')
    setClientName('')
    setError('')
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="appointment-date" className="title-md">
          Data
        </label>
        <DateInput
          id="appointment-date"
          value={date}
          min={getToday()}
          onChange={handleDateChange}
        />
      </div>

      <div className="form-field" role="group" aria-labelledby="times-title">
        <span id="times-title" className="title-md">
          Horários
        </span>

        {PERIODS.map((period) => (
          <div key={period.id} className="time-group">
            <span className="text-sm">{period.label}</span>
            <div className="time-grid">
              {period.hours.map((hour) => (
                <TimeSlot
                  key={hour}
                  time={hour}
                  selected={time === hour}
                  disabled={isPastTime(date, hour)}
                  onSelect={handleTimeSelect}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="form-field">
        <label htmlFor="client-name" className="title-md">
          Cliente
        </label>
        <TextInput
          id="client-name"
          placeholder="Nome do cliente"
          icon={<UserSquareIcon />}
          value={clientName}
          onChange={handleNameChange}
        />
      </div>

      {error && (
        <p className="form-error text-sm" role="alert">
          {error}
        </p>
      )}

      <Button type="submit">Agendar</Button>
    </form>
  )
}
