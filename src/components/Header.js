import NavLinks from "./NavLinks";
import logo from "../images/me.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" alt="Abdu" />
      <NavLinks />
    </header>
  );
};

export default Header;
