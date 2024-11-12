import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from './components/Error.jsx';
import BookDetail from './components/BookDetail.jsx';
import Body from './components/Body.jsx';
import BrowseBooks from './components/BrowseBooks.jsx';
import BookDetailBrowse from './components/BookDetailBrowse.jsx';
import GenreFiltering from './components/GenreFiltering.jsx';
import AddBook from './components/AddBook.jsx';
import {Provider} from 'react-redux';
import { store } from './utils/store.js';

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/book/:id',
        element:<BookDetail/>
      },
      {
        path:'/bookId/:id',
        element: <BookDetailBrowse/>
      },
      {
        path:'/',
        element:<Body/>
      }
    ]
  },
  {
    path:'/browsebooks',
    element:<BrowseBooks/>,
  },
  {
    path:'*',
    element:<Error/>
  }
  ,{
    path:'/category/:ct',
    element:<GenreFiltering/>
  },
  {
    path:'/addBooks',
    element:<AddBook/>
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={appRouter}/>
    </Provider>

  </StrictMode>,
)
