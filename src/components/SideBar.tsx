const list = [
    'Your Info',
    'Select Plan',
    'Add-Ons',
    'Summary'
]

const sideBarHeight = 'h-[600px]'

function SideBar({
    currentIndex
}: {
    currentIndex: number
}) {
    return (
        <div className={`side-bar rounded-lg`}>
          {list.map((title, i) => {
            const index = list.indexOf(title) + 1

            return (
                <div className="step" key={i}>
                    <span className={`py-[.4em] px-[.8em] rounded-full border text-white ${index === currentIndex ? 'active' : ''}`}>{index}</span>

                    <div className="step-information hidden md:block">
                        <span className="text-neutral-light-gray font-light">STEP {index}</span>
                        <h2 className=" text-white">{title.toUpperCase()}</h2>
                    </div>
                </div>
            )})}
        </div>
    )
}

export default SideBar