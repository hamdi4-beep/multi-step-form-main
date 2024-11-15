import * as React from 'react'
import { Link, useLocation } from "react-router-dom"

export const list = [{
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
    const [selectedAddOns, setSelectedAddOns] = React.useState([''])
    const location = useLocation()

    const handleClick = (addon: string) => setSelectedAddOns(!selectedAddOns.find(it => it === addon) ? [...selectedAddOns, addon] : selectedAddOns.filter(it => it !== addon))

    const filteredList = list.map(item => {
        const [filteredAddOn] = selectedAddOns.filter(addon => item.header === addon)
        if (filteredAddOn) return item
    }).filter(Boolean)

    console.log({
        prev: {...location.state},
        filteredList
    })

    return (
        <div className="content">
            <h2 className="text-primary-marine-blue font-bold text-3xl mb-2">Pick add-ons</h2>
            <p className="text-neutral-cool-gray">Add-ons enhance your gaming experience.</p>

            <div className="mt-8">
                {list.map((item, i) => {
                    const toggledAddon = selectedAddOns.find(it => it === item.header)
                    
                    return (
                        <div onClick={() => handleClick(item.header)} className={`${toggledAddon ? 'selected-plan' : ''} hover:selected-plan border rounded-md flex items-center gap-4 p-4 mt-4`} key={i}>
                            <input type="checkbox" checked={!!toggledAddon} onChange={() => {}} />

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
                    <Link to='/select-plan' state={location.state}>Go Back</Link>
                </button>

                <button className="primary-btn">
                    <Link to='/summary' state={{
                        prev: {...location.state},
                        filteredList
                    }}>Next Step</Link>
                </button>
            </div>
        </div>
    )
}

export default AddOnsComponent