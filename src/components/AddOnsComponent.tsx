import * as React from 'react'
import { Link, useLocation } from "react-router-dom"

const list = [{
    header: 'Online service',
    subheader: 'Access to multiplayer games',
    price: {
        mo: '$1/mo',
        yr: '$10/yr'
    }
}, {
    header: 'Larger storage',
    subheader: 'Extra 1TB of cloud save',
    price: {
        mo: '$2/mo',
        yr: '$20/yr'
    }
}, {
    header: 'Customizable profile',
    subheader: 'Custom theme on your profile',
    price: {
        mo: '$2/mo',
        yr: '$20/yr'
    }
}] as {
    header: string
    subheader: string
    price: {
        [key: string]: string
    }
}[]

function AddOnsComponent() {
    const [selectedAddOn, setSelectedAddOn] = React.useState('')
    const location = useLocation()

    console.log(location)

    return (
        <div className="content">
            <h2 className="text-primary-marine-blue font-bold text-3xl mb-2">Pick add-ons</h2>
            <p className="text-neutral-cool-gray">Add-ons enhance your gaming experience.</p>

            <div className="mt-8">
                {list.map((item, i) => {
                    return (
                        <div onClick={() => setSelectedAddOn(item.header)} className={`${selectedAddOn === item.header ? 'selected-plan' : ''} hover:selected-plan border rounded-md flex items-center gap-4 p-4 mt-4`} key={i}>
                            <input type="checkbox" />

                            <div className="mr-32">
                                <h3 className="text-primary-marine-blue font-bold">{item.header}</h3>
                                <p className="text-neutral-cool-gray">{item.subheader}</p>
                            </div>

                            <span className="ml-auto text-primary-marine-blue">+{item.price[location.state?.subscription ?? 'mo']}</span>
                        </div>
                    )
                })}
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