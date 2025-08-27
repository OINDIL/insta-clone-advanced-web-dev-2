
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar />,
      children: [
        {
          path: "/",
          element: <Homepage />
        },
        {
          path: "/stories",
          element: <Homepage />
        },
        {
          path: "/search",
          element: <Homepage />
        },
        {
          path: "/explore",
          element: <Homepage />
        },
        {
          path: "/profile",
          element: <Homepage />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
