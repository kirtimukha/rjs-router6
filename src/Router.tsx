import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";


const router = createBrowserRouter([
  {
    path : "/",//부모로 생각하고, home 등은 자식으로 접근한다.
    element: <Root />,
    children: [
    {
      path: "",
      element: <Home />,
      errorElement: <ErrorComponent />
    },
    {
      path: "about",
      element: <About />
    }
    ],
    errorElement: <NotFound />
  }
]);

export default router;

