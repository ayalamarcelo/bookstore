document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dots button');

    let currentIndex = 0;

    function updateCarousel(index) {
        const offset = -index * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    updateCarousel(currentIndex);
});
