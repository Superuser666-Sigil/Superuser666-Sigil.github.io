import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './styles/dark-theme.css'

// Enable dark theme by default (Graphite + Electric Blue)
document.documentElement.setAttribute('data-theme', 'dark')

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
