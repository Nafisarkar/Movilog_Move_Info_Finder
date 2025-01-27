import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Seachpage from "./pages/Searchpage.jsx";
import Errorpage from "./pages/Errorpage.jsx";
import Topmovies from "./pages/Topmovies.jsx";
import About from "./pages/About.jsx";
import Homepage from "./pages/Homepage.jsx";
import Detailspage from "./pages/Detailspage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },

      {
        path: "/search",
        element: <Seachpage />,
      },
      {
        path: "/top",
        element: <Topmovies />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/movie/:id", // Dynamic route for movie details
        element: <Detailspage />,
      },
      {
        path: "*",
        element: <Errorpage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
