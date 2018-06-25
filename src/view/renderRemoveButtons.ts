const removeLinesContainer = document.querySelector(".remove-line-buttons");
export function renderRemoveButtons(index) {
    let tmp = document.createElement('input');
    tmp.id = index;
    removeLinesContainer.appendChild(tmp);
}