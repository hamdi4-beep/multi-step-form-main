const list = [
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
        <div className={`side-bar flex md:rounded-lg md:block justify-center md:gap-4 pb-32 pt-8 md:pr-32 md:h-[600px]`}>
          {list.map((title, i) => {
            const index = list.indexOf(title) + 1

            return (
                <div className="flex items-center gap-4 px-4 md:px-8 md:mb-4" key={i}>
                    <span className={`py-[.4em] px-[.8em] rounded-full border text-white ${index === currentIndex ? 'active' : ''}`}>{index}</span>

                    <div className="hidden md:block flex-shrink-0">
                        <span className="text-neutral-light-gray font-light">STEP {index}</span>
                        <h2 className=" text-white">{title.toUpperCase()}</h2>
                    </div>
                </div>
            )})}
        </div>
    )
}

export default SideBar