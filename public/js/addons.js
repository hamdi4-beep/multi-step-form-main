"use strict";
const plansList = document.querySelectorAll('.plan');
for (const plan of plansList) {
    plan.addEventListener('pointerdown', (e) => {
        const target = e.currentTarget;
        const checkbox = target.querySelector('input[type="checkbox"]');
        if (!checkbox.checked) {
            target.classList.add('active');
        }
        else {
            target.classList.remove('active');
        }
    });
}
