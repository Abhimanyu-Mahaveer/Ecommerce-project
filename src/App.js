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
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Protected from './features/auth/components/Protected';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { ErrorPage } from './pages/404page';
import { OrderSucccessPage } from './pages/OrderSuccessPage';
import { UserOrdersPage } from './pages/UserOrdersPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected><Home></Home></Protected>
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
    element: <Protected><CartPage></CartPage></Protected>
  },
  {
    path:"/checkout",
    element:<Protected><CheckoutPage></CheckoutPage></Protected>
  }, 
  {
    path:"/product-details/:id", 
    element:<Protected><ProductDetailsPage></ProductDetailsPage></Protected> 
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
  {
    path: "/order-success/:id",
    element: <OrderSucccessPage></OrderSucccessPage>
  },
  {
    path: "/orders",
    element: <UserOrdersPage></UserOrdersPage>
  }
]);

function App() {
  const dispatch =useDispatch(); 
  const user =useSelector(selectLoggedInUser); 
  useEffect(()=>{
    if(user)
    {dispatch(fetchItemsByUserIdAsync(user.id))}
  },[dispatch, user])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
