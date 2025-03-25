import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiftExpertApp />
  </StrictMode>,
)
