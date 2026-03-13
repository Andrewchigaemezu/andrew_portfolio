import style from "./MobileMenu.module.css";
import { Link } from "react-router-dom";
import P18 from "../../utilities/P18";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store";

function MobileMenu() {
  const dispatch = useDispatch();
  return (
    <section className={style.mobile_menu}>
      <ul>
        <li>
          <Link
            to={"/#about"}
            onClick={() => {
              dispatch(modalActions.openCloseModal());
            }}
          >
            <P18>About me</P18>
          </Link>
        </li>
        <li>
          <Link
            to={"/#services"}
            onClick={() => {
              dispatch(modalActions.openCloseModal());
            }}
          >
            <P18>Services</P18>
          </Link>
        </li>
        <li>
          <Link
            to={"/portfolio"}
            onClick={() => {
              dispatch(modalActions.openCloseModal());
            }}
          >
            <P18>Portfolio</P18>
          </Link>
        </li>
        <li>
          <Link
            to={"/#education"}
            onClick={() => {
              dispatch(modalActions.openCloseModal());
            }}
          >
            <P18>Education and Experience</P18>
          </Link>
        </li>
        <li>
          <Link
            to={"/#contact_me"}
            onClick={() => {
              dispatch(modalActions.openCloseModal());
            }}
          >
            <P18>Contact Me</P18>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default MobileMenu;
