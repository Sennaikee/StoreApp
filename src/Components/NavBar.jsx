import logo from "../Store Images/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <img src={logo} alt="comfy sloth" className="logo"></img>
        <nav className="navigation-main">
          <p>
            {" "}
            <Link to="/">Home</Link>{" "}
          </p>
          <p>
            <Link to="/propa">Products</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
        </nav>
        <div className="nav-right">
          <button className="navigation-right" style={{ paddingRight: "20px" }}>
            Cart <i className="fa-solid fa-cart-shopping fa-xs"></i>
          </button>
          <button className="navigation-right">
            Login <i className="fa-solid fa-user-plus fa-xs"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
