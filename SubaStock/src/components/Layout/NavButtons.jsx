import "./NavButtons.css";
import { NavLink } from "react-router-dom";
import options from "./constants/HeaderOptions";

const NavButtons = () => {
  const iconSize = 16;

  return (
    <ul className="nav nav-underline d-flex gap-3" id="nav-options">
      {options.map((option, index) => (
        <li className="nav-item" key={index}>
          <NavLink className="nav-link" to={option.linksTo}>
            <div className="d-flex gap-1 align-items-center">
              {option.icon({ width: iconSize, height: iconSize })}
              <span>{option.name}</span>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavButtons;
