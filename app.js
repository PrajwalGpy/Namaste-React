import React from "react";
import ReactDOM from "react-dom/client";

/**
 * header
 * -->logo
 * -->nav bar
 * ------> home , about , cart
 * body
 * --> div
 * -------> restorent
 * footer
 * -->contact,adddres,links,copyright
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/82/be/d4/82bed479344270067e3d2171379949b3.png"
        ></img>
      </div>
      <div className="nav-iteams">
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return <div className="app"></div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
