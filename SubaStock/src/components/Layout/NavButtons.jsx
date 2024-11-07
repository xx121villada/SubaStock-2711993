import "./NavButtons.css";
import { NavLink } from "react-router-dom";
import useOptions from "./hooks/useOptions";
import useAuth from "../../contexts/AuthContext";

const NavButtons = () => {
  const iconSize = 16;
  const options = useOptions();
  const { logout } = useAuth();

  return (
    <ul className="nav nav-underline d-flex gap-3" id="nav-options">
      {options.map((option, index) =>
        option.linksTo ? (
          <li className="nav-item" key={option.name}>
            <NavLink className="nav-link" to={option.linksTo}>
              <div className="d-flex gap-1 align-items-center">
                {option.icon({
                  width: iconSize,
                  height: iconSize,
                  fill: "var(--primary-color)",
                })}
                <span>{option.name}</span>
              </div>
            </NavLink>
          </li>
        ) : (
          <li className="nav-item" key={option.name}>
            <div
              className="nav-link"
              onClick={logout}
              style={{ cursor: "pointer", color: "var(--primary-color)" }}
            >
              <div className="d-flex gap-1 align-items-center">
                {option.icon({
                  width: iconSize,
                  height: iconSize,
                  fill: "var(--primary-color)",
                })}
                <span style={{ color: "#000000" }}>{option.name}</span>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default NavButtons;
