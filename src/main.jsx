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
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"


mapboxgl.accessToken = 'pk.eyJ1IjoibmV3ZmxhcmUiLCJhIjoiY2tvMGRqbjFqMGNsajJvcDlqcWZrY2pnZSJ9.fWEgU2ZuPX41mhJxa-6rbg';


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
