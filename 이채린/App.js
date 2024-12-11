import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
  //Route,
  Outlet,
} from 'react-router-dom';

import Main from "./Main";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MainNavbar from "./components/MainNavbar";
import PostList from "./PostList";
import PostCreate from "./PostCreate";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}


const router = createBrowserRouter([
  /*
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
    ]
  },*/
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/post",
        element: <PostList />
      },
      {
        path: "/postcreate",
        element: <PostCreate />

      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
