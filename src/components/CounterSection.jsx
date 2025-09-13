import { useEffect, useState } from 'react'

const CounterSection = () => {
  const [currentTime, setCurrentTime] = useState({
    date: '',
    time: '',
    days: 0,
  })

  useEffect(() => {
    const updateDateTime = () => {
      const baseDate = new Date()
      baseDate.setFullYear(baseDate.getFullYear() - 1)
      baseDate.setMonth(baseDate.getMonth())

      const now = new Date()
      const diffTime = Math.abs(now - baseDate)
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

      setCurrentTime({
        date: now.toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        time: now.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }),
        days: diffDays,
      })
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const counterItems = [
    { value: 1, label: 'Año' },
    { value: 0, label: 'Meses' },
    { value: currentTime.days, label: 'Días' },
  ]

  return (
    <section className="counter-section">
      <h2 className="counter-title">Nuestro Tiempo Juntos</h2>

      <div className="counter-container">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="counter-item"
            style={{
              animationDelay: `${(index + 1) * 0.1}s`,
              animationFillMode: 'forwards',
            }}
          >
            <div className="counter-value">{item.value}</div>
            <div className="counter-label">{item.label}</div>
          </div>
        ))}
      </div>

      <div
        className="time-display"
        style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
      >
        <p className="mb-6">En este preciso instante:</p>
        <div className="current-time">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 5h18v14H3zM16 3v2M8 3v2M3 9h18M12 15h2v2h-2z" />
              </svg>
              <span className="text-pink-light font-medium text-3xl md:text-4xl whitespace-nowrap font-serif">
                {currentTime.date}
              </span>
            </span>

            <span className="flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span className="text-pink-light font-medium text-3xl md:text-4xl whitespace-nowrap font-serif">
                {currentTime.time}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CounterSection
