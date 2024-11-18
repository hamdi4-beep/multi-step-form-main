import AsideComponent from "./components/AsideBar"
import { Outlet, useLocation } from "react-router-dom"

function App() {
  const location = useLocation()

  const paths = {
    '/': 1,
    '/select-plan': 2,
    '/add-ons': 3,
    '/summary': 4
  } as {
    [key: string]: number
  }

  return (
    <div className="App font-['Ubuntu'] grid place-content-center h-screen">
      <div className="bg-white w-[1024px] p-4 pr-0 flex rounded-lg">
        <AsideComponent currentIndex={paths[location.pathname]} />
        <Outlet />
      </div>
    </div>
  )
}

export default App