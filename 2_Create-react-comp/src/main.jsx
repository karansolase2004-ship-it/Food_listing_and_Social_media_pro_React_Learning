import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// that css file is directly imported here which after internally added in index.html by vite + react. it is bu default provided u ca comment out below css if u do not want apply ur own css 
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
