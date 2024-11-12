// src/components/BrowseBooks.jsx
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to get state from Redux store
import { Link } from 'react-router-dom';

function BrowseBooks() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const books = useSelector((state) => state.books); // Get books from Redux store

  useEffect(() => {
    setFilteredBooks(books); // Initially set filteredBooks to the full list of books
  }, [books]); // Re-run this when the books list changes

  function handleChange(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredBook = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
      );
    });

    setFilteredBooks(filteredBook);
  }

  return (
    <>
      <div className="text-center flex justify-center m-3">
        <input
          className="border border-[#49392C] p-1 pr-4 pl-4 focus:outline-orange-400 focus:border focus:border-white block w-[30%]"
          type="text"
          placeholder="Enter the title or AuthorName for search"
          onChange={handleChange}
        />
      </div>

      <div className="grid mx-auto grid-cols-3 w-[85%] text-center mt-4">
        {filteredBooks.map((book) => {
          return (
            <div key={book.id} className="border-2 bg-[#F0E8D9] border-black-300 m-1 rounded-lg p-4">
              <h1 className="underline text-[#D37C2D] font-bold">{book.title}</h1>
              <h2>{book.description}</h2>
              <h2 className="text-[#D37C2D] font-bold">{book.author}</h2>
              <h3>{book.year}</h3>
              <Link to={`/bookId/${book.id}`}>
                <button className="border p-1 pr-3 pl-3 text-[#ffffff] bg-[#49392C] hover:text-[#D37C3D] hover:font-bold">
                  View More
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BrowseBooks;
