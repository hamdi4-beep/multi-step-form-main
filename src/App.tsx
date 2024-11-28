import SideBar from "./components/SideBar"
import { Outlet, useLocation } from "react-router-dom"

const paths = {
  '/': 1,
  '/select-plan': 2,
  '/add-ons': 3,
  '/summary': 4
} as {
  [key: string]: number
}

function App() {
  const location = useLocation()

  return (
    <div className="App font-['Ubuntu']">
      <div className="w-full bg-white md:rounded-lg overflow-hidden">
        <SideBar currentIndex={paths[location.pathname]} />
        
        <div className="">
          <div className="w-full bg-white relative">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App