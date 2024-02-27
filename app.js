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
    <div>
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
      <Body />
    </div>
  );
};

const RestorentCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "coral" }}>
      <img
        className="res-logo"
        src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
      ></img>
      <h3>Megana food</h3>
      <h4>Biryani</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return <div className="app"></div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
