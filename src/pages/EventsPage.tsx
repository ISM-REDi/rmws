import { useEffect, useState } from 'react'

interface EventData {
  date: string
  title: string
  venue: string
  link: string
}

export default function EventsPage() {
  const [events, setEvents] = useState<EventData[]>([])
  const [selected, setSelected] = useState<EventData | null>(null)

  useEffect(() => {
    fetch('/events.json')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data)
        setSelected(data[0])
      })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDate = e.target.value
    const evt = events.find((ev) => ev.date === selectedDate)
    if (evt) setSelected(evt)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-2">最新イベント</h2>
      {selected && (
        <div className="border rounded p-4 bg-white shadow mb-6">
          <p className="text-lg font-bold mb-2">{selected.title}</p>
          <p>📅 {selected.date}</p>
          <p>📍 {selected.venue}</p>
          <a
            href={selected.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2 block"
          >
            イベントページを見る
          </a>
        </div>
      )}
      <label htmlFor="event-select" className="block text-sm font-medium mb-1">
        過去のイベントを選択：
      </label>
      <select
        id="event-select"
        onChange={handleChange}
        className="border rounded p-2 w-full"
        value={selected?.date || ''}
      >
        {events.map((e) => (
          <option key={e.date} value={e.date}>
            {e.date} - {e.title}
          </option>
        ))}
      </select>
    </div>
  )
}
