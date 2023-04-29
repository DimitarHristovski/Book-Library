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
/*
const carousels = document.querySelectorAll(".carousel");
const prevButtons = document.querySelectorAll(".prev");
const nextButtons = document.querySelectorAll(".next");

carousels.forEach((carousel, index) => {
  let currentIndex = 0;
  const slideWidth = 33.33;

  function showCards() {
    const cards = carousel.querySelectorAll(".card");

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
  prevButtons[index].addEventListener("click", slidePrev);
  nextButtons[index].addEventListener("click", slideNext);
});*/
const checkbox = document.querySelector("#check");
const readStatus = document.querySelector("#read-status");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    readStatus.textContent = "Read";
  } else {
    readStatus.textContent = "Unread";
  }
});
