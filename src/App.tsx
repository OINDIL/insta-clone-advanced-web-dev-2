
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Sidebar children={<Homepage />} />
        </div>
      ),
    },
    {
      path: "/search",
      element: (
        <div>
          <Sidebar children={<div>Search</div>} />
        </div>
      ),
    },
    {
      path: "/notifications",
      element: (
        <div>
          <Sidebar children={<div>Notifications</div>}/>
        </div>
      )
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
