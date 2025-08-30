import LandingGate from './LandingGate'

const bypass = String(import.meta.env.VITE_GATE_BYPASS) === 'true'

export default function Gate({ children }) {
  if (bypass) return children
  return <LandingGate>{children}</LandingGate>
}
