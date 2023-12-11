// carousel.js

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.container-list-02').length;

function nextSlide() {
    if (currentIndex < totalSlides - 3) { // Adjust the number based on the number of visible slides
        currentIndex++;
    }
    updateCarousel();
    updateDots();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateCarousel();
    updateDots();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
    updateDots();
}

function updateCarousel() {
    const carousel = document.getElementById('product-carousel');
    const translateValue = -currentIndex * (625 + 20); // Adjust the card width and margin
    carousel.style.transform = `translateX(${translateValue}px)`;
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}
