import style from "./Portfolio.module.css";
import H2B from "../../utilities/H2B";
import P16, { P16B } from "../../utilities/P16";
import P18, { P18B } from "../../utilities/P18";
import circlearrowicon from "../../assets/svg/circlearrow.svg";
import urlsvg from "../../assets/svg/urlsvg.svg";
import gitsvg from "../../assets/svg/gitsvg.svg";
import raichielle from "../../assets/img/raichielle.png";
import codemek from "../../assets/img/codemek.png";
import swacore from "../../assets/img/swacore.png";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className={style.portfolio}>
      <div className={style.portfolio_text_cont}>
        <header>
          <P18B>My Portfolio</P18B>
          <span className={style.line}></span>
          <H2B>
            Let's have a look at <span>my Portfolio</span>
          </H2B>
        </header>
        <Link to="/portfolio" className={style.portfolio_link}>
          <P16>View all Projects</P16>
          <img src={circlearrowicon} alt="circle arrow" />
        </Link>
      </div>

      <div className={style.portfolio_card_cont}>
        <figure className={style.portfolio_card}>
          <div className={style.portfolio_card_text_cont}>
            <H2B>
              SWACORE- <br />
              <span>Waste Management website</span>
            </H2B>
            <ul>
              <li>
                <P16B>Client</P16B>
                <P16>Philip Okoro</P16>
              </li>
              <li>
                <P16B>Duration</P16B>
                <P16>2 Weeks</P16>
              </li>
              <li>
                <P16B>Country</P16B>
                <P16>Nigeria</P16>
              </li>
            </ul>
            <div className={style.project_links_cont}>
              <Link
                to="https://swacore.vercel.app/"
                className={style.project_link}
              >
                <img src={urlsvg} alt="url icon" />
                <P18>Visit site</P18>
              </Link>
              <a
                href="https://github.com/Andrewchigaemezu/swacore"
                className={style.project_link}
              >
                <img src={gitsvg} alt="github icon" />
                <P16>Visit repo </P16>
              </a>
            </div>
          </div>
          <img
            src={swacore}
            alt="SWACORE company website design image"
            className={style.portfolio_card_img}
          />
        </figure>

        <figure className={style.portfolio_card}>
          <img
            src={raichielle}
            alt="raichielle company website design image"
            className={style.portfolio_card_img}
          />
          <div className={style.portfolio_card_text_cont}>
            <H2B>
              Raichielle- <br />
              <span>Fashion Company's website</span>
            </H2B>
            <ul>
              <li>
                <P16B>Client</P16B>
                <P16>Raechel Mbah</P16>
              </li>
              <li>
                <P16B>Duration</P16B>
                <P16>4 Weeks</P16>
              </li>
              <li>
                <P16B>Country</P16B>
                <P16>Nigeria</P16>
              </li>
            </ul>
            <div className={style.project_links_cont}>
              <Link
                to="https://raichielle-q9v5.vercel.app/"
                className={style.project_link}
              >
                <img src={urlsvg} alt="url icon" />
                <P18>Visit site</P18>
              </Link>
              <Link
                to="https://github.com/Andrewchigaemezu/raichielle"
                className={style.project_link}
              >
                <img src={gitsvg} alt="github icon" />
                <P16>Visit repo </P16>
              </Link>
            </div>
          </div>
        </figure>
        <figure className={style.portfolio_card}>
          <div className={style.portfolio_card_text_cont}>
            <H2B>
              CodeMek- <br />
              <span>Flight Booking website</span>
            </H2B>
            <ul>
              <li>
                <P16B>Client</P16B>
                <P16>Keneth Alozie</P16>
              </li>
              <li>
                <P16B>Duration</P16B>
                <P16>In Progress</P16>
              </li>
              <li>
                <P16B>Country</P16B>
                <P16>Nigeria</P16>
              </li>
            </ul>
            <div className={style.project_links_cont}>
              <Link to="#" className={style.project_link}>
                <img src={urlsvg} alt="url icon" />
                <P18>Visit site</P18>
              </Link>
              <a href="#" className={style.project_link}>
                <img src={gitsvg} alt="github icon" />
                <P16>Visit repo </P16>
              </a>
            </div>
          </div>
          <img
            src={codemek}
            alt="codemek company website design image"
            className={style.portfolio_card_img}
          />
        </figure>
      </div>
    </section>
  );
}

export default Portfolio;
