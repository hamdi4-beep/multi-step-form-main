import { Link } from "react-router-dom"

const list = [{
    header: 'Online service',
    subheader: 'Access to multiplayer games',
    price: '$1/mo'
}, {
    header: 'Larger storage',
    subheader: 'Extra 1TB of cloud save',
    price: '$2/mo'
}, {
    header: 'Customizable profile',
    subheader: 'Custom theme on your profile',
    price: '$2/mo'
}]

function AddOnsComponent() {
    return (
        <div className="content">
            <h2 className="text-primary-marine-blue font-bold text-3xl mb-2">Pick add-ons</h2>
            <p className="text-neutral-cool-gray">Add-ons enhance your gaming experience.</p>

            <div className="mt-8">
                {list.map((item, i) => (
                    <div className="border rounded-md flex items-center gap-4 p-4 mt-4" key={i}>
                        <input type="checkbox" />

                        <div className="mr-32">
                            <h3 className="text-primary-marine-blue font-bold">{item.header}</h3>
                            <p className="text-neutral-cool-gray">{item.subheader}</p>
                        </div>

                        <span className="ml-auto text-primary-marine-blue">+{item.price}</span>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-32">
                <button className="text-neutral-cool-gray">
                    <Link to='/select-plan'>Go Back</Link>
                </button>

                <button className="primary-btn">
                    <Link to='/summary'>Next Step</Link>
                </button>
            </div>
        </div>
    )
}

export default AddOnsComponent