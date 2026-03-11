import style from "./Footer.module.css";
import H2B from "../../utilities/H2B";
import H1 from "../../utilities/H1";
import P18, { P18B } from "../../utilities/P18";
import twittericon from "../../assets/svg/twittericon.svg";
import fbicon from "../../assets/svg/fbicon.svg";
import instaicon from "../../assets/svg/instaicon.svg";
import linkedinicon from "../../assets/svg/linkedinicon.svg";
import poweronicon from "../../assets/svg/poweron.svg";
import P16 from "../../utilities/P16";
import P14 from "../../utilities/P14";

function Footer() {
  return (
    <section className={style.footer}>
      <header>
        <H2B>
          Let's connect <span>here</span>
        </H2B>
      </header>
      <main className={style.footer_main}>
        <div className={style.footer_main_first}>
          <div className={style.webname_cont}>
            <img src={poweronicon} alt="power on icon" />
            <H1>Andrew</H1>
          </div>
          <P18>
            I'm a frontend developer my goal is to build scalable, modern web
            applications that deliver seamless user experiences while constantly
            learning and pushing the boundaries of frontend development.
          </P18>
          <div className={style.footer_mobile_nav}>
            <ul className={style.footer_mobile_nav_second}>
              <li>
                <P18B>Navigation</P18B>
              </li>
              <li>
                <a href="#">
                  <P16>Home</P16>
                </a>
              </li>
              <li>
                <a href="#">
                  <P16>About</P16>
                </a>
              </li>
              <li>
                <a href="#">
                  <P16>Services</P16>
                </a>
              </li>
              <li>
                <a href="#">
                  <P16>Portfolio</P16>
                </a>
              </li>
              <li>
                <a href="#">
                  <P16>FAQs</P16>
                </a>
              </li>
            </ul>
            <ul className={style.footer_mobile_nav_third}>
              <li>
                <P18B>Contact</P18B>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <P16>+234 901 6382 289</P16>
                </a>
              </li>
              <li>
                <a href="#">
                  <P16>elechiandrewchigaemezu@gmail.com</P16>
                </a>
              </li>
            </ul>
          </div>
          <div className={style.footer_icons_cont}>
            <img src={twittericon} alt="twitter icon" />
            <img src={linkedinicon} alt="linkedin icon" />
            <img src={fbicon} alt="facebook icon" />
            <img src={instaicon} alt="instagram icon" />
          </div>
        </div>
        <ul className={style.footer_main_second}>
          <li>
            <P18B>Navigation</P18B>
          </li>
          <li>
            <a href="#">
              <P16>Home</P16>
            </a>
          </li>
          <li>
            <a href="#">
              <P16>About</P16>
            </a>
          </li>
          <li>
            <a href="#">
              <P16>Services</P16>
            </a>
          </li>
          <li>
            <a href="#">
              <P16>Portfolio</P16>
            </a>
          </li>
          <li>
            <a href="#">
              <P16>FAQs</P16>
            </a>
          </li>
        </ul>
        <ul className={style.footer_main_third}>
          <li>
            <P18B>Contact</P18B>
          </li>
          <li>
            <a href="#">
              {" "}
              <P16>+234 901 6382 289</P16>
            </a>
          </li>
          <li>
            <a href="#">
              <P16>elechiandrewchigaemezu@gmail.com</P16>
            </a>
          </li>
        </ul>
      </main>
      <div className={style.footer_close}>
        <P14>
          Copyright &copy; 2026 <span>Andrew</span> All Rights Reserved
        </P14>
        <P14>User Terms & Conditions | Privacy Policy</P14>
      </div>
    </section>
  );
}

export default Footer;
