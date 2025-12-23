# README

# README

# Book Library: A Comprehensive JavaScript Application

## Overview

The **Book Library** project is a general-purpose application designed to manage a collection of books. This application allows users to add, view, and manage their books in a structured manner. Built primarily with JavaScript, the project leverages various web technologies to create an interactive user experience. The application is structured to provide a clean interface for users to interact with their book collection, making it easy to keep track of their reading materials.

The primary goal of the Book Library application is to provide a simple yet effective way for users to manage their books. Users can add new books, view existing ones, and organize their library according to their preferences. The application is designed to be user-friendly, ensuring that even those with minimal technical knowledge can navigate and utilize its features effectively.

The architecture of the Book Library application is straightforward, focusing on modularity and maintainability. The codebase is organized into distinct components, each responsible for specific functionalities, such as displaying book details, handling user input, and managing data storage. This modular approach not only enhances code readability but also facilitates easier updates and feature enhancements in the future.

## Features

### Core Features

1. **Add Book** (js/scripts.js): This feature allows users to add new books to their library. The implementation captures user input from a form and stores the book details in a structured format. This functionality is essential for users who wish to expand their collection and keep track of new acquisitions.

2. **View Books** (js/scripts.js): Users can view a list of all books in their library. This feature retrieves book data from storage and displays it in a user-friendly format. It is crucial for users to have an overview of their collection, making it easier to find specific titles or authors.

3. **Delete Book** (js/scripts.js): This functionality enables users to remove books from their library. By selecting a book and confirming the deletion, users can manage their collection effectively, ensuring that only relevant titles remain. This feature is particularly useful for users who may want to declutter their library.

4. **Filter Books** (js/filter.js): Users can filter their book collection based on various criteria, such as author or genre. This feature enhances the user experience by allowing quick access to specific books, making it easier to locate desired titles among a larger collection.

5. **Responsive Design** (styles.css): The application is designed to be responsive, ensuring that it functions well on various devices, including desktops, tablets, and smartphones. This feature is crucial in today's mobile-centric world, allowing users to access their library from anywhere.

### Advanced Features

Currently, the Book Library application does not include advanced features beyond the core functionalities mentioned above. The focus has been on establishing a solid foundation for managing a book collection. Future enhancements may include features such as user authentication, book recommendations, or integration with external book databases.

## Installation/Setup

### Prerequisites

To set up the Book Library application, ensure you have the following prerequisites:

- **Node.js**: A JavaScript runtime environment that allows you to run JavaScript code outside of a web browser.
- **npm**: A package manager for JavaScript that comes with Node.js, used for managing project dependencies.

### Step-by-Step Setup Instructions

1. **Clone the Repository**  
   Clone the Book Library repository to your local machine using the following command:
   ```bash
   git clone https://github.com/DimitriHristovski/Book-Library.git
   ```

2. **Navigate to the Project Directory**  
   Change into the project directory:
   ```bash
   cd Book-Library
   ```

3. **Install Dependencies**  
   Install the necessary dependencies using npm:
   ```bash
   npm install
   ```

4. **Open the HTML File**  
   Open the `index.html` file in your web browser to view the application:
   ```bash
   open index.html  # or use your preferred method to open the file
   ```

5. **Start the Development Server**  
   If you have a development server set up, you can start it using:
   ```bash
   npm run dev
   ```

6. **Build for Production**  
   To create a production build of the application, run:
   ```bash
   npm run build
   ```

### Troubleshooting

- **Issue: Unable to Add Book**  
  If you encounter issues when trying to add a book, ensure that all required fields in the form are filled out correctly. Check the console for any error messages that may indicate what went wrong.

- **Issue: Books Not Displaying**  
  If the list of books is not displaying, verify that the data is being correctly retrieved from storage. Check the implementation in `js/scripts.js` to ensure that the retrieval logic is functioning as expected.

- **Issue: Styles Not Applying**  
  If the styles are not being applied, ensure that the `styles.css` file is correctly linked in the `index.html` file. Check for any console errors that may indicate issues with loading the CSS file.

## Usage

### Quick Start Guide

1. Open the Book Library application in your web browser.
2. Use the form to add a new book by entering the title, author, and any other relevant details.
3. Click the "Add Book" button to save the book to your library.
4. View your collection in the main display area.
5. Use the filter options to find specific books quickly.
6. To remove a book, select it from the list and click the "Delete" button.

### Detailed Usage Examples

#### Basic Example

To add a book to your library, fill out the form with the following details:

- Title: "The Great Gatsby"
- Author: "F. Scott Fitzgerald"

After entering the details, click the "Add Book" button. The book will then appear in your library list.

Expected output:
```
Books in Library:
1. The Great Gatsby by F. Scott Fitzgerald
```

#### Advanced Example

If you have multiple books, you can filter them by author. For instance, if you have the following books:

- "The Great Gatsby" by "F. Scott Fitzgerald"
- "To Kill a Mockingbird" by "Harper Lee"

You can enter "Harper Lee" in the filter input field, and the application will display only the books authored by Harper Lee.

#### Error Handling Example

If you try to add a book without filling out the title field, the application should display an error message indicating that the title is required. This helps users understand what went wrong and how to fix it.

