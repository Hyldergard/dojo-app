/**
 * DOJO-APP - Entry Point
 * 
 * @description Entry point aplikasi React yang melakukan render root component
 * @author Halvis Team
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Create root and render App
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
