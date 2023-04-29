document
  .querySelector("#filter-donate")
  .addEventListener("click", filterDonate);
document
  .querySelector("#filter-borrow")
  .addEventListener("click", filterBorrow);
document
  .querySelector("#filter-legend")
  .addEventListener("click", filterLegend);

function filterDonate() {
  let allDivs = document.querySelectorAll(".main");

  allDivs.forEach((div) => {
    div.style.display = "none";
  });
  let donateDiv = document.querySelectorAll(".mainD");
  donateDiv.forEach((dDiv) => {
    dDiv.style.display = "inline-block";
    dDiv.style.backgroundColor = "#f4f4f5";
    dDiv.style.width = "70%";
    dDiv.style.height = "90vh";
  });
}

function filterBorrow() {
  let allDivs = document.querySelectorAll(".main");

  allDivs.forEach((div) => {
    div.style.display = "none";
  });
  let borrowDiv = document.querySelectorAll(".mainB");
  borrowDiv.forEach((bDiv) => {
    bDiv.style.display = "inline-block";
    bDiv.style.backgroundColor = "#e5e7eb";
    bDiv.style.width = "70%";
    bDiv.style.height = "90vh";
  });
}

function filterLegend() {
  let allDivs = document.querySelectorAll(".main");

  allDivs.forEach((div) => {
    div.style.display = "none";
  });
  let legendDiv = document.querySelectorAll(".mainL");
  legendDiv.forEach((lDiv) => {
    lDiv.style.display = "inline-block";
    lDiv.style.backgroundColor = "#cbd5e1";
    lDiv.style.width = "70%";
    lDiv.style.height = "90vh";
  });
}

/*let carousel = document.querySelector(".carousel");

let carouselInner = document.querySelector(".carousel-inner");

let imgsArr = [
  "https://picsum.photos/id/1044/1280/720",

  "https://picsum.photos/id/1040/1280/720",

  "https://picsum.photos/id/1041/1280/720",

  "https://picsum.photos/id/1042/1280/720",
];

for (let i = 0; i < imgsArr.length; i++) {
  let newDiv = document.createElement("div");

  newDiv.classList.add("carousel-item");

  if (i === 0) {
    newDiv.classList.add("active");
  }

  let newImg = document.createElement("img");

  newImg.src = imgsArr[i];

  newImg.classList.add("d-block", "w-100");

  newImg.alt = "First slide";

  newDiv.appendChild(newImg);

  carouselInner.appendChild(newDiv);
}

carousel.style.display = "block";
*/
