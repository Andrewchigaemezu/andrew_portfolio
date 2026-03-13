import style from "./Faqs.module.css";
import H2B from "../../utilities/H2B";
import P18, { P18B } from "../../utilities/P18";
import H3, { H3B } from "../../utilities/H3";
import addicon from "../../assets/svg/addicon.svg";
import messageicon from "../../assets/svg/messageicon.svg";
import P16, { P16B } from "../../utilities/P16";
import { useState } from "react";

function Faqs() {
  const [availableq, setAvailableq] = useState(false);
  const [stackq, setStackq] = useState(false);
  const [inductryq, setIndustryq] = useState(true);
  const [portfolioq, setPortfolioq] = useState(false);
  const [cvq, setcvq] = useState(false);
  function dropDownHandler(caller) {
    if (caller === "availableq") {
      setStackq(false);
      setIndustryq(false);
      setPortfolioq(false);
      setcvq(false);
      setAvailableq((state) => !state);
    } else if (caller === "stackq") {
      setStackq((state) => !state);
      setIndustryq(false);
      setPortfolioq(false);
      setcvq(false);
      setAvailableq(false);
    } else if (caller === "industryq") {
      setStackq(false);
      setIndustryq((state) => !state);
      setPortfolioq(false);
      setcvq(false);
      setAvailableq(false);
    } else if (caller === "portfolioq") {
      setStackq(false);
      setIndustryq(false);
      setPortfolioq((state) => !state);
      setcvq(false);
      setAvailableq(false);
    } else if (caller === "cvq") {
      setStackq(false);
      setIndustryq(false);
      setPortfolioq(false);
      setcvq((state) => !state);
      setAvailableq(false);
    }
  }

  return (
    <section className={style.faqs} id="faqs">
      <header>
        <P18B>FAQs</P18B>
        <span className={style.line}></span>
        <H2B>
          Questions? <span>Look here</span>
        </H2B>
      </header>
      <main className={style.faqs_card_cont}>
        <ul className={style.faqs_cont}>
          <li style={{ backgroundColor: `${availableq ? "#d3812f" : ""}` }}>
            <div>
              <H3>Are you available for freelance of contract roles?</H3>
              {availableq && (
                <P18>
                  I don't limit myself to one industry — I've worked on projects
                  ranging from e-commerce to educational platforms. What I
                  specialize in is crafting user-friendly, responsive interfaces
                  that help businesses connect with their audience.
                </P18>
              )}
            </div>
            <img
              src={addicon}
              alt="addition icon"
              onClick={() => {
                dropDownHandler("availableq");
              }}
              className={availableq ? `${style.active_dropdown}` : ""}
            />
          </li>
          <li style={{ backgroundColor: `${inductryq ? "#d3812f" : ""}` }}>
            <div>
              <H3>What industries do you specialize in?</H3>
              {inductryq && (
                <P18>
                  I don't limit myself to one industry — I've worked on projects
                  ranging from e-commerce to educational platforms. What I
                  specialize in is crafting user-friendly, responsive interfaces
                  that help businesses connect with their audience.
                </P18>
              )}
            </div>
            <img
              src={addicon}
              alt="addition icon"
              onClick={() => {
                dropDownHandler("industryq");
              }}
              className={inductryq ? `${style.active_dropdown}` : ""}
            />
          </li>
          <li style={{ backgroundColor: `${stackq ? "#d3812f" : ""}` }}>
            <div>
              <H3>What stacks do you use in your workflow?</H3>
              {stackq && (
                <P18>
                  I don't limit myself to one industry — I've worked on projects
                  ranging from e-commerce to educational platforms. What I
                  specialize in is crafting user-friendly, responsive interfaces
                  that help businesses connect with their audience.
                </P18>
              )}
            </div>
            <img
              src={addicon}
              alt="addition icon"
              onClick={() => {
                dropDownHandler("stackq");
              }}
              className={stackq ? `${style.active_dropdown}` : ""}
            />
          </li>
          <li style={{ backgroundColor: `${portfolioq ? "#d3812f" : ""}` }}>
            <div>
              <H3>How do I navigate through your portfolio?</H3>
              {portfolioq && (
                <P18>
                  I don't limit myself to one industry — I've worked on projects
                  ranging from e-commerce to educational platforms. What I
                  specialize in is crafting user-friendly, responsive interfaces
                  that help businesses connect with their audience.
                </P18>
              )}
            </div>
            <img
              src={addicon}
              alt="addition icon"
              onClick={() => {
                dropDownHandler("portfolioq");
              }}
              className={portfolioq ? `${style.active_dropdown}` : ""}
            />
          </li>
          <li style={{ backgroundColor: `${cvq ? "#d3812f" : ""}` }}>
            <div>
              <H3>Can I download your CV?</H3>
              {cvq && (
                <P18>
                  I don't limit myself to one industry — I've worked on projects
                  ranging from e-commerce to educational platforms. What I
                  specialize in is crafting user-friendly, responsive interfaces
                  that help businesses connect with their audience.
                </P18>
              )}
            </div>
            <img
              src={addicon}
              alt="addition icon"
              onClick={() => {
                dropDownHandler("cvq");
              }}
              className={cvq ? `${style.active_dropdown}` : ""}
            />
          </li>
        </ul>
        <figure className={style.faqs_card}>
          <div className={style.faqs_card_top}>
            <img src={messageicon} alt="message icon" />
            <P16B>You have different question? Ask already!</P16B>
            <br />
            <P16>Your Questions, My answers and very quick response time</P16>
            <a
              href="https://wa.me/2349016382289"
              className={style.faqs_card_btn}
            >
              <P16B>Contact Us</P16B>
            </a>
          </div>
          <div className={style.faqs_card_bottom}></div>
        </figure>
      </main>
    </section>
  );
}

export default Faqs;
