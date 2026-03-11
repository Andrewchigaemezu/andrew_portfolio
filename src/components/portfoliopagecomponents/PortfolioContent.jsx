import style from "./PortfolioContent.module.css";
import H2B from "../../utilities/H2B";
import P16, { P16B } from "../../utilities/P16";
import P18, { P18B } from "../../utilities/P18";
import circlearrowicon from "../../assets/svg/circlearrow.svg";
import urlsvg from "../../assets/svg/urlsvg.svg";
import gitsvg from "../../assets/svg/gitsvg.svg";
import raichielle from "../../assets/img/raichielle.png";
import codemek from "../../assets/img/codemek.png";

function PortfolioContent() {
  return (
    <section className={style.portfolio}>
      <div className={style.portfolio_text_cont}>
        <P18B>My Portfolio</P18B>
        <span className={style.line}></span>
        <H2B>
          Let's have a look at <span>my Portfolio</span>
        </H2B>
      </div>

      <div className={style.portfolio_card_cont}>
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
                <P16>4 Months</P16>
              </li>
              <li>
                <P16B>Country</P16B>
                <P16>Nigeria</P16>
              </li>
            </ul>
            <div className={style.project_links_cont}>
              <a href="#" className={style.project_link}>
                <img src={urlsvg} alt="url icon" />
                <P18>Visit site</P18>
              </a>
              <a href="#" className={style.project_link}>
                <img src={gitsvg} alt="github icon" />
                <P16>Visit repo </P16>
              </a>
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
                <P16>5 Months</P16>
              </li>
              <li>
                <P16B>Country</P16B>
                <P16>Nigeria</P16>
              </li>
            </ul>
            <div className={style.project_links_cont}>
              <a href="#" className={style.project_link}>
                <img src={urlsvg} alt="url icon" />
                <P18>Visit site</P18>
              </a>
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
                <P16>4 Months</P16>
              </li>
              <li>
                <P16B>Country</P16B>
                <P16>Nigeria</P16>
              </li>
            </ul>
            <div className={style.project_links_cont}>
              <a href="#" className={style.project_link}>
                <img src={urlsvg} alt="url icon" />
                <P18>Visit site</P18>
              </a>
              <a href="#" className={style.project_link}>
                <img src={gitsvg} alt="github icon" />
                <P16>Visit repo </P16>
              </a>
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
                <P16>5 Months</P16>
              </li>
              <li>
                <P16B>Country</P16B>
                <P16>Nigeria</P16>
              </li>
            </ul>
            <div className={style.project_links_cont}>
              <a href="#" className={style.project_link}>
                <img src={urlsvg} alt="url icon" />
                <P18>Visit site</P18>
              </a>
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

export default PortfolioContent;
