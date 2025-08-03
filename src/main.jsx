import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* Broserroter se wrap karna parega  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
