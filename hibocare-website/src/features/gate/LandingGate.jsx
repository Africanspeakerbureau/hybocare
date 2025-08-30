import { useState } from 'react'

export default function LandingGate({ children }) {
  const [open, setOpen] = useState(false)
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT

  if (open) return children

  const handleSubmit = e => {
    e.preventDefault()
    setOpen(true)
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome</h1>
      <form action={endpoint} method="POST" onSubmit={handleSubmit}>
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}
