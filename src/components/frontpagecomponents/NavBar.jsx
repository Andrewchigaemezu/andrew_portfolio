import style from "./NavBar.module.css";
import poweronsvg from "../../assets/svg/poweron.svg";
import menu from "../../assets/svg/menu.svg";
import H1 from "../../utilities/H1";
import H3 from "../../utilities/H3";
import P18 from "../../utilities/P18";

function NavBar() {
  return (
    <header className={style.nav_cont}>
      <div className={style.nav_icon_cont}>
        <img src={poweronsvg} className={style.nav_cont_img} />
        <H1>Andrew</H1>
      </div>
      <nav className={style.navigation}>
        <a href="#">
          <P18>Home</P18>
        </a>
        <a href="#">
          <P18>About me</P18>
        </a>
        <a href="#">
          <P18>Services</P18>
        </a>
      </nav>
      <a className={style.nav_btn} href="#">
        <P18>Contact Me</P18>
      </a>
      <a href="#" className={style.mobile_menu}>
        <img src={menu} alt="menu icon" />
      </a>
    </header>
  );
}

export default NavBar;
