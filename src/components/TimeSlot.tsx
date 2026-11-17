import './TimeSlot.css'

type TimeSlotProps = {
  time: string
  selected: boolean
  disabled: boolean
  onSelect: (time: string) => void
}

export function TimeSlot({ time, selected, disabled, onSelect }: TimeSlotProps) {
  return (
    <button
      type="button"
      className={`time-slot text-md ${selected ? 'time-slot--selected' : ''}`}
      disabled={disabled}
      aria-pressed={selected}
      onClick={() => onSelect(time)}
    >
      {time}
    </button>
  )
}
