import React from "react";
import ReactDOM from "react-dom/client";

const JsxGoo = (
  <h1 id="h1" className="goo">
    Namste React 👨‍🍳
  </h1>
);

const Name = () => <h1 className="goo">what is your name </h1>;

const Name1 = () => (
  <div>
    <h1 className="goo">what is your name prajwal gp </h1>
    {JsxGoo}
    <Name />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Name1 />);
