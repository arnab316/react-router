import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/routes/ErrorPage";
import Contact from "./components/routes/Contact";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Test, { loader as TestLoader } from "./components/Test";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "/about/:id",
        element: <About />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/users",
    element: <Users />,
    children: [{ path: "users/:id", element: <UserDetails /> }],
  },
  {
    path: "/test",
    element: <Test />,
    loader: TestLoader,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
