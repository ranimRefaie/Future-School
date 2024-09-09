import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sign from "./Pages/Sign/Sign";
const router = createBrowserRouter([
  {
    path: "/Future-School",
    element: <Home />,
  },

  {
    path: "/Future-School/signIn",
    element: <Sign />,
  },
]);

export default router;
