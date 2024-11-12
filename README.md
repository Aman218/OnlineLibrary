# Online Library System

This is a web application for managing an online library system. It includes features for browsing, adding, and managing books, with React as the frontend framework.

## Project Structure

- **src/components**: Contains the main UI components for the library system.
  - **AddBook.jsx**: Component for adding a new book, includes fields like book title, author, rating, etc.
  - **Body.jsx**: Main body layout of the application.
  - **BookDetail.jsx**: Displays detailed information about a selected book.
  - **BookDetailBrowse.jsx**: Handles browsing specific book details.
  - **BrowseBooks.jsx**: Main component for browsing the list of available books.
  - **Error.jsx**: Handles and displays error messages.
  - **FilterByCategory.jsx**: Provides functionality to filter books by categories.
  - **GenreFiltering.jsx**: Allows filtering books based on genres.
  - **Header.jsx**: Contains the header and navigation elements.
  - **PopularBooks.jsx**: Displays a list of popular books.

- **src/utils**: Contains utility files.
  - **books.js**: Contains functions or data related to book management.
  - **bookSlice.js**: Redux slice or context handling book-related states.
  - **popularBooks.js**: Handles data or functions related to popular books.


  ## Requirements

Before you begin, ensure you have the following installed:

i-Node.js (v14 or later)
  npm or yarn

ii-Navigate into the project directory i.e cd ToDoProject

iii-Install the dependencies: i.e npm install
# or if using yarn
yarn


iv-To run the development server with Vite: i.e npm run dev