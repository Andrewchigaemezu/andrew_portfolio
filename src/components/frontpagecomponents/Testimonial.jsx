import style from "./Testimonial.module.css";
import H2B from "../../utilities/H2B";
import P16 from "../../utilities/P16";
import P18, { P18B } from "../../utilities/P18";
import ratedstar from "../../assets/svg/ratedstar.svg";
import unratedstar from "../../assets/svg/unratedstar.svg";
import quote from "../../assets/svg/quote.svg";

function Testimonial() {
  return (
    <section className={style.testimonial}>
      <header>
        <P18B>My Testimonial</P18B>
        <span className={style.line}></span>
        <H2B>
          What clients say <span>about me</span>{" "}
        </H2B>
      </header>
      <div className={style.testimonial_card_cont}>
        <figure className={style.testimonial_card}>
          <div className={style.testimonial_card_head}>
            <div
              className={style.testimonial_card_img_cont}
              style={{ backgroundImage: "url(/img/headshot2.png)" }}
            ></div>
            <div>
              <P18B>Keneth Alozie</P18B>
              <P16>CEO CodeMek</P16>
              <div className={style.testimonial_card_icons}>
                <img src={ratedstar} alt="star" />
                <img src={ratedstar} alt="star" />
                <img src={ratedstar} alt="star" />
                <img src={ratedstar} alt="star" />
                <img src={unratedstar} alt="star" />
              </div>
            </div>
            <img
              src={quote}
              alt="quotation mark icon"
              className={style.quoteicon}
            />
          </div>
          <P18>
            Working with Andrew was a game-changer — clean code, stunning
            design, and delivered on time!{" "}
          </P18>
        </figure>
        <figure className={style.testimonial_card}>
          <div className={style.testimonial_card_head}>
            <div
              className={style.testimonial_card_img_cont}
              style={{ backgroundImage: "url(/img/headshot1.png)" }}
            ></div>
            <div>
              <P18B>Raechel Mba</P18B>
              <P16>Founder Raichielle</P16>
              <div className={style.testimonial_card_icons}>
                <img src={ratedstar} alt="star" />
                <img src={ratedstar} alt="star" />
                <img src={ratedstar} alt="star" />
                <img src={ratedstar} alt="star" />
                <img src={ratedstar} alt="star" />
              </div>
            </div>
            <img
              src={quote}
              alt="quotation mark icon"
              className={style.quoteicon}
            />
          </div>
          <P18>
            Professional, creative, and detail-oriented. Highly recommend for
            any web project.
          </P18>
        </figure>
      </div>
    </section>
  );
}

export default Testimonial;
