import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp.jsx'

// Importación de estilos globales
import './styles.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <GiftExpertApp />
  // </StrictMode>,
)
