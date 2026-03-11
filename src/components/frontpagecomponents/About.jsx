import style from "./About.module.css";
import H2B, { H2L } from "../../utilities/H2B";
import P18, { P18B } from "../../utilities/P18";
import aboutimg from "../../assets/img/aboutimg.png";
import P16 from "../../utilities/P16";
import phoneicon from "../../assets/svg/phoneicon.svg";
import mailicon from "../../assets/svg/mailicon.svg";
import eclipes from "../../assets/svg/eclipes.svg";

function About() {
  return (
    <section className={style.about}>
      <div className={style.about_cont}>
        <div className={style.about_text_cont}>
          <div>
            <P18B>About me</P18B>
            <span className={style.line}></span>
            <H2B classname={style.about_header}>
              <span>Who is</span> Andrew Chigaemezu
            </H2B>
            <P18>
              I'm a frontend developer my goal is to build scalable, modern web
              applications that deliver seamless user experiences while
              constantly learning and pushing the boundaries of frontend
              development.
            </P18>
          </div>
          <div className={style.about_img_cont_mobile}>
            <img src={aboutimg} />
            <div className={style.about_img_eclipes}>
              <img src={eclipes} alt="eclipes icon" />
              <P16>Professional Web Developer</P16>
            </div>
          </div>

          <div className={style.achievement_cont}>
            <div>
              <H2L>20+</H2L>
              <P16>Projects Completed</P16>
            </div>
            <div>
              <H2L>5+</H2L>
              <P16>Businesses Helped</P16>
            </div>
            <div>
              <H2L>3+</H2L>
              <P16>Years Experience</P16>
            </div>
            <div>
              <img src={phoneicon} alt="phone icon" />
              <P16>+234 901 638 2289</P16>
            </div>
            <div>
              <img src={mailicon} alt="mail icon" />
              <P16>elechiandrewchigaemezu@gmail.com</P16>
            </div>
          </div>
        </div>
        <div className={style.about_img_cont}>
          <img src={aboutimg} />
          <div className={style.about_img_eclipes}>
            <img src={eclipes} alt="eclipes icon" />
            <P16>Professional Web Developer</P16>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
