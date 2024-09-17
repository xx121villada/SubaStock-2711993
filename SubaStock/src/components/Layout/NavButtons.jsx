import "./NavButtons.css";
import { NavLink } from "react-router-dom";
import { CowIcon, UserIcon, MoneyIcon, AuctionIcon } from "./icons";

const NavButtons = () => {
  const iconSize = 16;

  return (
    <ul className="nav nav-underline d-flex gap-3" id="nav-options">
      <li className="nav-item ">
        <NavLink className="nav-link" to="/">
          <div className="d-flex gap-1 align-items-center">
            {AuctionIcon({ width: iconSize, height: iconSize })}
            <span>Subastas</span>
          </div>
        </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/subastar">
          <div className="d-flex gap-1 align-items-center">
            {MoneyIcon({ width: iconSize, height: iconSize })}
            <span>Subastar</span>
          </div>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/ver-animales">
          <div className="d-flex gap-1 align-items-center">
            {CowIcon({ width: iconSize, height: iconSize })}
            <span>Mis Animales</span>
          </div>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          <div className="d-flex gap-1 align-items-center">
            {UserIcon({ width: iconSize, height: iconSize })}
            <span>Iniciar</span>
          </div>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavButtons;
