import AsideBar from "./components/AsideBar"
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
      <div className="bg-white w-[1024px] p-4 pr-0 flex rounded-lg">
        <AsideBar currentIndex={paths[location.pathname]} />
        <Outlet />
      </div>
    </div>
  )
}

export default App