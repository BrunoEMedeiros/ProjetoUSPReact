import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from "./AppRoutes";
import { CrudProvider } from './contexts/context_crud';
import { ModalProvider } from './contexts/context_modal';
import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CrudProvider>
      <ModalProvider>
        <AppRoutes />
        <GlobalStyles />
      </ModalProvider>
    </CrudProvider>
  </React.StrictMode>
)
