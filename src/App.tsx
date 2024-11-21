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
    <div className="App font-['Ubuntu'] grid place-content-center h-screen">
      <div className="bg-white flex w-[1024px] p-4 pr-0 rounded-lg">
        <SideBar currentIndex={paths[location.pathname]} />
        
        <div className="px-16 pt-8 w-full outline">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App