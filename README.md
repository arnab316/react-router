# React Router

## this repo i created basic of react routing

- the basic tructer of react routing
  in app. js

```
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


```

### react loader

- react loader is faster than useEffect because it fetch faster beacuse useEffect call api when component is loaded and loader do before component is loaded

- and loader function needs to be return some value or null

```
import Test, { loader as TestLoader } from "./components/Test";


const approuter = createBrowserRouter{[
    path: "/test",
    element: <Test />,
    loader: TestLoader,
  ]},

```

- and then go to Test components and the syntax looks like

```
import { useLoaderData } from "react-router-dom";

const Test = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className=" text-center h-screen">
      <h1 className="text-lg font-semibold text-green-500">
        Hellow from test{" "}
      </h1>
    </div>
  );
};

export default Test;
export const loader = () => {
  return {
    firstname: "John",
  };
};

```

### react dynamic routing

- To illustrate dynamic routing, let’s consider an e-commerce app. Normally, pages in a web app are created and rendered by moving through different components. However, in the case of an e-commerce app, creating pages for each individual product is not practical. This is where dynamic routing comes in handy.

In our example, we will use the popular React framework and the react-router-dom library for routing. We’ll start by importing the necessary components into our main App.js file:

```
import { BrowserRouter} from "react-router-dom";


```

- Next, we’ll define our routes using the Routes and Route components provided by react-router-dom:

```
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
  ]);

const App = () => {
  return (
     <>
      <RouterProvider router={appRouter} />
    </>
  );
}
```

- Note the slight modification in the route path for the product page. We’ve added about/:id to indicate that this part of the URL will be dynamic and represent the product's unique identifier.

- In the Product component, we can access the :id parameter using the useParams hook provided by react-router-dom:

```
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  console.log(id);

  return <div>Product</div>;
}
```

### useOutletContext

- Often parent routes manage state or other values you want shared with child routes. You can create your own context provider if you like, but this is such a common situation that it's built-into <Outlet />:

```
function Parent() {
  const [count, setCount] = React.useState(0);
  return <Outlet context={[count, setCount]} />;
}
```

```

import { useOutletContext } from "react-router-dom";

function Child() {
  const [count, setCount] = useOutletContext();
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>{count}</button>;
}
```
