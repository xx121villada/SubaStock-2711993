import { Outlet } from "react-router-dom";
import Buscador from "./Buscador";
import NavButtons from "./NavButtons";
import "./Layout.css";

const Layout = () => {
  return (
    <div id="main-layout">
      <header
        className="d-flex justify-content-center align-items-center justify-content-md-around py-3 mt-md-0 p-md-2 position-fixed top-0 z-2 w-100"
        style={{
          backgroundColor: "var(--bg-color)",
          height: "var(--header-height)",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        }}
      >
        <img
          className="my-auto"
          style={{ width: 190, height: "auto" }}
          src="/subastock_logo.webp"
        />
        <Buscador />
        <div id="botones-auth" className="d-none d-lg-flex gap-3 flex-nowrap">
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
