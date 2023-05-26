import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [header, setHeader] = useState("");
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
    <div className={`Navbar ${header}`}>
      <div className="navTop">
        <div className="contact">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook-square"></i>
        </div>
        <div>
          <Link to="/">
            <h1 className="alt-font">SHAIL'S SOJOURN <span>The Homestay</span> </h1>
          </Link>
        </div>
        <div className="contact">
          <a href="tel:+916387400753"><i className="fas fa-phone-alt"> </i></a>
          <a href="mailto:shailsojourn@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      <div className="navBottom">
        <Link to="/room">
          Rooms <span>&#183;</span>
        </Link>
        <Link to="/about">About <span>&#183;</span></Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
