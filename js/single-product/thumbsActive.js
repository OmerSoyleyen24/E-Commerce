export function thumbsActiveFunc() {
    const thumbs = document.querySelectorAll(".gallery-thumbs .img-fluid")
    const singleImage = document.querySelector("#single-image");
    let activeCount = 0;
    let itemLast;
    thumbs.forEach((item) => {
        item.addEventListener("click", () => {
            thumbs.forEach((item) => {
                item.classList = "img-fluid"
            })
            singleImage.src = item.src;
            item.classList = "img-fluid active"
            activeCount++;
            itemLast = item.classList;
        })
    })
}

