import React from 'react';
// import { Counter } from './features/counter/Counter';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';
import Home from './pages/Home';
import CartPage from './pages/CartPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home></Home>
    ),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  { //only for now (testing) later page will be added
    path: "/cart",
    element: <CartPage></CartPage>
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
