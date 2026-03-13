import style from "./Contact.module.css";
import { P18B } from "../../utilities/P18";
import H2B from "../../utilities/H2B";
import P16, { P16B } from "../../utilities/P16";
import twittericon from "../../assets/svg/twittericon.svg";
import fbicon from "../../assets/svg/fbicon.svg";
import instaicon from "../../assets/svg/instaicon.svg";
import linkedinicon from "../../assets/svg/linkedinicon.svg";

function Contact() {
  return (
    <section className={style.contact} id="contact_me">
      <header>
        <P18B>Contact me</P18B>
        <span className={style.line}></span>
        <H2B>
          Let's talk about your <span>next project</span>
        </H2B>
      </header>
      <div className={style.contact_cont}>
        <form>
          <div>
            <label htmlFor="name">
              <P16B>Name*</P16B>
            </label>
            <br />

            <input
              placeholder="John Doe"
              id="name"
              name="name"
              autoComplete="name"
              type="text"
            />
          </div>

          <div>
            <label htmlFor="email">
              <P16B>Email*</P16B>
            </label>
            <br />

            <input
              placeholder="example@gmail.com"
              id="email"
              name="email"
              type="text"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="phone">
              <P16B>Phone*</P16B>
            </label>
            <br />

            <input
              placeholder="Enter phone number"
              id="phone"
              name="phone"
              autoComplete="phone"
              type="number"
            />
          </div>
          <div>
            <label htmlFor="country">
              <P16B>Country</P16B>
            </label>
            <br />

            <input
              placeholder="Enter country name"
              id="country"
              name="country"
              autoComplete="country"
              type="text"
            />
          </div>
          <div className={style.contact_message_cont}>
            <label htmlFor="message">
              <P16B>Message*</P16B>
            </label>
            <br />

            <textarea
              placeholder="Enter text"
              id="message"
              name="message"
              autoComplete="message"
              type="text"
            />
          </div>
          <button type="submit">
            <P16B>Send Message</P16B>
          </button>
        </form>
        <figure className={style.contact_card}>
          <div className={style.contact_card_text_cont}>
            <div>
              <P18B classname={style.contact_card_info}>Contact</P18B>
              <a
                href="https://wa.me/2349016382289"
                className={style.contact_card_info_link}
              >
                <P16>+234 901 6382 289</P16>
              </a>
              <a
                href="mailto:yourname@example.com"
                className={style.contact_card_info_link}
              >
                <P16>elechiandrewchigaemezu@gmail.com</P16>
              </a>
            </div>

            <div className={style.contact_card_info_cont}>
              <P18B classname={style.contact_card_info}>Time</P18B>
              <P16>Monday - Friday: 8:00 - 20.00</P16>
              {/* <P16>elechiandrewchigaemezu@gmail.com</P16> */}
            </div>
          </div>
          <div className={style.contact_card_social_cont}>
            <P16B>Stay Connected</P16B>
            <div>
              <img src={twittericon} alt="twitter icon" />
              <img src={linkedinicon} alt="linkedin icon" />
              <img src={fbicon} alt="facebook icon" />
              <img src={instaicon} alt="instagram icon" />
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Contact;
