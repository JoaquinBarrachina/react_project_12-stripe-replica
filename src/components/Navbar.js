import React from "react";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import sublinks from "../data";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySm = (e) => {
    const page = e.target.textContent;
    const btn = e.target.getBoundingClientRect();
    console.log(btn);
    const center = (btn.left + btn.right) / 2; //x coordinate to position submenu
    const bottom = btn.bottom; //y coordinate to position submenu
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <>
      <nav className="nav" onMouseOver={handleSubmenu}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="Site logo" className="nav-logo" />
            <button className="btn toggle-btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {sublinks.map((link, index) => {
              return (
                <li key={index}>
                  <button
                    className="link-btn"
                    onMouseOver={displaySm}
                    // onMouseOut={hideSm}
                  >
                    {link.page}
                  </button>
                </li>
              );
            })}
          </ul>
          <button className="btn signin-btn">Sign in</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
