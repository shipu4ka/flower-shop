import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul className="header-list">
          <li>
            <Link to="catalog">Каталог</Link>
          </li>
          <li>
            <Link to="advices">Советы</Link>
          </li>
          <li>
            <Link to="gallery">Галерея</Link>
          </li>
          <li>
            <Link to="about-us">О компании</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
