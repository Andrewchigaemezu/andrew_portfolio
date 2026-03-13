import style from "./NavBar.module.css";
import poweronsvg from "../../assets/svg/poweron.svg";
import cancel from "../../assets/svg/cancel.svg";
import menu from "../../assets/svg/menu.svg";
import H1 from "../../utilities/H1";
import H3 from "../../utilities/H3";
import P18 from "../../utilities/P18";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store";
import { Link } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.isOpen);

  console.log(isOpen);
  return (
    <header className={style.nav_cont}>
      <div className={style.nav_icon_cont}>
        <img src={poweronsvg} className={style.nav_cont_img} />
        <Link to={"/"}>
          <H1>Andrew</H1>
        </Link>
      </div>
      <nav className={style.navigation}>
        <Link to="/">
          <P18>Home</P18>
        </Link>
        <Link to="/#about">
          <P18>About me</P18>
        </Link>
        <Link to="/#services">
          <P18>Services</P18>
        </Link>
      </nav>
      <Link className={style.nav_btn} to="/#contact_me">
        <P18>Contact Me</P18>
      </Link>

      {!isOpen ? (
        <img
          src={menu}
          alt="menu icon"
          className={style.mobile_menu}
          onClick={() => {
            dispatch(modalActions.openCloseModal());
          }}
        />
      ) : (
        <img
          src={cancel}
          alt="cancel icon"
          className={style.mobile_menu_close}
          onClick={() => {
            dispatch(modalActions.openCloseModal());
          }}
        />
      )}
    </header>
  );
}

export default NavBar;
