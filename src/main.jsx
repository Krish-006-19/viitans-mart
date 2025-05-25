import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App1 from './App1.jsx'
import { PageProvider } from './ContextAPI/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageProvider>
    <App1 />
    </PageProvider>
  </StrictMode>,
)
