import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our sectors", href: "/sectors" },
  { label: "Global opportunities", href: "/opportunities" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header luxury-header">
      <div className="luxury-header-inner">
        <Link
          className="luxury-wordmark"
          to="/"
          aria-label="Amentis 7 Global Recruitment home"
          onClick={closeMenu}
        >
          <img src={Logo} alt="Amentis 7 Global Recruitment" />
          <span className="luxury-wordmark-copy">
            <span className="luxury-wordmark-name">Amentis <em>7</em></span>
            <span className="luxury-wordmark-descriptor">GLOBAL RECRUITMENT</span>
          </span>
        </Link>

        <button
          className="luxury-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          className={`luxury-nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item, index) => (
            <Link to={item.href} key={item.href} onClick={closeMenu}>
              <span className="luxury-nav-index">0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link className="luxury-nav-cta" to="/contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} strokeWidth={1.7} />
          </Link>
        </nav>
      </div>
      <div className="luxury-header-rule" aria-hidden="true">
        <span />
      </div>
      <Link className="luxury-header-scroll" to="/about" aria-label="Explore about Amentis 7">
        <ArrowDownRight size={15} />
      </Link>
    </header>
  );
}

export default Header;
