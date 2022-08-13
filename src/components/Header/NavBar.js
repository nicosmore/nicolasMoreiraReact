import LogoGen from "../../Imagenes/LogoGeneric.png";
import CartWidget from "./CartWidget";
import "../../Styles/style.css";
import { Link, NavLink } from "react-router-dom";

const categories = [
  { name: "Bisagras", id: 0, route: "/Bisagras" },
  { name: "Correderas", id: 1, route: "/Correderas" },
  { name: "Tiradores", id: 2, route: "/Tiradores" },
];

const NavBar = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={LogoGen} alt="" />
        </Link>
        <Link to="/cart" className="pt-2">
          <CartWidget />
        </Link>
      </div>
      <div className="navContenedor">
        <nav className="navMenu fs-5 pb-2">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              className="navMenuText"
              to={category.route}
            >
              {category.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
