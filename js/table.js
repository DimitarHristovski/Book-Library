const checkboxes = document.querySelectorAll(".read-checkbox");

checkboxes.forEach((checkbox) => {
  const span = checkbox.nextElementSibling;
  checkbox.addEventListener("change", () => {
    span.textContent = checkbox.checked ? "Unread" : "Read";
  });
});

// Get all the buttons
const changeColorButtons = document.querySelectorAll(".change-color-btn");
const resetColorButtons = document.querySelectorAll(".reset-color-btn");

// Add click event listener to each button
changeColorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const rowId = button.getAttribute("data-row");
    const row = document.getElementById("book-row-" + rowId);
    console.log(row);
    row.style.backgroundColor = "#ffcc99"; // Change the color to orange
  });
});

resetColorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const rowId = button.getAttribute("data-row");
    const row = document.getElementById("book-row-" + rowId);
    row.style.backgroundColor = "white"; // Change the color back to white
  });
});
