import "./Header.scss";

import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header">
        <ul className="header_row">
          <li className="header_item">Calc</li>
          <li className="header_item">ToDoApp</li>
          <li className="header_item">SPA</li>
          <li className="header_item">COUNTER</li>
        </ul>
      </header>
    </div>
  );
}
