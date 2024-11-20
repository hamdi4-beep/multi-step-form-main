import {createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { route } from './route'

import './css/output.css'

const router = createBrowserRouter(createRoutesFromElements(route))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
