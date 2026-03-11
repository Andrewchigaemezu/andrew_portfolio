import style from "./Services.module.css";
import H2B from "../../utilities/H2B";
import { H3B } from "../../utilities/H3";
import P18, { P18B } from "../../utilities/P18";
import ServiceList from "./ServiceList";
const SERVICES = [
  {
    num: "01",
    title: "Website Development",
    id: 1,
    desc: "I build responsive, user‑friendly websites that combine clean design with efficient functionality. From simple landing pages to complex web applications, I focus on creating digital experiences that are fast, scalable, and tailored to your goals.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    id: 2,
    desc: "I craft intuitive interfaces and seamless user experiences that make digital products easy to navigate and enjoyable to use. My focus is on blending aesthetics with functionality, ensuring every design decision enhances usability and engages your audience.",
  },
  {
    num: "03",
    title: "Website Re-design",
    id: 3,
    desc: "I transform outdated websites into modern, engaging platforms that reflect your brand’s identity and meet today’s performance standards. By improving design, functionality, and user experience, I help breathe new life into your online presence.",
  },
  {
    num: "04",
    title: "Website Revamping",
    id: 4,
    desc: "I give existing websites a fresh boost by enhancing design, performance, and usability. Whether it’s updating visuals, optimizing speed, or improving navigation, my goal is to make your site more modern, engaging, and effective without starting from scratch.",
  },
  {
    num: "05",
    title: "Front-End Consultation",
    id: 5,
    desc: "I provide expert guidance on building clean, efficient, and scalable front‑end architectures. From choosing the right frameworks to optimizing performance and accessibility, I help teams and individuals make informed decisions that elevate their web projects.",
  },
];

function Services() {
  return (
    <section className={style.services}>
      <P18B>My Specialization</P18B>
      <span className={style.line}></span>
      <H2B classname={style.service_header}>
        Services I <span>Provide</span>{" "}
      </H2B>
      <ul className={style.service_list_cont}>
        {SERVICES.map((service) => (
          <ServiceList key={service.id} props={service} />
        ))}
      </ul>
    </section>
  );
}

export default Services;
