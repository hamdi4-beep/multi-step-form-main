import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import App from './App.tsx'
import InfoComponent from './components/InfoComponent.tsx'
import PlanComponent from './components/PlanComponent.tsx'
import AddOnsComponent from './components/AddOnsComponent.tsx'
import Summary from './components/SummaryComponent.tsx'
import './css/output.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<InfoComponent />} />
          <Route path='/select-plan' element={<PlanComponent />} />
          <Route path='/add-ons' element={<AddOnsComponent />} />
          <Route path='/summary' element={<Summary />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)
