import { useState, type FormEvent } from 'react'
import { PERIODS } from '../utils/periods'
import { getToday, isPastTime } from '../utils/date'
import { Button } from './Button'
import { DateInput } from './DateInput'
import { TextInput } from './TextInput'
import { TimeSlot } from './TimeSlot'
import { UserSquareIcon } from './Icons'
import './AppointmentForm.css'

export function AppointmentForm() {
  // Estado local de cada campo do formulário (inputs controlados).
  const [date, setDate] = useState(getToday())
  const [time, setTime] = useState('')
  const [clientName, setClientName] = useState('')

  function handleDateChange(newDate: string) {
    setDate(newDate)
    setTime('') // ao trocar o dia, o horário escolhido é limpo
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault() // evita recarregar a página
    // Etapa 4: enviar o agendamento para o App.
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
                  onSelect={setTime}
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
          onChange={setClientName}
        />
      </div>

      <Button type="submit">Agendar</Button>
    </form>
  )
}
