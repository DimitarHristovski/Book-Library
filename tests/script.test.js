const listenClicks = require("../js/scripts");
const addBookToLibrary = require("../js/scripts");
const validateForm = require("../js/scripts");
const listenClicks = require("../js/scripts");
const manipulateModal = require("../js/scripts");

const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");
const { describe, expect, test } = require("@jest/globals");

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
let dom;
let document;
let myLibrary;

describe("Library app", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    myLibrary = dom.window.myLibrary;
  });

  describe("addBookToLibrary", () => {
    test("adds a book to the library", () => {
      const title = "Test Book";
      const author = "Test Author";
      const pages = "123";
      const status = false;

      addBookToLibrary(title, author, pages, status);

      expect(myLibrary).toHaveLength(1);
      expect(myLibrary[0]).toMatchObject({
        title,
        author,
        pages,
        status,
      });
    });
  });

  describe("showBooksInLibrary", () => {
    test("displays all books in the library", () => {
      myLibrary.push(
        new Book("Test Book 1", "Test Author 1", "123", true),
        new Book("Test Book 2", "Test Author 2", "456", false)
      );

      showBooksInLibrary();

      const bookRows = document.querySelectorAll(".book-info");

      expect(bookRows).toHaveLength(2);

      const firstRow = bookRows[0];
      const firstTitle = firstRow.querySelector("td:nth-child(1)").textContent;
      const firstAuthor = firstRow.querySelector("td:nth-child(2)").textContent;
      const firstPages = firstRow.querySelector("td:nth-child(3)").textContent;
      const firstStatus = firstRow.querySelector("td:nth-child(4) i");

      expect(firstTitle).toBe("Test Book 1");
      expect(firstAuthor).toBe("Test Author 1");
      expect(firstPages).toBe("123");
      expect(firstStatus.classList).toContain("fa-check");

      const secondRow = bookRows[1];
      const secondTitle =
        secondRow.querySelector("td:nth-child(1)").textContent;
      const secondAuthor =
        secondRow.querySelector("td:nth-child(2)").textContent;
      const secondPages =
        secondRow.querySelector("td:nth-child(3)").textContent;
      const secondStatus = secondRow.querySelector("td:nth-child(4) i");

      expect(secondTitle).toBe("Test Book 2");
      expect(secondAuthor).toBe("Test Author 2");
      expect(secondPages).toBe("456");
      expect(secondStatus.classList).toContain("fa-times");
    });
  });

  describe("validateForm", () => {
    test("prevents form submission when title is missing", () => {
      const form = document.querySelector("form");
      const titleInput = document.querySelector("#title");
      const nameInput = document.querySelector("#name");
      const numberInput = document.querySelector("#number");
      const checkbox = document.querySelector('input[name="checkbox"]');
      const event = new Event("submit", { bubbles: true });

      titleInput.value = "";
      nameInput.value = "Test Author";
      numberInput.value = "123";
      checkbox.checked = false;

      validateForm(event);

      expect(event.defaultPrevented).toBe(true);
      expect(myLibrary).toHaveLength(0);
    });
  });
  describe("listenClicks", () => {
    let event;
    beforeEach(() => {
      event = { target: { id: "", classList: [] } };
      myLibrary = [
        { title: "Book 1", author: "Author 1", pages: 100, status: true },
        { title: "Book 2", author: "Author 2", pages: 200, status: false },
        { title: "Book 3", author: "Author 3", pages: 300, status: true },
      ];
    });

    it("should call validateForm when add-book button is clicked", () => {
      event.target.id = "add-book";
      const validateForm = jest.fn();
      listenClicks();
      validateForm(event);
      expect(validateForm).toHaveBeenCalled();
    });

    it("should call manipulateModal when delete-all-btn is clicked", () => {
      event.target.id = "delete-all-btn";
      const manipulateModal = jest.fn();
      listenClicks();
      manipulateModal();
      expect(manipulateModal).toHaveBeenCalled();
    });

    it("should remove the book at the specified index when trash icon is clicked", () => {
      event.target.classList.add("fa-trash-alt");
      const spy = jest.spyOn(myLibrary, "splice");
      listenClicks();
      const tr = 1;
      event.target.parentNode = { parentNode: { rowIndex: tr + 1 } };
      expect(myLibrary).toHaveLength(3);
      expect(myLibrary[tr]).toEqual({
        title: "Book 2",
        author: "Author 2",
        pages: 200,
        status: false,
      });
      expect(spy).not.toHaveBeenCalled();
      listenClicks();
      expect(spy).toHaveBeenCalledWith(tr, 1);
      expect(myLibrary).toHaveLength(2);
      expect(myLibrary[tr]).toEqual({
        title: "Book 3",
        author: "Author 3",
        pages: 300,
        status: true,
      });
    });

    it("should update the status of the book when checkmark is clicked", () => {
      event.target.classList.add("fa-check");
      const tr = 1;
      event.target.parentNode = { parentNode: { rowIndex: tr + 1 } };
      expect(myLibrary[tr].status).toBe(false);
      listenClicks();
      expect(myLibrary[tr].status).toBe(true);
      expect(event.target.classList).toContain("fa-times");
    });

    it("should update the status of the book when cross is clicked", () => {
      event.target.classList.add("fa-times");
      const tr = 2;
      event.target.parentNode = { parentNode: { rowIndex: tr + 1 } };
      expect(myLibrary[tr].status).toBe(true);
      listenClicks();
      expect(myLibrary[tr].status).toBe(false);
      expect(event.target.classList).toContain("fa-check");
    });
  });
  describe("manipulateModal", () => {
    let modal;

    beforeEach(() => {
      modal = document.createElement("div");
      modal.id = "modal";
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Are you sure you want to delete all books?</p>
          <button class="confirm-removal">Yes</button>
          <button class="cancel">Cancel</button>
        </div>
      `;
      document.body.appendChild(modal);
    });

    afterEach(() => {
      document.body.removeChild(modal);
    });

    test("modal display is set to block when called", () => {
      manipulateModal();
      expect(modal.style.display).toBe("block");
    });

    test("clicking the close button hides the modal", () => {
      manipulateModal();
      const closeBtn = modal.querySelector(".close");
      closeBtn.click();
      expect(modal.style.display).toBe("none");
    });

    test("clicking the confirm button empties the library array", () => {
      myLibrary = [
        { title: "Book 1", author: "Author 1", pages: 100, status: true },
      ];
      manipulateModal();
      const confirmBtn = modal.querySelector(".confirm-removal");
      confirmBtn.click();
      expect(myLibrary.length).toBe(0);
    });

    test("clicking the cancel button hides the modal and does not modify the library array", () => {
      myLibrary = [
        { title: "Book 1", author: "Author 1", pages: 100, status: true },
      ];
      manipulateModal();
      const cancelBtn = modal.querySelector(".cancel");
      cancelBtn.click();
      expect(modal.style.display).toBe("none");
      expect(myLibrary.length).toBe(1);
    });
  });
});
