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
    <div className="App font-['Ubuntu'] pt-4">
      <div className="md:flex w-full max-w-4xl md:rounded-lg overflow-hidden md:p-4 md:bg-white mx-auto">
        <SideBar currentIndex={paths[location.pathname]} />
        
        <div className="px-8 md:px-0 w-full">
          <div className="content-container md:transform-none w-full bg-neutral-white rounded-lg px-8 md:px-16 py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App