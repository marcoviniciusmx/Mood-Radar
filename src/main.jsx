import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/Home'
import { GlobalStyles } from './styles/GlobalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <GlobalStyles />
  </StrictMode>,
)
