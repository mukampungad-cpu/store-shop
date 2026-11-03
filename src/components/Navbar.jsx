
import { NavLink } from "react-router-dom";

import {
  House,
  ShoppingBag,
  LayoutGrid,
  Info,
  Phone,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Store Shop</h2>

      <div className="nav-links">
        <NavLink to="/">
          <House size={18} />
          Home
        </NavLink>

        <NavLink to="/shop">
          <ShoppingBag size={18} />
          Shop
        </NavLink>

        <NavLink to="/categories">
          <LayoutGrid size={18} />
          Categories
        </NavLink>

        <NavLink to="/about">
          <Info size={18} />
          About
        </NavLink>

        <NavLink to="/contact">
          <Phone size={18} />
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
