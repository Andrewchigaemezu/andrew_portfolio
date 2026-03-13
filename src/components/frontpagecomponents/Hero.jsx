import style from "./Hero.module.css";
import P18, { P18B } from "../../utilities/P18";

import heroimg from "../../assets/img/heroimage.png";
import quoteicon from "../../assets/svg/quote.svg";
import circlearrowicon from "../../assets/svg/circlearrow.svg";
import sparkle from "../../assets/svg/sparkle.svg";
import instaicon from "../../assets/svg/instaicon.svg";
import fbicon from "../../assets/svg/fbicon.svg";
import linkedinicon from "../../assets/svg/linkedinicon.svg";
import twittericon from "../../assets/svg/twittericon.svg";

import H2B from "../../utilities/H2B";
import P16, { P16B } from "../../utilities/P16";
import P14 from "../../utilities/P14";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className={style.hero}>
      <main className={style.hero_main}>
        <div className={style.hero_top}>
          <P18B>Hello there!</P18B>
          <H2B>
            <span>I'm</span> Andrew Chigaemezu
          </H2B>
          <P16>A creative frontend web developer based in Nigeria</P16>
        </div>
        <div className={style.hero_left}>
          <img src={quoteicon} alt="quote icon" />
          <P18>
            Working with Andrew was a game-changer — clean code, stunning
            design, and delivered on time!{" "}
          </P18>
        </div>
        <div className={style.hero_center}>
          <img
            src={heroimg}
            alt="image of Andrew"
            className={style.hero_image}
          />
          <div className={style.hero_center_textbox}>
            <P16B>Building Tomorrow's Web Today.</P16B>
            <span></span>
            <P16>
              Modern, scalable and user-focused solutions for startups and
              creators
            </P16>
          </div>
          <div className={style.hero_circle}></div>
          <div className={style.hero_cta_cont}>
            <Link to="/portfolio" className={style.hero_portfolio_link}>
              <P18>Portfolio</P18>
              <img src={circlearrowicon} alt="circle arrow" />
            </Link>
            <a
              href="https://wa.me/2349016382289"
              className={style.hero_hire_link}
            >
              <P18B>Hire Me</P18B>
            </a>
          </div>
        </div>
        <div className={style.hero_right}>
          <div className={style.hero_right_text_cont}>
            <img src={sparkle} alt="sparkles" />
            <P16B>E-commerce Websites</P16B>
            <P16B>Landing Pages</P16B>
            <P16B>Portfolio Websites</P16B>
            <P16B>Business Websites</P16B>
            <P16B>Saas Products</P16B>
          </div>
          <div className={style.hero_right_icons_cont}>
            <P14>Connect with me on</P14>
            <div className={style.hero_right_icons}>
              <img src={twittericon} alt="twitter icon" />
              <img src={linkedinicon} alt="linkedin icon" />
              <img src={instaicon} alt="instagram icon" />
              <img src={fbicon} alt="facebook icon" />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Hero;
