import "./MainPage.scss";

import React from "react";

import img from "../../img/sad.jpg";

export default function MainPage() {
  return (
    <div className="main_page">
      <h1>Вы ничего не выбрали =(</h1>
      <img src={img} alt="sad" />
    </div>
  );
}
