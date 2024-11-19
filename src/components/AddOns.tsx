import * as React from 'react'
import { Link, useLocation } from "react-router-dom"

import { addons } from '../data'

function AddOns() {
    const [selectedAddOns, setSelectedAddOns] = React.useState<string[]>([])
    const location = useLocation()

    const selectAddOn = (addonTitle: string) => setSelectedAddOns(!filteredAddOns.find(it => it?.title === addonTitle) ? [...selectedAddOns, addonTitle] : selectedAddOns.filter(it => it !== addonTitle))

    const filteredAddOns = addons.map(addon => {
        const [filteredAddOn] = selectedAddOns.filter(it => addon.title === it)
        if (filteredAddOn) return addon
    }).filter(Boolean)

    const subscription = location.state['subscription'] ?? 'mo'

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

                            <span className="ml-auto text-primary-marine-blue">+${addon.price[subscription] + subscription}</span>
                        </div>
                    )
                })}
            </div>

            <div className="flex justify-between items-center mt-32">
                <button className="text-neutral-cool-gray">
                    <Link to='/select-plan' state={location.state}>Go Back</Link>
                </button>

                <button className="primary-btn">
                    <Link to={filteredAddOns.length ? '/summary' : '#'} onClick={() => filteredAddOns.length === 0 ? alert('Please pick an add-on!') : null} state={{
                        ...location.state,
                        filteredAddOns
                    }}>Next Step</Link>
                </button>
            </div>
        </div>
    )
}

export default AddOns