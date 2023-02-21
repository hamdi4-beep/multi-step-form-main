const plans = document.querySelectorAll('.plan') as NodeListOf<HTMLDivElement>
const toggle = document.querySelector('.toggle') as HTMLDivElement

for (const plan of plans) {
    plan.addEventListener('pointerdown', (e: Event) => {
        const target = e.currentTarget as HTMLElement
        
        for (let i=0; i<plans.length; i++) {
            if (plans[i] === target) {
                target.classList.add('active')
            } else {
                plans[i].classList.remove('active')
            }
        }
    })
}

toggle.addEventListener('pointerdown', (e: Event) => {
    const dot = toggle.querySelector('.dot') as HTMLDivElement

    const [monthly, yearly] = document.querySelectorAll('.toggle-container span') as NodeListOf<HTMLSpanElement>
    const [arcade, advanced, pro] = plans

    dot.classList.toggle('toggled')

    if (dot.classList.contains('toggled')) {
        monthly.classList.remove('active')
        yearly.classList.add('active')

        update(arcade, '$90/year')
        update(advanced, '$120/year')
        update(pro, '$150/year')
    } else {
        monthly.classList.add('active')
        yearly.classList.remove('active')

        update(arcade, '$9/mo')
        update(advanced, '$12/mo')
        update(pro, '$15/mo')

        for (const plan of plans) {
            const span = plan.querySelector('.yearly')
            span?.classList.add('hidden')
        }
    }
})

function update(elem: HTMLDivElement, str: string) {
    const price = elem.querySelector('.price') as HTMLSpanElement
    const span = elem.querySelector('.yearly')

    price.textContent = str
    span?.classList.remove('hidden')
}