const gallerySlide = document.querySelector('.gallery-slide');
const prevButton = document.querySelector('.gallery-prev');
const nextButton = document.querySelector('.gallery-next');

let index = 0;

function updateSlidePosition() {
  const slides = document.querySelectorAll('.gallery-slide img');
  const slideWidth = slides[0].clientWidth;
  gallerySlide.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  const slides = document.querySelectorAll('.gallery-slide img');
  if (index < slides.length - 1) {
    index++;
  } else {
    index = 0; // Opcional: volver a la primera imagen
  }
  updateSlidePosition();
});

prevButton.addEventListener('click', () => {
  const slides = document.querySelectorAll('.gallery-slide img');
  if (index > 0) {
    index--;
  } else {
    index = slides.length - 1; // Opcional: volver a la última imagen
  }
  updateSlidePosition();
});
