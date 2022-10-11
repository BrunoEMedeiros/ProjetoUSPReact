import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from "./AppRoutes";
import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
    <GlobalStyles />
  </React.StrictMode>
)
