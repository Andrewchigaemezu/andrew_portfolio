import { Outlet } from "react-router-dom";
import NavBar from "../components/frontpagecomponents/NavBar";
import { ScrollRestoration } from "react-router-dom";
function RootLayer() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}

export default RootLayer;
