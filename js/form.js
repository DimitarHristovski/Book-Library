const form = document.querySelector("form");
const cardsContainer = document.querySelector(".carousel");
const data = [];
const button = document.getElementById("button");
button.addEventListener("click", (e) => {
  e.preventDefault();

  // Get form data
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const pages = document.getElementById("book-pages").value;

  // Add data to array
  data.push({ title, author, pages });

  // Clear form inputs
  form.reset();
  // Generate cards
  generateCards();
});

/*function generateCards() {
  console.log(data);
  Loop through data and generate a card for each item
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML += `<div className="card active">
    <div className="card-info">
      <h2>${item.title}</h2>
      <p>${item.author}</p>
      <p>${item.pages}</p>
    </div>

  </div>;
    `;

    cardsContainer.appendChild(card);
  });
}
*/ function generateCards() {
  console.log(data);
  data.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-index", index);
    card.innerHTML += `
        <div class="card-info">
        <label htmlFor="title">title:</label>
          <h2>${item.title}</h2>
          <label htmlFor="author">author:</label>
          <p>${item.author}</p>
          <label htmlFor="pages">pages:</label>
          <p>${item.pages}</p>
          <label>
                                    <input type="checkbox" className="read-checkbox" />
                                    <span>Read</span>
                                </label>
          <button class="delete-btn">X</button>
        </div>
        
      `;
    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      const index = parseInt(card.getAttribute("data-index"));
      data.splice(index, 1);
      card.remove();
    });
    cardsContainer.appendChild(card);
  });
}
