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