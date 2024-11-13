import { useNavigate } from "react-router-dom"

const FormComponent = () => {
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        navigate('/select-plan')
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8">
            <label htmlFor="name" className="font-light">Name</label>
            <input type="text" placeholder="e.g. Stephen King" className="field"  />
            <label htmlFor="email" className="font-light">Email Address</label>
            <input type="email" placeholder="e.g. stephenking@lorem.com" className="field"  />
            <label htmlFor="phone" className="font-light">Phone Number</label>
            <input type="text" placeholder="e.g. +1 234 567 890" className="field"  />
            <button className="primary-btn mt-32 block ml-auto">Next Step</button>
        </form>
    )
}

function InfoComponent() {
    return (
        <section className="content">
          <h2 className="text-primary-marine-blue font-bold text-3xl">Personal info</h2>
          <p className="text-neutral-cool-gray">Please provide your name, email address, and phone number.</p>
          <FormComponent />
        </section>
    )
}

export default InfoComponent