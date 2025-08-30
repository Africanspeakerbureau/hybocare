import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Gate from './features/gate/Gate.jsx'

window.clearGate = () => {
  localStorage.removeItem('gate_ok');
  localStorage.removeItem('gate_name');
  localStorage.removeItem('gate_email');
  location.reload();
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Gate>
      <App />
    </Gate>
  </React.StrictMode>,
)
