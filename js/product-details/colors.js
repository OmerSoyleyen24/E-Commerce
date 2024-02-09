function colorsFunc() {
    const colorsDOM = document.querySelectorAll(".color-wrapper");
    colorsDOM.forEach((color) => {
        color.addEventListener("click", () => {
            colorsDOM.forEach((item) => {
                item.classList.remove("active");
            })
            color.classList.add("active");
        });
    })
}

export default colorsFunc();