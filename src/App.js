import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LeftBar from './Components/LeftBar/LeftBar';
import RightBar from './Components/RightBar/RightBar';
import Home from './Pages/Home/Home';
import SinglePost from './Pages/SinglePost/SinglePost';


const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />
  },

  {
    path: "/:userId/:postId",
    element: <SinglePost />
  }


]);


function App() {
  return <RouterProvider router={router} />
}

export default App;
