import { Link } from " react-router-dom";
import logo from "../logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="navGlobal">
      <img className="navLogo" src={logo} alt="logo du site" />
      <ul className="navUl">
        <li className="navLi">
          <Link to="/">Home</Link>
        </li>
        <li className="navLi">
          <Link to="/characters">Characters</Link>
        </li>
        <li className="navLi">
          <Link to="/spells">Spells</Link>
        </li>
        <li className="navLi">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <h2> Karukera: l'ile aux belles eaux</h2>
    </div>
  );
};
export default Header;
