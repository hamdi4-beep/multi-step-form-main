

function FormComponent() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('The form was submitted!')
    }

    return (
        <form onSubmit={handleSubmit} action="#" className="mt-8">
            <label htmlFor="name" className="font-light">Name</label>
            <input type="text" placeholder="e.g. Stephen King" className="field" required />
            <label htmlFor="email" className="font-light">Email Address</label>
            <input type="email" placeholder="e.g. stephenking@lorem.com" className="field" required />
            <label htmlFor="phone" className="font-light">Phone Number</label>
            <input type="text" placeholder="e.g. +1 234 567 890" className="field" required />
            <button className="bg-primary-marine-blue absolute bottom-0 right-16 p-2 px-5 text-white rounded-md">Next Step</button>
        </form>
    )
}

export default FormComponent