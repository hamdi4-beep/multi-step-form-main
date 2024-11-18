import * as React from 'react'
import { Link, useLocation } from "react-router-dom"

import { plans } from '../data'

function SelectPlan() {
    const [currentPlan, setCurrentPlan] = React.useState('')
    const [subscription, setSubscription] = React.useState('mo')
    const location = useLocation()

    const togglerStyle = `
        ${subscription === 'yr' ? 'toggled' : ''}
        after:block after:bg-white after:rounded-full after:py-[.04em] after:px-[.6em] after:w-4 after:h-5
        bg-primary-marine-blue p-1 rounded-full w-14
    `

    return (
        <div className="content">
            <h2 className="text-primary-marine-blue font-bold text-3xl mb-2">Select your plan</h2>
            <p className="text-neutral-cool-gray">You have the option of monthly or yearly billing.</p>

            <div className="flex gap-4">
                {plans.map((plan, i) => {
                    return (
                        <div onClick={() => setCurrentPlan(plan.title)} className={`${currentPlan === plan.title ? 'selected-plan' : ''} w-full mt-8 p-4 pr-16 border rounded-md hover:selected-plan`} key={i}>
                            <img src={plan.src} className='mb-10' alt="" />
                            <h3 className="font-bold text-primary-marine-blue">{plan.title}</h3>
                            <p className="text-neutral-cool-gray">${plan.price[subscription]}/{subscription}</p>
                        </div>
                    )
                })}
            </div>

            <div className="bg-[#eee] p-2 flex gap-4 justify-center mt-8 items-center rounded-md">
                <span className={`${subscription === 'yr' ? 'text-neutral-cool-gray' : 'text-primary-marine-blue font-bold'}`}>Monthly</span>
                <div onClick={() => setSubscription(prev => prev === 'yr' ? 'mo' : 'yr')} className={togglerStyle}></div>
                <span className={`${subscription === 'mo' ? 'text-neutral-cool-gray' : 'text-primary-marine-blue font-bold'}`}>Yearly</span>
            </div>

            <div className="flex justify-between items-center mt-32">
                <button className="text-neutral-cool-gray">
                    <Link to='..'>Go Back</Link>
                </button>

                <button className="primary-btn">
                    <Link to={currentPlan === '' ? '#' : '/add-ons'} onClick={() => currentPlan === '' ? alert('Please select a plan!') : null} state={{
                        ...location.state,
                        plan: plans.find(it => it.title === currentPlan),
                        subscription
                    }}>Next Step</Link>
                </button>
            </div>
        </div>
    )
}

export default SelectPlan