import { P18B } from "../../utilities/P18";
import P18 from "../../utilities/P18";
import { H3B } from "../../utilities/H3";
import addicon from "../../assets/svg/addicon.svg";
import { useState } from "react";

function ServiceList({ props }) {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  return (
    <li onClick={() => setDropDownIsOpen(() => !dropDownIsOpen)}>
      <P18B>{props.num}</P18B>
      <H3B>{props.title}</H3B>
      <img src={addicon} alt="additon icon" />
      {dropDownIsOpen && <P18>{props.desc}</P18>}
    </li>
  );
}

export default ServiceList;
