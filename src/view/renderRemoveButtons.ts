import {fromEvent} from "rxjs";


const removeLinesContainer = document.querySelector(".remove-line-buttons");
const buttons = [];

export function renderRemoveButtons(lines) {

    const tmp = document.createElement("input");
    tmp.type = "checkbox";
    tmp.id = `${lines[lines.length - 1][0].color}`;
    removeLinesContainer.appendChild(tmp);
    buttons.push(tmp);

    console.log(buttons);
    const removeLine$ = fromEvent(tmp, 'change');

    removeLine$.subscribe((event) => {
        if(event.target["checked"]) {
            const lineToRemove = lines.find((line) => line[0].color === tmp.id);
            lineToRemove[0].shouldRender = false
        } else {
            const lineToShow = lines.find((line) => line[0].color === tmp.id);
            lineToShow[0].shouldRender = true
        }
    })
}