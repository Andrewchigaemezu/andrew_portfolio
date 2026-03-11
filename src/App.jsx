import LandingPage from "./pages/LandingPage";

import "./App.css";
import PortfolioPage from "./pages/PortfolioPage";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import RootLayer from "./pages/Root";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayer />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
