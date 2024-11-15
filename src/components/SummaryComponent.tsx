import { Link, useLocation } from "react-router-dom"
import { list } from "./AddOnsComponent"

function Summary() {
    const location = useLocation()
    const {prev, filteredList} = location.state

    const selectedAddOns = filteredList as typeof list

    return (
        <div className="content">
            <h2 className="text-primary-marine-blue font-bold text-3xl mb-2">Finishing up</h2>
            <p className="text-neutral-cool-gray">Double-check everything looks OK before confirming.</p>

            <div className="bg-[#eee] p-4 rounded-md mt-8">
                <div className="flex justify-between items-center border-b border-white mb-4 pb-4">
                    <div>
                        <h3 className="font-bold text-primary-marine-blue">{prev['plan'] ?? 'Arcade'} (Monthly)</h3>
                        <span className="text-sm underline text-neutral-cool-gray">Change</span>
                    </div>

                    <span className="font-bold text-primary-marine-blue">$9/mo</span>
                </div>

                {selectedAddOns.map((addon, i) => (
                    <div className="flex justify-between pb-4 text-neutral-cool-gray" key={i}>
                        <p>{addon.header}</p>
                        <span className="text-black">+{addon.price[prev.subscription ?? 'mo']}</span>
                    </div>
                ))}
            </div>

            <div className="flex justify-between align-center px-4 mt-7">
                <p className="text-sm">Total (per month)</p>
                <h3 className="font-bold text-primary-marine-blue text-xl">+$12/mo</h3>
            </div>

            <div className="flex justify-between items-center mt-32">
                <button className="text-neutral-cool-gray">
                    <Link to='/add-ons'>Go Back</Link>
                </button>

                <button className="primary-btn">
                    <Link to='/'>Confirm</Link>
                </button>
            </div>
        </div>
    )
}

export default Summary