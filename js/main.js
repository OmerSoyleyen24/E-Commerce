import headerFunc from "./header.js";
import productsFunc from "./products.js";
import searchFunc from "./search.js";

//! add product to localStorage
(async function () {
    const photos = await fetch("../js/data.json");
    const data = await photos.json();

    data ? localStorage.setItem("products", JSON.stringify(data)) : [];
    productsFunc(data);
    searchFunc(data);
})()


const products = localStorage.getItem("products");

const cardItems = document.querySelector(".header-card-count")

cardItems.innerHTML = localStorage.getItem("card") ? JSON.parse(localStorage.getItem("card")).length : "0";

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