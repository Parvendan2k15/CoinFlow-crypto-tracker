import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/navbar/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import News from './pages/News';
import About from './pages/About';
import Exchange from './pages/Exchange';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/news",
    element: <News/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/exchange",
    element: <Exchange/>,
  },


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Navbar/>
  <RouterProvider router={router} />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
