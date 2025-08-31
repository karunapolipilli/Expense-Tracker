import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Mobile preview app (kept inside frontend/Mobile view)
import MobileApp from '../Mobile view/MobileApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isMobilePreview ? <MobileApp /> : <App />}
  </StrictMode>,
)
