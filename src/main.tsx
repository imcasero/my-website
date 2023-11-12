import React from 'react'
import ReactDOM from 'react-dom/client'
import './input.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
