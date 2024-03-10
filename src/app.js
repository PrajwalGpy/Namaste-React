import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./conponets/Header";

const AppLayout = () => {
  return <div className="app"></div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
