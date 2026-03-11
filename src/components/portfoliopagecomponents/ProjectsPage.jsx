import style from "./ProjectsPage.module.css";
import Footer from "../frontpagecomponents/Footer";
import Contact from "../frontpagecomponents/Contact";
import Servicebox from "../frontpagecomponents/Servicebox";
import Portfolio from "../frontpagecomponents/Portfolio";
import PortfolioHero from "./PortfolioHero";
import PortfolioContent from "./PortfolioContent";

function ProjectsPage() {
  return (
    <main className={style.projects}>
      <PortfolioHero />
      <PortfolioContent />
      <Contact></Contact>
      <Servicebox></Servicebox>
      <Footer></Footer>
    </main>
  );
}

export default ProjectsPage;
