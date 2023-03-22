import React from 'react';
import ReactDOM from 'react-dom/client';
// React router imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/login',
    element: <Login />
  },
  {
    path:'/signup',
    element:<Signup/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
