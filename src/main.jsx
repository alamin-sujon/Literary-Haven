import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import ListedBook from './Components/ListedBook.jsx';
import Home from './Components/Home.jsx';
import PageReaded from './Components/PageReaded.jsx';
import BookDetails from './Components/BookDetails.jsx';

import ErrorPage from './Components/ErrorPage.jsx';
import Blog from './Components/Blog.jsx';
import AboutUs from './Components/AboutUs.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        
        element: <Home></Home>
      },
      {
        path: '/list',
        element: <ListedBook></ListedBook>,
        
       
      },
      {
        path: '/read',
        element: <PageReaded></PageReaded>
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      }
   
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
