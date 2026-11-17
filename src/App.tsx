import { useState } from 'react'
import type { Appointment, NewAppointment } from './types/appointment'
import { getToday } from './utils/date'
import { AppointmentList } from './components/AppointmentList'
import { ScheduleSidebar } from './components/ScheduleSidebar'
import './App.css'

function App() {
  // Lista com todos os agendamentos (começa vazia).
  const [appointments, setAppointments] = useState<Appointment[]>([])
  // Data exibida na agenda (lado direito).
  const [selectedDate, setSelectedDate] = useState(getToday())

  function handleAddAppointment(data: NewAppointment) {
    const newAppointment: Appointment = {
      id: crypto.randomUUID(),
      ...data,
    }

    // Nunca usamos push(): criamos um NOVO array com o item no final.
    setAppointments((current) => [...current, newAppointment])

    // Mostra na agenda o dia que acabou de ser agendado.
    setSelectedDate(data.date)
  }

  return (
    <div className="app">
      <ScheduleSidebar onAddAppointment={handleAddAppointment} />
      <AppointmentList
        appointments={appointments}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
    </div>
  )
}

export default App
