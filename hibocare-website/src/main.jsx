import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoot from './App.jsx'
import Gate from './features/gate/Gate'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gate>
      <AppRoot />
    </Gate>
  </StrictMode>,
)
