const plansList = document.querySelectorAll('.plan') as NodeListOf<HTMLDivElement>

for (const plan of plansList) {
    plan.addEventListener('pointerdown', (e: Event) => {
        const target = e.currentTarget as HTMLDivElement
        const checkbox = target.querySelector('input[type="checkbox"]') as HTMLInputElement

        if (!checkbox.checked) {
            target.classList.add('active')
        } else {
            target.classList.remove('active')
        }
    })
}