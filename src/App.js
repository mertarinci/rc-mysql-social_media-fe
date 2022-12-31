import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Login2 from './Pages/Login2/Login2';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import Register2 from './Pages/Register2/Register2';
import SinglePost from './Pages/SinglePost/SinglePost';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/:userId/:postId",
    element: <SinglePost />
  },

  {
    path: "/login",
    element: <Login2 />
  },

  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/register",
    element: <Register2 />
  }


]);


function App() {
  return <RouterProvider router={router} />
}

export default App;
