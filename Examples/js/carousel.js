const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let currentIndex = 0;
const slideWidth = 33.33;

function showCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    if (index >= currentIndex && index < currentIndex + 3) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function slidePrev() {
  if (currentIndex === 0) {
    currentIndex = carousel.children.length - 3;
  } else {
    currentIndex--;
  }
  showCards();
}

function slideNext() {
  if (currentIndex === carousel.children.length - 3) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  showCards();
}

showCards();
prevButton.addEventListener("click", slidePrev);
nextButton.addEventListener("click", slideNext);
