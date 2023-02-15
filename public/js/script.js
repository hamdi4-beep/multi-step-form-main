"use strict";
const section = document.querySelector('section');
const article = document.querySelector('article:not(:first-of-type)');
const gen = traverse(article);
console.log(article);
section === null || section === void 0 ? void 0 : section.addEventListener('pointerdown', (e) => {
    const { target } = e;
    if (target.tagName === 'BUTTON') {
        const nextElem = gen.next().value;
        const prevElem = nextElem === null || nextElem === void 0 ? void 0 : nextElem.previousElementSibling;
        prevElem && prevElem.classList.add('hidden');
        nextElem && nextElem.classList.remove('hidden');
    }
});
function* traverse(elem) {
    yield elem;
    while (elem)
        yield* traverse(elem.nextElementSibling);
}
