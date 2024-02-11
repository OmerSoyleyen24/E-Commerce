function productRoute() {
    const resultItemDOM = document.querySelectorAll(".search-results .result-item")
    resultItemDOM.forEach((item) => {
        item.addEventListener("click", () => {
            const id = item.dataset.id;
            if (id) {
                localStorage.setItem("productId", JSON.stringify(id))
                window.location.href = "product-details.html"
            }
        })
    })
}

function searchFunc(products) {
    const searchWrapperDOM = document.querySelector(".search-results .results");
    let result = "";
    products.forEach((item) => {
        result += `
        <a href="#" class="result-item" data-id=${item.id}>
            <img src=${item.img.singleImage} class="search-thumb" alt=${"product" + item.id}>
            <div class="search-info">
                <h4>${item.name}</h4>
                <span class="search-sku">SKU: PD0016</span>
                <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
            </div>
        </a>
        `
    })
    searchWrapperDOM.innerHTML = result;
    productRoute();

    const searchInputDOM = document.querySelector(".search-form input");
    let value = "";
    let filtered = [];
    searchInputDOM.addEventListener("click", (e) => {
        value = e.target.value.trim().toLowerCase();
        filtered = products.filter((item) => item.name.trim().toLowerCase().includes(value));
        let result = ""
        if (filtered.length === 0) {
            searchWrapperDOM.innerHTML = `<p style="text-align:center;padding:10px 0;">Aradığınız Ürün Bulunamadı</p>`
        }
        else if (filtered.length < 2) {
            filtered.forEach((item) => {
                result += `
                <a href="#" class="result-item" data-id=${item.id}>
                    <img src=${item.img.singleImage} class="search-thumb" alt=${"product" + item.id}>
                    <div class="search-info">
                        <h4>${item.name}</h4>
                        <span class="search-sku">SKU: PD0016</span>
                        <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
                    </div>
                </a>
                `
            })
            searchWrapperDOM.innerHTML = result;
        }
        else {
            filtered.forEach((item) => {
                result += `
                <a href="#" class="result-item" data-id=${item.id}>
                    <img src=${item.img.singleImage} class="search-thumb" alt=${"product" + item.id}>
                    <div class="search-info">
                        <h4>${item.name}</h4>
                        <span class="search-sku">SKU: PD0016</span>
                        <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
                    </div>
                </a>
                `
            })
            searchWrapperDOM.innerHTML = result;
        }
        productRoute();
    })
}

export default searchFunc;