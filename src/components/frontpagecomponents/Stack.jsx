import style from "./Stack.module.css";
import H2B from "../../utilities/H2B";
import { H3B } from "../../utilities/H3";
import P16 from "../../utilities/P16";
import { P18B } from "../../utilities/P18";
import htmlimg from "../../assets/img/htmlimg.png";
import cssimg from "../../assets/img/cssimg.png";
import figmaimg from "../../assets/img/figmaimg.png";
import jsimg from "../../assets/img/jsimg.png";
import reactimg from "../../assets/img/reactimg.png";
import tailwindimg from "../../assets/img/tailwindimg.png";

function Stack() {
  return (
    <section className={style.stack}>
      <P18B>My Stack</P18B>
      <span className={style.line}></span>
      <H2B>
        Technologies that <span>power my work</span>
      </H2B>
      <div className={style.stack_container}>
        <ul>
          <li>
            <div>
              <img src={htmlimg} alt="html image" />
              <H3B>99%</H3B>
            </div>
            <P16>HTML 5</P16>
          </li>
          <li>
            <div>
              <img src={cssimg} alt="css image" />
              <H3B>99%</H3B>
            </div>
            <P16>CSS 3</P16>
          </li>
          <li>
            <div>
              <img src={tailwindimg} alt="tailwind image" />
              <H3B>95%</H3B>
            </div>
            <P16>Tailwind CSS</P16>
          </li>
          <li>
            <div>
              <img src={figmaimg} alt="figma image" />
              <H3B>85%</H3B>
            </div>
            <P16>Figma</P16>
          </li>
          <li>
            <div>
              <img src={jsimg} alt="javascript image" />
              <H3B>95%</H3B>
            </div>
            <P16>JavaScript</P16>
          </li>
          <li>
            <div>
              <img src={reactimg} alt="react.js image" />
              <H3B>95%</H3B>
            </div>
            <P16>React.js</P16>
          </li>
          {/* </ul> */}
          {/* <ul> */}
          <li>
            <div>
              <img src={htmlimg} alt="html image" />
              <H3B>99%</H3B>
            </div>
            <P16>HTML 5</P16>
          </li>
          <li>
            <div>
              <img src={cssimg} alt="css image" />
              <H3B>99%</H3B>
            </div>
            <P16>CSS 3</P16>
          </li>
          <li>
            <div>
              <img src={tailwindimg} alt="tailwind image" />
              <H3B>95%</H3B>
            </div>
            <P16>Tailwind CSS</P16>
          </li>
          <li>
            <div>
              <img src={figmaimg} alt="figma image" />
              <H3B>85%</H3B>
            </div>
            <P16>Figma</P16>
          </li>
          <li>
            <div>
              <img src={jsimg} alt="javascript image" />
              <H3B>95%</H3B>
            </div>
            <P16>JavaScript</P16>
          </li>
          <li>
            <div>
              <img src={reactimg} alt="react.js image" />
              <H3B>95%</H3B>
            </div>
            <P16>React.js</P16>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Stack;
