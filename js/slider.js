function sliderFunc() {
    const sliderButtonLeft = document.getElementById("slider-button-left");
    const sliderButtonRight = document.getElementById("slider-button-right");
    let slideIndex = 1;
    showSlides(slideIndex);

    setInterval(() => {
        showSlides(slideIndex += 1)
    }, 4000)

    sliderButtonLeft.addEventListener("click", () => {
        showSlides((slideIndex -= 1));
    })

    sliderButtonRight.addEventListener("click", () => {
        showSlides((slideIndex += 1));
    })

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
}

sliderFunc();