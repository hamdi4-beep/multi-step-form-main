import { Route } from 'react-router-dom'

import App from './App.tsx'
import InfoComponent from './components/FormSection.tsx'
import PlanComponent from './components/SelectPlan.tsx'
import AddOnsComponent from './components/AddOns.tsx'
import Summary from './components/Summary.tsx'

export const route = (
  <Route path='/' element={<App />}>
    <Route index element={<InfoComponent />} />
    <Route path='/select-plan' element={<PlanComponent />} />
    <Route path='/add-ons' element={<AddOnsComponent />} />
    <Route path='/summary' element={<Summary />} />
  </Route>
)