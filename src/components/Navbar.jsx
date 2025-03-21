import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  const navItems = useMemo(
    () => [
      { path: "/", img: "/assets/images/home.png", alt: "Home" },
      { path: "/poems", img: "/assets/images/poem.png", alt: "Poems" },
      { path: "/letter", img: "/assets/images/letter.png", alt: "Letters" },
      { path: "/songs", img: "/assets/images/song.png", alt: "Songs" },
      { path: "/verses", img: "/assets/images/bible.png", alt: "Verses" },
      { path: "/clock", img: "/assets/images/clock.png", alt: "Clock" },
    ],
    []
  );

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item, index) => (
          <li key={index} className="navbar-item">
            <NavLink to={item.path} className="navbar-link">
              <img src={item.img} alt={item.alt} className="navbar-image" />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;