import headerFunc from "./header.js"
import sliderFunc from "./slider.js"
import productsFunc from "./products.js"

//! add product to localStorage
async function getData() {
    const photos = await fetch("../js/data.json");
    const data = await photos.json();

    data ? localStorage.setItem("products", JSON.stringify(data)) : []
}

getData();

//! modal dialog start
const modalDialogDOM = document.querySelector("#modal-dialog")
const modalContentDOM = document.querySelector("#modal-dialog .modal-content")
const btnCloseDialog = document.querySelector("#modal-dialog .modal-close");

btnCloseDialog.addEventListener("click", () => {
    modalDialogDOM.classList.remove("show");
})

document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(modalContentDOM)) {
        modalDialogDOM.classList.remove("show");
    }
})

setTimeout(() => {
    modalDialogDOM.classList.add("show");
}, 3000)
//! modal dialog end