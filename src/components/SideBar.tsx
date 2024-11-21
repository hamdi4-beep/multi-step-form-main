const list = [
    'Your Info',
    'Select Plan',
    'Add-Ons',
    'Summary'
]

const sideBarHeight = 'h-[500px]'

function SideBar({
    currentIndex
}: {
    currentIndex: number
}) {
    return (
        <div className={`left p-6 pr-32 flex-shrink-0 ${sideBarHeight}`}>
          {list.map((title, i) => {
            const index = list.indexOf(title) + 1

            return (
                <div className="step" key={i}>
                    <span className={`py-[.4em] px-[.8em] rounded-full border text-white ${index === currentIndex ? 'active' : ''}`}>{index}</span>

                    <div>
                        <span className="text-neutral-light-gray font-light">STEP {index}</span>
                        <h2 className=" text-white">{title.toUpperCase()}</h2>
                    </div>
                </div>
            )})}
        </div>
    )
}

export default SideBar