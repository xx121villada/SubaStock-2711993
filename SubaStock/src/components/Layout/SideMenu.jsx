import options from "./constants/HeaderOptions";
import { Link } from "react-router-dom";

const SideMenu = ({ onOptionClick }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ul
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        {options.map((option, index) => {
          return (
            <li
              key={index}
              style={{
                listStyle: "none",
              }}
            >
              <Link
                onClick={() => {
                  if (onOptionClick && typeof onOptionClick === "function")
                    onOptionClick();
                }}
                to={option.linksTo}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "15px 30px",
                  color: "var(--text-color)",
                  textDecoration: "none",
                  fontSize: "1.3rem",
                  gap: 15,
                  borderBottom: "0.1px solid #00000050",
                }}
              >
                {option.icon({
                  width: 34,
                  height: 34,
                  fill: "var(--primary-color)",
                })}
                <span>{option.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
