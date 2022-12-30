import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import SinglePost from './Pages/SinglePost/SinglePost';


const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />
  },

  {
    path: "/:userId/:postId",
    element: <SinglePost />
  },

  {
    path: "/register",
    element: <Register />
  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/profile",
    element: <Profile />
  }


]);


function App() {
  return <RouterProvider router={router} />
}

export default App;
