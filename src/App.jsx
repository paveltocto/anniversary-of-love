import { useRef, useState } from 'react'
import Decorations from './components/Decorations'
import Header from './components/Header'
import CounterSection from './components/CounterSection'
import Modal from './components/Modal'
import Signature from './components/Signature'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const counterSectionRef = useRef(null)

  const handleSurpriseClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleScrollDown = () => {
    if (counterSectionRef.current) {
      counterSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <Decorations />

      <div className="container">
        <Header
          onSurpriseClick={handleSurpriseClick}
          onScrollDown={handleScrollDown}
        />

        <div ref={counterSectionRef}>
          <CounterSection />
        </div>

        <Signature />
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default App
