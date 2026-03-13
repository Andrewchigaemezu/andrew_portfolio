import { Outlet } from "react-router-dom";
import NavBar from "../components/frontpagecomponents/NavBar";
import { ScrollRestoration } from "react-router-dom";
import MobileMenu from "../components/frontpagecomponents/MobileMenu";
import { useSelector } from "react-redux";
function RootLayer() {
  const modalIsOpen = useSelector((state) => state.isOpen);
  return (
    <>
      <NavBar />
      {modalIsOpen && <MobileMenu />}
      <Outlet />
      <ScrollRestoration />
    </>
  );
}

export default RootLayer;
