import { Link, NavLink } from "react-router";
import "./Nav.css";
import { ChevronDown, Heart, Search, ShoppingBag, ShoppingCart, Truck, UserRound } from "lucide-react";

export function Nav() {

    const links = [
    {
        label: "Home",
        // active: true,
        path: "/"
    },
    {
        label: "Shop",
        path: "/shop"
    },
    {
        label: "Categories", dropdown: true,
        path: "/categories"
    },
    {
        label: "About us",
        path: "/about"
    },
    {
        label: "Contact",
        path: "/contact"
    }
]

    return (
        <>
        <header className="store-header">
            <div className="announcement-bar">
                <Truck size={15} strokeWidth={1.8} />
                <span>Free shipping on orders over $100!</span>
            </div>


            <nav className="store-nav" arial-label="Main Navigation">
                <div className="nav-container">
                    {/* Logo */}
                    <Link
                    to="/"
                     className="nav-brand">
                        <div className="brand-icon">
                            <ShoppingBag size={23} strokeWidth={2.2} />
                        </div>
                        <span className="brand-name">
                            Store<span>Shop.</span>
                        </span>
                    </Link>


                    {/* Desktop Links */}

                    <div className="nav-links">
                        {links.map((link) => (
                            <NavLink
                            key={link.label}
                            to={link.path}
                            end={link.path === "/"}
                            className= {`nav-link ${link.active ? "active" : ""}`}
                            >
                                {link.label}
                                {link.dropdown && (
                                    <ChevronDown size={15} />
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* actions */}

                    <div className="nav-actions">
                        <span className="nav-action search-action">
                            <Search size={21} strokeWidth={1.8} />
                        </span>

                        <span className="nav-action wishlist-action">
                            <Heart size={21} strokeWidth={1.8} />
                        </span>


                        <span className="nav-action cart-action">
                            <ShoppingCart size={21} strokeWidth={1.8} />
                            <span className="cart-count">3</span>
                        </span>

                        <span className="nav-profile">
                            <UserRound size={20} strokeWidth={1.8} />
                        </span>

                    </div>
                </div>
            </nav>
        </header>
        </>
    )

}