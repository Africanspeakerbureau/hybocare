import { useState, useEffect } from 'react'
import LandingGate from './LandingGate'

const days = Number(import.meta.env.VITE_GATE_TTL_DAYS ?? 30)
const ttlMs = days * 864e5

window.clearGate = () =>
  ['gate_ok', 'gate_name', 'gate_email', 'gate_until'].forEach(k =>
    localStorage.removeItem(k)
  )

export default function Gate({ children }) {
  const [ok, setOk] = useState(false)

  useEffect(() => {
    const bypass = import.meta.env.VITE_GATE_BYPASS === 'true'
    const storedOk = localStorage.getItem('gate_ok') === '1'
    const until = parseInt(localStorage.getItem('gate_until') || '0', 10)
    const allowed = storedOk && until > Date.now()

    if (allowed) {
      localStorage.setItem('gate_until', String(Date.now() + ttlMs))
    }
    setOk(bypass || allowed)
  }, [])

  if (ok) return children
  return <LandingGate onSuccess={() => setOk(true)} />
}
