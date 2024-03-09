import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./conponets/Header";

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

const AppLayout = () => {
  return <div className="app"></div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
