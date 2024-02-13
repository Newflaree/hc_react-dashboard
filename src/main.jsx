// React
import React from 'react'
import ReactDOM from 'react-dom/client'
// React Router Dom
import { BrowserRouter } from 'react-router-dom';
// Material UI
import { CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme } from './theme';
// App
import App from './App.jsx'
// Globals Styles
import './styles.css'
// Context
import {
  AuthProvider,
  UiProvider
} from './context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <UiProvider>
        <BrowserRouter>
          <ThemeProvider theme={ appTheme }>
            <CssBaseline /> 
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </UiProvider>
    </AuthProvider>
  </React.StrictMode>,
)
