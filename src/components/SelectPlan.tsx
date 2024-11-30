import * as React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"

import { plans } from '../data'
import { NotFound } from './NotFound'

function SelectPlan() {
    const [currentPlan, setCurrentPlan] = React.useState('')
    const navigate = useNavigate()
    const location = useLocation()

    if (!location.state) return <NotFound />

    const subscription = location.state['subscription'] ?? 'mo'

    const togglerStyle = `
        ${subscription === 'yr' ? 'toggled' : ''}
        after:block after:bg-white after:rounded-full after:py-[.04em] after:px-[.6em] after:w-4 after:h-5
        bg-primary-marine-blue p-1 rounded-full w-14
    `

    const handleClick = () => {
        const options = {
            state: {
                ...location.state,
                subscription: subscription === 'mo' ? 'yr' : 'mo'
            }
        }

        navigate('#', options)
    }

    return (
        <section>
            <h2 className="text-primary-marine-blue font-bold text-3xl mb-2">Select your plan</h2>
            <p className="text-neutral-cool-gray">You have the option of monthly or yearly billing.</p>

            <div className="mt-8 gap-2">
                {plans.map((plan, i) => {
                    return (
                        <div onClick={() => setCurrentPlan(plan.title)} className={`${currentPlan === plan.title ? 'selected-plan' : ''} flex items-center gap-4 w-full mt-3 p-4 border rounded-md hover:selected-plan`} key={i}>
                            <img src={plan.src} alt="" />
                            
                            <div>
                                <h3 className="font-bold text-primary-marine-blue">{plan.title}</h3>
                                <p className="text-neutral-cool-gray">${plan.price[subscription]}/{subscription}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="bg-[#eee] p-2 gap-4 mt-8 flex justify-center items-center rounded-md">
                <span className={`${subscription === 'yr' ? 'text-neutral-cool-gray' : 'text-primary-marine-blue font-bold'}`}>Monthly</span>
                <div onClick={handleClick} className={togglerStyle}></div>
                <span className={`${subscription === 'mo' ? 'text-neutral-cool-gray' : 'text-primary-marine-blue font-bold'}`}>Yearly</span>
            </div>

            <div className="mt-8 ml-auto flex justify-end">
                <button className="text-neutral-cool-gray">
                    <Link to='..'>Go Back</Link>
                </button>

                <button className="primary-btn ml-4">
                    <Link to={currentPlan === '' ? '#' : '/add-ons'} onClick={() => currentPlan === '' ? alert('Please select a plan!') : null} state={{
                        ...location.state,
                        currentPlanIndex: plans.findIndex(it => it.title === currentPlan),
                        subscription
                    }}>Next Step</Link>
                </button>
            </div>
        </section>
    )
}

export default SelectPlan