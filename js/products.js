import { product1, product2 } from "./glide.js";

let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
let card = localStorage.getItem("card") ? JSON.parse(localStorage.getItem("card")) : [];
function addToCard() {
    const cardItems = document.querySelector(".header-card-count")
    const buttons = [...document.getElementsByClassName("add-to-card")];
    buttons.forEach((button) => {
        const inCard = card.find((item) => item.id === Number(button.dataset.id))
        if (inCard) {
            button.setAttribute("disabled", "disabled")
        }
        else {
            button.addEventListener("click", function (e) {
                e.preventDefault();
                const id = e.target.dataset.id;
                const findProduct = products.find(product => product.id === Number(id))
                card.push({ ...findProduct, quantity: 1 });
                localStorage.setItem("card", JSON.stringify(card));
                button.setAttribute("disabled", "disabled")
            })
        }
    })
}

function productsFunc() {
    const productsContainer = document.getElementsByClassName("product-list");

    let results = ``;

    products.forEach((item) => {
        results += `
        <li class="glide__slide product-list-item">
        <div class="product-image">
            <a href="#">
                <img src="${item.img.singleImage}" class="img1 img-fluid" alt="product1">
                <img src="${item.img.thumbs[1]}" class="img2 img-fluid" alt="product1">
            </a>
        </div>
        <div class="product-info">
            <a href="#" class="product-title">${item.name}</a>
            <ul class="product-star">
                <li>
                    <i class="bi bi-star-fill"></i>
                </li>
                <li>
                    <i class="bi bi-star-fill"></i>
                </li>
                <li>
                    <i class="bi bi-star-fill"></i>
                </li>
                <li>
                    <i class="bi bi-star-fill"></i>
                </li>
                <li>
                    <i class="bi bi-star-half"></i>
                </li>
            </ul>
            <div class="product-prices">
                <strong>$${item.price.newPrice.toFixed(2)}</strong>
                <span>$${item.price.oldPrice.toFixed(2)}</span>
            </div>
            <span class="product-discount">-${item.discount}%</span>
            <div class="product-links">
                <button class="add-to-card" data-id=${item.id}>
                    <i class="bi bi-basket-fill"></i>
                </button>
                <button>
                    <i class="bi bi-heart-fill"></i>
                </button>
                <a href="product-details.html">
                    <i class="bi bi-eye-fill"></i>
                </a>
                <button>
                    <i class="bi bi-share-fill"></i>
                </button>
            </div>
        </div>
        </li>`
        productsContainer[0] ? productsContainer[0].innerHTML = results : "";
        productsContainer[1] ? productsContainer[1].innerHTML = results : "";
        addToCard();
    });
    product1();
    product2();
}

export default productsFunc;