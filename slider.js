const cardsContainer = document.querySelector('.section2_cards');
const cards = document.querySelectorAll('.section2_card');
let currentIndex = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateSlider();
});

function updateSlider() {
  cardsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
