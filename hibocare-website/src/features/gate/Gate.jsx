import { useState } from 'react'
import LandingGate from './LandingGate'

const bypass = String(import.meta.env.VITE_GATE_BYPASS) === 'true'

export default function Gate({ children }) {
  const [ok, setOk] = useState(() =>
    bypass || localStorage.getItem('gate_ok') === '1'
  )

  if (ok) return children
  return <LandingGate onSuccess={() => setOk(true)} />
}
