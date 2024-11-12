
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice.js'

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
