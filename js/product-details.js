import { thumbsActiveFunc } from './product-details/thumbsActive.js';
import { singleThumbs } from './glide.js';
import zoomFunc from './product-details/zoom.js';
import colorsFunc from './product-details/colors.js';
import valuesFunc from './product-details/values.js';

const productId = localStorage.getItem("productId")
    ? JSON.parse(localStorage.getItem("productId"))
    : localStorage.setItem("productId", JSON.stringify(1));

const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find((item) => item.id === Number(productId));

/* product title */
const productTitle = document.querySelector(".product-title");
productTitle.innerHTML = findProduct.name;

/* product price */
const newPriceDOM = document.querySelector(".new-price");
const oldPriceDOM = document.querySelector(".old-price");

newPriceDOM.innerHTML = `$${(findProduct.price.newPrice).toFixed(2)}`;
oldPriceDOM.innerHTML = `$${(findProduct.price.oldPrice).toFixed(2)}`;

/* product gallery */
const singleImageDOM = document.querySelector("#single-image");
singleImageDOM.src = findProduct.img.singleImage;
const galleryThumbs = document.querySelector(".gallery-thumbs");
let result = "";
findProduct.img.thumbs.forEach((item) => {
    result += `
    <li class="glide__slide">
        <img src=${item} class="img-fluid">
    </li>
    `
});
galleryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();

const productThumbs = document.querySelectorAll(".product-thumb .glide__slide");

productThumbs[0].classList.add("active")