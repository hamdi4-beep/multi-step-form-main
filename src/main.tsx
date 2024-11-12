import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from './App.tsx'
import FormComponent from './components/FormComponent.tsx'
import './css/output.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>No such route was found!</div>,
    children: [
      {
        path: '/',
        element: <FormComponent />
      },
      {
        path: '/step-2',
        element: <div>Second Step!</div>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
