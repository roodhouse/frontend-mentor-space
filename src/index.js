import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Destination from './components/Destination';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'destination',
        element: <Destination />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);