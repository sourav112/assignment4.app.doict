import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './Router/routes.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
     
  </StrictMode>,
)
