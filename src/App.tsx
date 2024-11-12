import { Outlet } from "react-router-dom"

const steps = [
  'Your Info',
  'Select Plan',
  'Add-Ons',
  'Summary'
]

function Step({
  title
}: {
  title: string
}) {
  const stepNumber = steps.indexOf(title) + 1

  return (
    <div className="step">
      <span className={`py-[.4em] px-[.8em] rounded-full border text-white ${stepNumber === 1 ? 'active' : ''}`}>{stepNumber}</span>

      <div>
        <span className="text-neutral-light-gray font-light">STEP {stepNumber}</span>
        <h2 className=" text-white">{title.toUpperCase()}</h2>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App font-['Ubuntu'] grid place-content-center h-screen">
      <div className="bg-white max-w-4xl p-4 flex rounded-lg">
        <div className="left p-6 pr-16 flex-shrink-0">
          {steps.map((title, i) => (
            <Step
              title={title}
              key={i}
            />
          ))}
        </div>

        <section className="relative right p-16 pt-8">
          <h1 className="text-primary-marine-blue font-bold text-3xl">Personal info</h1>
          <p className="text-neutral-cool-gray">Please provide your name, email address, and phone number.</p>

          <Outlet />
        </section>
      </div>
    </div>
  )
}

export default App