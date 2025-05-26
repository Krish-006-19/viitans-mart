import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App1 from './App1.jsx'
import { PageProvider } from './ContextAPI/Context.jsx'
import store from './Redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PageProvider>
        <App1 />
      </PageProvider>
    </Provider>
  </StrictMode>,
)
