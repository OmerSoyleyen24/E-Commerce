import { product1, product2 } from "./glide.js";

let products = []

function productsFunc() {
    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    const productsContainer = document.getElementsByClassName("product-list");

    console.log(productsContainer)
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
                <button>
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
    });

    productsContainer[0].innerHTML += results;
    productsContainer[1].innerHTML += results;

    product1();
    product2();
}

export default productsFunc()