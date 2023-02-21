"use strict";
const plans = document.querySelectorAll('.plan');
const toggle = document.querySelector('.toggle');
for (const plan of plans) {
    plan.addEventListener('pointerdown', (e) => {
        const target = e.currentTarget;
        for (let i = 0; i < plans.length; i++) {
            if (plans[i] === target) {
                target.classList.add('active');
            }
            else {
                plans[i].classList.remove('active');
            }
        }
    });
}
toggle.addEventListener('pointerdown', (e) => {
    const dot = toggle.querySelector('.dot');
    const [monthly, yearly] = document.querySelectorAll('.toggle-container span');
    const [arcade, advanced, pro] = plans;
    dot.classList.toggle('toggled');
    if (dot.classList.contains('toggled')) {
        monthly.classList.remove('active');
        yearly.classList.add('active');
        update(arcade, '$90/year');
        update(advanced, '$120/year');
        update(pro, '$150/year');
    }
    else {
        monthly.classList.add('active');
        yearly.classList.remove('active');
        update(arcade, '$9/mo');
        update(advanced, '$12/mo');
        update(pro, '$15/mo');
        for (const plan of plans) {
            const span = plan.querySelector('.yearly');
            span === null || span === void 0 ? void 0 : span.classList.add('hidden');
        }
    }
});
function update(elem, str) {
    const price = elem.querySelector('.price');
    const span = elem.querySelector('.yearly');
    price.textContent = str;
    span === null || span === void 0 ? void 0 : span.classList.remove('hidden');
}
