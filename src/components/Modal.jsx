import { useEffect, useRef } from 'react'

const Modal = ({ isOpen, onClose }) => {
  const heartsContainerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const container = heartsContainerRef.current
    if (!container) return

    // Clear existing hearts
    container.innerHTML = ''

    const heartCount = 50

    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div')
      heart.innerHTML = '❤'

      const colors = ['#ff8fab', '#ffb3c6', '#c77dff', '#e0bbe4']
      heart.style.color = colors[Math.floor(Math.random() * colors.length)]
      heart.style.position = 'absolute'
      heart.style.left = `${Math.random() * 100}%`
      heart.style.fontSize = `${Math.random() * 3 + 2}rem`
      heart.style.opacity = '0'
      heart.style.animation = `fall ${8 + Math.random() * 12}s linear infinite`
      heart.style.animationDelay = `${Math.random() * 10}s`
      heart.style.zIndex = '2'

      container.appendChild(heart)
    }

    // Handle body scroll
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
      container.innerHTML = ''
    }
  }, [isOpen])

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal" onClick={handleBackdropClick}>
      {/* Modal Hearts Background */}
      <div ref={heartsContainerRef} className="modal-hearts" />

      {/* Modal Content */}
      <div className="modal-content">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-pink-light text-4xl cursor-pointer transition-all duration-300 z-[1020] hover:transform hover:rotate-90 hover:scale-120 hover:text-cream"
        >
          &times;
        </button>

        {/* Modal Title */}
        <h2 className="modal-title">Para Ti, Mi Gordita</h2>

        {/* Modal Message */}
        <p className="modal-message">
          Cada momento a tu lado es un tesoro que guardo en lo más profundo de
          mi corazón. En este primer aniversario celebro no solo el tiempo que
          hemos compartido, sino también la dicha de haberte encontrado, de
          crecer a tu lado y de descubrir en ti mi razón de ser. Eres mi
          alegría, mi refugio y mi mayor bendición. Gracias por llenar mi vida
          de amor, de sonrisas y de sueños compartidos. Hoy y siempre, quiero
          recordarte que mi corazón te pertenece por completo.
        </p>

        {/* Signature */}
        <div className="signature">Por siempre tuyo</div>
      </div>
    </div>
  )
}

export default Modal
