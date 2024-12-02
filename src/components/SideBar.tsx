const steps = [
    'Your Info',
    'Select Plan',
    'Add-Ons',
    'Summary'
]

function SideBar({
    currentIndex
}: {
    currentIndex: number
}) {
    return (
        <div className={`side-bar flex md:rounded-lg md:block justify-center md:gap-4 pb-32 pt-8 md:pr-16 md:h-[550px]`}>
          {steps.map((step, i) => {
            const index = steps.indexOf(step) + 1

            return (
                <div className="flex items-center gap-4 px-4 md:px-8 md:mb-4" key={i}>
                    <span className={`py-[.4em] px-[.8em] rounded-full border ${index === currentIndex ? 'bg-white text-black' : 'text-white'}`}>{index}</span>

                    <div className="hidden md:block flex-shrink-0">
                        <span className="text-neutral-light-gray font-light">STEP {index}</span>
                        <h2 className=" text-white">{step.toUpperCase()}</h2>
                    </div>
                </div>
            )})}
        </div>
    )
}

export default SideBar