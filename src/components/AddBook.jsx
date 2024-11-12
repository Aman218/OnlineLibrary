// src/components/AddBook.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../utils/bookSlice';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    image: '',
    rating: '',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!bookData.title) formErrors.title = 'Title is required.';
    if (!bookData.author) formErrors.author = 'Author is required.';
    if (!bookData.genre) formErrors.genre = 'Genre is required.';
    if (!bookData.description) formErrors.description = 'Description is required.';
    if (!bookData.image) formErrors.image = 'Image URL is required.';
    if (!bookData.rating || bookData.rating < 1 || bookData.rating > 5)
      formErrors.rating = 'Rating must be between 1 and 5.';
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      dispatch(addBook(bookData)); // Add the book to Redux state
      navigate('/browsebooks'); // Redirect to Browse Books page
    }
  };

  return (
    <>
      <Link to='/'><div className=' bg-[#f8f8f8]  text-[#d37c3d] text-[1.5rem] cursor-pointer'><HomeIcon/></div></Link>
    <div className="flex flex-col h-full items-center bg-[#f8f8f8] py-8">
      <h1 className="text-3xl font-bold underline text-[#D37C3D] mb-6 text-center">Add New Books Here </h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8 border border-[#D37C3D]">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Book Title */}
          <div>
            <label htmlFor="book-title" className="block text-sm font-bold text-[#d37c3d]">
              Book Title
            </label>
            <input
              id="book-title"
              name="title"
              placeholder='Book title'
              type="text"
              value={bookData.title}
              onChange={handleChange}
              className="mt-2 block w-full p-3 rounded-lg border border-gray-300 focus:ring-[#D37C3D] focus:border-[#D37C3D] focus:outline-none"
            />
            {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
          </div>

          {/* Book Author */}
          <div>
            <label htmlFor="book-author" className="block text-sm font-bold text-[#d37c3d]">
              Book Author
            </label>
            <input
              id="book-author"
              name="author"
              placeholder='Book Author'
              type="text"
              value={bookData.author}
              onChange={handleChange}
              className="mt-2 block w-full p-3 rounded-lg border border-gray-300 focus:ring-[#D37C3D] focus:border-[#D37C3D] focus:outline-none"
            />
            {errors.author && <p className="text-red-500 text-xs">{errors.author}</p>}
          </div>

          {/* Book Genre */}
          <div>
            <label htmlFor="book-genre" className="block text-sm font-bold text-[#d37c3d]">
              Book Genre
            </label>
            <input
              id="book-genre"
              name="genre"
              type="text"
              placeholder='Book Genre'
              value={bookData.genre}
              onChange={handleChange}
              className="mt-2 block w-full p-3 rounded-lg border border-gray-300 focus:ring-[#D37C3D] focus:border-[#D37C3D] focus:outline-none"
            />
            {errors.genre && <p className="text-red-500 text-xs">{errors.genre}</p>}
          </div>

          {/* Book Description */}
          <div>
            <label htmlFor="book-description" className="block text-sm font-bold text-[#d37c3d]">
              Book Description
            </label>
            <textarea
              id="book-description"
              name="description"
              placeholder='Book Description'
              value={bookData.description}
              onChange={handleChange}
              className="mt-2 block w-full p-3 rounded-lg border border-gray-300 focus:ring-[#D37C3D] focus:border-[#D37C3D] focus:outline-none"
              rows="4"
            />
            {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
          </div>

          {/* Book Image URL */}
          <div>
            <label htmlFor="book-image" className="block text-sm font-bold text-[#d37c3d]">
              Book Image URL
            </label>
            <input
              id="book-image"
              name="image"
              placeholder='BookImage URL'
              type="text"
              value={bookData.image}
              onChange={handleChange}
              className="mt-2 block w-full p-3 rounded-lg border border-gray-300 focus:ring-[#D37C3D] focus:border-[#D37C3D] focus:outline-none"
            />
            {errors.image && <p className="text-red-500 text-xs">{errors.image}</p>}
          </div>

          {/* Book Rating */}
          <div>
            <label htmlFor="book-rating" className="block text-sm font-bold text-[#d37c3d]">
              Book Rating (1-5)
            </label>
            <input
              id="book-rating"
              name="rating"
              type="number"
              placeholder='Book Rating'
              value={bookData.rating}
              onChange={handleChange}
              className="mt-2 block w-full p-3 rounded-lg border border-gray-300 focus:ring-[#D37C3D] focus:border-[#D37C3D] focus:outline-none"
              min="1"
              max="5"
            />
            {errors.rating && <p className="text-red-500 text-xs">{errors.rating}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-[#D37C3D] text-white text-lg font-semibold rounded-lg hover:bg-[#C27B2B] focus:outline-none focus:ring-2 focus:ring-[#766d67] focus:ring-opacity-50"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddBook;
