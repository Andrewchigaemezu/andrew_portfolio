import style from "./Experience.module.css";
import H2B from "../../utilities/H2B";
import { H3B } from "../../utilities/H3";
import P16 from "../../utilities/P16";
import { P18B } from "../../utilities/P18";
import educationsvg from "../../assets/svg/educationsvg.svg";
import worksvg from "../../assets/svg/worksvg.svg";

function Experience() {
  return (
    <section className={style.experience} id="education">
      <div className={style.experience_text_cont}>
        <P18B>Education and Work</P18B>
        <span className={style.line}></span>
        <H2B>
          My Education & <span>Work Experience</span>
        </H2B>
      </div>
      <div className={style.experience_cont}>
        <ul>
          <li>
            <img src={educationsvg} alt="educatioon icon" />{" "}
            <H3B>Education</H3B>
          </li>
          <li>
            <div>
              <P18B>St. Peter Sec School</P18B>
              <P16>SSCE</P16>
            </div>
            <P16 classname={style.experience_year}>2013 - 2019</P16>
          </li>
          <li>
            <div>
              <P18B>Ebonyi State University</P18B>
              <P16>BSc Accountancy</P16>
            </div>
            <P16 classname={style.experience_year}>2019 - 2023</P16>
          </li>
          <li>
            <div>
              <P18B>Digital Dreams Academy</P18B>
              <P16>Frontend Web Development</P16>
            </div>
            <P16 classname={style.experience_year}>2023 - 2024</P16>
          </li>
        </ul>
        <ul>
          <li>
            <img src={worksvg} alt="work icon" /> <H3B>Work Experience</H3B>
          </li>
          <li>
            <div>
              <P18B>Varsity Smart Systems</P18B>
              <P16>Frontend Web Developer</P16>
            </div>
            <P16 classname={style.experience_year}>2024 - 2026</P16>
          </li>
          <li>
            <div>
              <P18B>Self Employed</P18B>
              <P16>Upwork</P16>
            </div>
            <P16 classname={style.experience_year}>2025 - 2026</P16>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
