import Body from "./Body";
import { LOGO_LINK } from "./util/constents";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_LINK}></img>
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
export default Header;
