//! home sidebar start
const btnOpenSidebar = document.getElementById("btn-menu");
const sidebar = document.getElementById("header-center");
const btnCloseSidebar = document.getElementById("close-sidebar");

btnOpenSidebar.addEventListener("click", () => {
    sidebar.style.left = "0";
})

btnCloseSidebar.addEventListener("click", () => {
    sidebar.style.left = "-100%";
    sidebar.style.transition = "1s ease all";
})

document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(sidebar) && !e.composedPath().includes(btnOpenSidebar)) {
        sidebar.style.left = "-100%";
        sidebar.style.transition = "1s ease all";
    }
})
/* click outside end */
//! home sidebar end

//! modal search start
const btnOpenSearch = document.getElementById("search-button");
const btnCloseSearch = document.getElementById("close-search");
const modalSearch = document.getElementById("modal-search");
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper")

btnOpenSearch.addEventListener("click", () => {
    modalSearch.style.visibility = "visible";
    modalSearch.style.opacity = "1";
});

btnCloseSearch.addEventListener("click", () => {
    modalSearch.style.visibility = "hidden";
    modalSearch.style.opacity = "0";
});

/* click outside start */
document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(modalSearchWrapper[0]) &&
        !e.composedPath().includes(btnOpenSearch)) {
        modalSearch.style.visibility = "hidden";
        modalSearch.style.opacity = "0";
    }
})
/* click outside end */
//! modal search end

//! slider start
let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
    showSlides(slideIndex += 1)
}, 4000)

function plusSlide(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slider-item");
    const dots = document.getElementsByClassName("slider-dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    Array.from(slides).forEach((slide) => {
        slide.style.display = "none";
    })

    Array.from(dots).forEach((dot) => {
        dot.className = dot.className.replace(" active", "")
    })

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}
//! slider end