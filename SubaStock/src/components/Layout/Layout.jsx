import { Outlet, Link } from "react-router-dom";
import Buscador from "./Buscador";
import NavButtons from "./NavButtons";
import "./Layout.css";

const Layout = () => {
  return (
    <div id="main-layout">
      <header
        className="d-flex justify-content-around align-items-center py-3 position-fixed top-0 z-2 w-100"
        style={{
          backgroundColor: "var(--bg-color)",
          height: "var(--header-height)",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
        }}
      >
        <Link to="/">
          <picture>
            <source
              srcSet="/subastock_logo.webp"
              type="image/webp"
              media="(min-width: 576px)"
            />
            <source
              srcSet="/subastock_logo_crop.webp"
              type="image/webp"
              media="(max-width: 575.99px)"
            />
            <img
              style={{ width: "auto", height: 38 }}
              src="/subastock_logo.png"
            />
          </picture>
        </Link>

        <Buscador />
        <div id="botones-nav" className="d-none d-lg-flex gap-3 flex-nowrap">
          <NavButtons />
        </div>
      </header>
      <div id="main-app">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
