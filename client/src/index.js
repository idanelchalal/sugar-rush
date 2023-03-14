import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Context, initialContext } from './context/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value={initialContext}>
        <App />
    </Context.Provider>
)
