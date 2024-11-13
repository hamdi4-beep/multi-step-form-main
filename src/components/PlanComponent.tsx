import { Link } from "react-router-dom"

const list = [{
        title: 'Arcade',
        src: '/assets/icon-arcade.svg',
        price: {
            mo: '$9/mo',
            yr: '$90/yr'
        }
    }, {
        title: 'Advanced',
        src: '/assets/icon-advanced.svg',
        price: {
            mo: '$12/mo',
            yr: '$120/yr'
        }
    }, {
        title: 'Pro',
        src: '/assets/icon-pro.svg',
        price: {
            mo: '$15/mo',
            yr: '$150/yr'
        }
    }]

function PlanComponent() {
    return (
        <div className="content">
            <h2 className="text-primary-marine-blue font-bold text-3xl mb-2">Select your plan</h2>
            <p className="text-neutral-cool-gray">You have the option of monthly or yearly billing.</p>

            <div className="flex gap-4">
                {list.map((item, i) => (
                    <div className="w-full mt-8 p-4 pr-16 border rounded-md" key={i}>
                        <img src={item.src} className='mb-10' alt="" />
                        <h3 className="font-bold text-primary-marine-blue">{item.title}</h3>
                        <p className="text-neutral-cool-gray">{item.price['mo']}</p>
                    </div>
                ))}
            </div>

            <div className="bg-[#eee] p-2 flex gap-4 justify-center mt-8 items-center rounded-md">
                <span className="text-primary-marine-blue font-bold">Monthly</span>
                <div className=" after:bg-white after:rounded-full after:p-[.25em] after:px-[.8em] bg-primary-marine-blue p-1 rounded-full w-16"></div>
                <span className="text-neutral-cool-gray">Yearly</span>
            </div>

            <div className="flex justify-between items-center mt-32">
                <button className="text-neutral-cool-gray">
                    <Link to='/'>Go Back</Link>
                </button>

                <button className="primary-btn">
                    <Link to='/add-ons'>Next Step</Link>
                </button>
            </div>
        </div>
    )
}

export default PlanComponent