import { useState } from 'react'

export default function LandingGate({ onSuccess }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState({ first: false, last: false, email: false })

  const firstNameError = firstName.trim().length >= 2 ? '' : 'Please enter your first name'
  const lastNameError = lastName.trim().length >= 2 ? '' : 'Please enter your last name'
  const emailError = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ? ''
    : 'Please enter a valid email address'

  const isValid = !firstNameError && !lastNameError && !emailError

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitted(true)
    if (!isValid) return

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT
    const payload = {
      firstName,
      lastName,
      email,
      pathname: location.pathname,
      href: location.href,
      ts: new Date().toISOString(),
      ua: navigator.userAgent,
    }

    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } catch (_) {
        // ignore network failure
      }
    }

    localStorage.setItem('gate_ok', '1')
    localStorage.setItem('gate_name', `${firstName} ${lastName}`.trim())
    localStorage.setItem('gate_email', email)

    if (onSuccess) onSuccess()
    else location.reload()
  }

  const handleBlur = field => () => setTouched(t => ({ ...t, [field]: true }))

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '1rem' }}>
      <form
        onSubmit={handleSubmit}
        style={{ width: '100%', maxWidth: 420, background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
      >
        <h1 style={{ marginBottom: '0.5rem' }}>Welcome to HiboCare</h1>
        <p style={{ marginBottom: '1rem', color: '#555' }}>
          To visit the HiboScreen website, please enter your name and email address.
        </p>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            onBlur={handleBlur('first')}
            style={{ width: '100%', padding: '0.5rem' }}
          />
          {(touched.first || submitted) && firstNameError && (
            <div style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.25rem' }}>{firstNameError}</div>
          )}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            onBlur={handleBlur('last')}
            style={{ width: '100%', padding: '0.5rem' }}
          />
          {(touched.last || submitted) && lastNameError && (
            <div style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.25rem' }}>{lastNameError}</div>
          )}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={handleBlur('email')}
            style={{ width: '100%', padding: '0.5rem' }}
          />
          {(touched.email || submitted) && emailError && (
            <div style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.25rem' }}>{emailError}</div>
          )}
        </div>
        <button
          type="submit"
          disabled={!isValid}
          style={{ width: '100%', padding: '0.75rem', cursor: isValid ? 'pointer' : 'not-allowed' }}
        >
          Enter
        </button>
        <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>
          We’ll only use your details to follow up on your interest in HiboScreen.
        </p>
      </form>
    </div>
  )
}