## API/Function Examples

Currently, the Book Library application does not expose any APIs, as it is primarily a client-side application. All functionalities are handled within the JavaScript files, specifically in `js/scripts.js` and `js/filter.js`.

## Configuration

### Environment Variables

The Book Library application does not require any environment variables for its basic functionality. All configurations are handled within the JavaScript files and the HTML structure.

### GitHub Token Setup

As the application does not interact with external APIs that require authentication, there is no need for a GitHub token setup.

## Architecture Overview

### System Design

The Book Library application is designed as a single-page application (SPA) that runs entirely in the user's browser. The architecture is primarily client-side, with JavaScript handling all interactions and data management. The application utilizes a modular approach, where different functionalities are encapsulated within separate JavaScript files. This design choice enhances maintainability and readability, allowing developers to easily navigate and update the codebase.

The application leverages the Document Object Model (DOM) to dynamically update the user interface based on user interactions. When a user adds a book, the application updates the displayed list without requiring a page refresh, providing a seamless user experience.

### Component Relationships

- **Main Application Component** (index.html): The entry point of the application, where all other components are rendered.
- **Book Management Logic** (js/scripts.js): Handles the core functionalities of adding, viewing, and deleting books.
- **Filtering Logic** (js/filter.js): Manages the filtering of books based on user input.

## Project Structure

```
Book-Library/
├── .vscode/                # Visual Studio Code settings
│   └── settings.json
├── assets/                 # Static assets
│   └── css/                # CSS files for styling
│       ├── chart.css
│       ├── form.css
│       ├── style.css
│       └── table.css
├── coverage/               # Coverage reports
│   ├── lcov-report/
│   ├── clover.xml
│   ├── coverage-final.json
│   └── lcov.info
├── js/                     # JavaScript files
│   ├── filter.js           # Logic for filtering books
│   └── scripts.js          # Core book management logic
├── tests/                  # Test files
│   ├── filter.test.js      # Tests for filtering functionality
│   └── script.test.js      # Tests for core script functionality
├── Advanced JS - Assignments.pdf
├── Advanced JS - Presentation.pdf
├── babel.babelrc           # Babel configuration
├── babel.config.js         # Babel configuration
├── books.json              # Sample book data
├── icons8-story-book-96.png # Icon for the application
├── index.html              # Main HTML file
├── package-lock.json       # npm package lock file
├── package.json            # npm package configuration
├── README.md               # Project documentation
└── styles.css              # Main stylesheet
```

## Contributing

### Guidelines for Contributors

1. **Fork the Repository**  
   Create a personal copy of the repository by forking it on GitHub.

2. **Create a Feature Branch**  
   Create a new branch for your feature:
   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Commit Your Changes**  
   Commit your changes with a descriptive message:
   ```bash
   git commit -m "Add new feature"
   ```

4. **Push to Your Branch**  
   Push your changes to your forked repository:
   ```bash
   git push origin feature/YourFeatureName
   ```

5. **Open a Pull Request**  
   Navigate to the original repository and open a pull request, describing your changes.

### Development Standards

- **Code Comments**: Ensure that your code is well-commented to explain complex logic.
- **Documentation**: Update the README.md file with any new features or changes.
- **Testing**: Write tests for new features to ensure code quality.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Additional Sections

### FAQ

- **Q1: How do I add a new book?**  
  A1: To add a new book, fill out the form with the book's title and author, then click the "Add Book" button. The book will be added to your library.

- **Q2: Can I delete a book from my library?**  
  A2: Yes, you can delete a book by selecting it from the list and clicking the "Delete" button.

- **Q3: How do I filter my books?**  
  A3: You can filter your books by entering criteria such as the author's name in the filter input field. The list will update to show only matching books.

- **Q4: Is the application mobile-friendly?**  
  A4: Yes, the Book Library application is designed to be responsive and works well on mobile devices.

- **Q5: Can I contribute to the project?**  
  A5: Absolutely! Please follow the contributing guidelines outlined in the README to submit your changes.

### Known Issues

- **Issue: Filtering Not Working**  
  The filtering feature may not work correctly if the input is not formatted properly. Ensure that you are entering the correct author names.

- **Issue: Styles Not Loading**  
  If the styles are not applied, check the console for errors related to loading the `styles.css` file.

- **Issue: Data Loss on Refresh**  
  Currently, the application does not persist data across page refreshes. This is a limitation that may be addressed in future updates.

- **Issue: Compatibility Issues**  
  The application may not function correctly in older browsers. It is recommended to use modern browsers for the best experience.

- **Issue: Performance on Large Libraries**  
  The application may experience performance issues when managing a very large number of books. Optimization may be needed for scalability.

### Roadmap

- **Feature: User Authentication**  
  Future versions may include user authentication to allow users to create accounts and save their libraries securely.

- **Feature: Book Recommendations**  
  Implementing a recommendation system based on user preferences and reading history could enhance user engagement.

- **Feature: Integration with External APIs**  
  Future updates may include integration with external book databases to provide users with additional information about their books.

This README provides a comprehensive overview of the Book Library project, detailing its features, installation instructions, usage guidelines, and more. The documentation is designed to assist users and developers in understanding and contributing to the project effectively.