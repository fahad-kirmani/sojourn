import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const [header, setHeader] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("");
    } else if (window.scrollY > 70) {
      return setHeader("alt-color");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div className={`NavMobile ${header} ${showMenu ? "menu-active" : ""}`}>
      <div className="menu-top">
        <div className="hamburger-menu">
          <i
            onClick={() => setShowMenu(!showMenu)}
            className={`fas ${showMenu ? "fa-times" : "fa-bars"}`}
          ></i>
        </div>
        <div className="brand">
          <Link to="/" onClick={() => setShowMenu(false)}>
            <h1 className="alt-font">Shail's Sojourn <span>The Homestay</span> </h1>
          </Link>
        </div>
      </div>
      <div className={`menu-bottom ${showMenu && "show-menu"}`}>
        <ul>
          <li>
            <div className="contact">
              <a href="tel:+916387400753"><i className="fas fa-phone-alt"> </i></a>
              <a href="mailto:shailsojourn@gmail.com"><i className="fas fa-envelope"></i></a>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook-square"></i>
            </div>
          </li>
          <li>
            <Link onClick={() => setShowMenu(false)} to="/room">
              Rooms
            </Link>
            <i className="fas fa-chevron-right"></i>
          </li> 
          <li>
            <Link onClick={() => setShowMenu(false)} to="/about">
              About
            </Link>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li>
            <Link onClick={() => setShowMenu(false)} to="/contact">
              Contact
            </Link>
            <i className="fas fa-chevron-right"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;
