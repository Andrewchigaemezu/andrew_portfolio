import Hero from "./Hero";
import style from "./Frontpage.module.css";
import Servicebox from "./Servicebox";
import About from "./About";
import Services from "./Services";
import Stack from "./Stack";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import Faqs from "./Faqs";
import Footer from "./Footer";
function FrontPage() {
  return (
    <main className={style.container}>
      {/* <NavBar /> */}
      <Hero />
      <Servicebox />
      <About />
      <Services />
      <Stack />
      <Servicebox />
      <Experience />
      <Servicebox />
      <Portfolio />
      <Contact />
      <Testimonial />
      <Faqs />
      <Servicebox />
      <Footer />
    </main>
  );
}

export default FrontPage;
