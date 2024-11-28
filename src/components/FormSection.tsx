import { useNavigate } from "react-router-dom"

const fieldStyle = 'border p-2 px-4 rounded-md block my-2 mb-4 w-full'

const FormComponent = () => {
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const [[, name], [, email], [, phone]] = new FormData(e.target as HTMLFormElement)

        navigate('/select-plan', {
            state: {
                name,
                email,
                phone
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 h-full">
            <label htmlFor="name" className="font-light">Name</label>
            <input type="text" name="name" placeholder="e.g. Stephen King" className={fieldStyle} required />
            <label htmlFor="email" className="font-light">Email Address</label>
            <input type="email" name="email" placeholder="e.g. stephenking@lorem.com" className={fieldStyle} required />
            <label htmlFor="phone" className="font-light">Phone Number</label>
            <input type="text" name="phone" placeholder="e.g. +1 234 567 890" className={fieldStyle} required />
            <button className="primary-btn absolute bottom-0 right-8">Next Step</button>
        </form>
    )
}

function FormSection() {
    return (
        <section>
          <h2 className="text-primary-marine-blue font-bold text-3xl mb-4">Personal info</h2>
          <p className="text-neutral-cool-gray">Please provide your name, email address, and phone number.</p>
          <FormComponent />
        </section>
    )
}

export default FormSection