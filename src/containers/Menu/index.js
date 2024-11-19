/* eslint-disable no-return-assign */
// aout du h1 car inexistant sur le site
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => (
  <nav>
    <h1>
      <Logo />
    </h1>
    <ul>
      <li>
        <a href="#nos-services">Nos services</a>
      </li>
      <li>
        <a href="#nos-realisations">Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe">Notre équipe</a>
      </li>
    </ul>
    <Button
      title="contact"
      onClick={() => (window.document.location.hash = "#contact")}
    >
      Contact
    </Button>
  </nav>
);

export default Menu;
