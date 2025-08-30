import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import About from "../pages/About/About.tsx";
import NotFound from "../pages/NotFound/NotFound.tsx";
import { PATHS } from "./constants.ts";
import App from "../App.tsx";

export const router = createBrowserRouter([
  {
    path: PATHS.index,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: PATHS.about, element: <About /> },
    ],
  },
]);