import {select} from "d3-selection";

const removeLinesContainer = document.querySelector(".remove-line-buttons");
const selectedContainer = select('.remove-line-buttons');

export function renderRemoveButtons(lines) {
    const removeButtons = Array.from(removeLinesContainer.children);

    removeButtons.forEach(element => element.remove());

    console.log(lines, 'GOTCHA');

    lines.forEach((line, index) => {
        const tmp = document.createElement('input');
        tmp.type = 'checkbox';
        tmp.id = index;
        removeLinesContainer.appendChild(tmp)
    })
}