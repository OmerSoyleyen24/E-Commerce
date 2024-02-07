const productsContainer = document.getElementsByClassName("product-list");

export function product1() {
    const config = {
        type: "carousel",
        perView: 4,
        gap: 20,
        breakpoints: {
            992: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
            576: {
                perView: 1,
            }
        }
    }

    productsContainer[0] && new Glide(".glide", config).mount();
}

export function product2() {
    const config2 = {
        type: "carousel",
        perView: 4,
        gap: 20,
        breakpoints: {
            992: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
            576: {
                perView: 1,
            }
        }
    }

    productsContainer[1] && new Glide(".glide2", config2).mount();
}