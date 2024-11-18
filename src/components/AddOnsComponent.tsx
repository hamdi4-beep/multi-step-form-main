import * as React from 'react'
import { Link, useLocation } from "react-router-dom"

export const addons = [{
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: {
        mo: '$1/mo',
        yr: '$10/yr'
    }
}, {
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: {
        mo: '$2/mo',
        yr: '$20/yr'
    }
}, {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: {
        mo: '$2/mo',
        yr: '$20/yr'
    }
}] as {
    title: string
    description: string
    price: {
        [key: string]: string
    }
}[]

function AddOnsComponent() {
    const [selectedAddOns, setSelectedAddOns] = React.useState([''])
    const location = useLocation()

    const selectAddOn = (addonTitle: string) => setSelectedAddOns(!filteredAddOns.find(it => it?.title === addonTitle) ? [...selectedAddOns, addonTitle] : selectedAddOns.filter(addon => addon !== addonTitle))

    const filteredAddOns = addons.map(addon => {
        const [filteredAddOn] = selectedAddOns.filter(selectedAddon => addon.title === selectedAddon)
        if (filteredAddOn) return addon
    }).filter(Boolean)

    return (
        <div className="content">
            <h2 className="text-primary-marine-blue font-bold text-3xl mb-2">Pick add-ons</h2>
            <p className="text-neutral-cool-gray">Add-ons enhance your gaming experience.</p>

            <div className="mt-8">
                {addons.map((addon, i) => {
                    const toggledAddon = filteredAddOns.find(it => it === addon)
                    
                    return (
                        <div onClick={() => selectAddOn(addon.title)} className={`${toggledAddon ? 'selected-plan' : ''} hover:selected-plan border rounded-md flex items-center gap-4 p-4 mt-4`} key={i}>
                            <input type="checkbox" checked={!!toggledAddon} onChange={() => {}} />

                            <div className="mr-32">
                                <h3 className="text-primary-marine-blue font-bold">{addon.title}</h3>
                                <p className="text-neutral-cool-gray">{addon.description}</p>
                            </div>

                            <span className="ml-auto text-primary-marine-blue">+{addon.price[location.state?.subscription ?? 'mo']}</span>
                        </div>
                    )
                })}
            </div>

            <div className="flex justify-between items-center mt-32">
                <button className="text-neutral-cool-gray">
                    <Link to='/select-plan' state={location.state}>Go Back</Link>
                </button>

                <button className="primary-btn">
                    <Link to='/summary' state={{
                        prev: {...location.state},
                        filteredAddOns
                    }}>Next Step</Link>
                </button>
            </div>
        </div>
    )
}

export default AddOnsComponent