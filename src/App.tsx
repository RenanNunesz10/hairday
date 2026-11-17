import { useState } from 'react'
import type { Appointment } from './types/appointment'
import { getToday } from './utils/date'
import { AppointmentList } from './components/AppointmentList'
import { ScheduleSidebar } from './components/ScheduleSidebar'
import './App.css'

// Dados de exemplo só para visualizar a interface.
// Na etapa 4 eles serão substituídos por um useState<Appointment[]>.
const SAMPLE_APPOINTMENTS: Appointment[] = [
  { id: '1', clientName: 'Ryan Dorwart', date: getToday(), time: '11:00' },
  { id: '2', clientName: 'Livia Curtis', date: getToday(), time: '13:00' },
  { id: '3', clientName: 'Randy Calzoni', date: getToday(), time: '14:00' },
]

function App() {
  // Data exibida na agenda (lado direito).
  const [selectedDate, setSelectedDate] = useState(getToday())

  return (
    <div className="app">
      <ScheduleSidebar />
      <AppointmentList
        appointments={SAMPLE_APPOINTMENTS}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
    </div>
  )
}

export default App
