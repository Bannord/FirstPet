import "./Header.scss";

import { Link } from "react-router-dom";

import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header">
        <ul className="header_row">
          <li className="header_item">
            <Link to="/calc">Calc</Link>
          </li>
          <li className="header_item">
            <Link to="post">ToDoApp</Link>
          </li>
          <li className="header_item">SPA</li>
          <li className="header_item">COUNTER</li>
        </ul>
      </header>
    </div>
  );
}
