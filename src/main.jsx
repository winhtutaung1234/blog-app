import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import AppThemeProvider from './components/AppThemeProvider.jsx'
import AuthUser from './components/AuthUser.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthUser>
        <AppThemeProvider>
          <CssBaseline />
          <App />
        </AppThemeProvider>
      </AuthUser>
    </Provider>
  </React.StrictMode>,
)
