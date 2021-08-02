import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import NavbarData from "./NavbarData";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar m-2">
        <FaBars className="fixed left-4" onClick={showSidebar} />

        <Link to="/">
          <img className="w-40" src="images/Logo.png" alt="MOIDA" />
        </Link>
      </div>

      <nav className={sidebar ? "nav-menu active border-r-2" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars"></Link>
            <FaTimes onClick={showSidebar} className="ml-48" />
          </li>

          <Link to="/profile" onClick={showSidebar}>
            <div className="m-8 bg-green-300 w-1/2 h-32 rounded-full"></div>
          </Link>

          <p className="ml-8">소석진님</p>
          <div className="border w-3/4 m-8"></div>

          {NavbarData.map((item, idx) => {
            return (
              <li key={idx} className={item.cName} onClick={showSidebar}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
