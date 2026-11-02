import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our sectors", href: "#sectors" },
  { label: "Global opportunities", href: "#opportunities" },
  { label: "For candidates", href: "#candidates" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header luxury-header">
      <div className="luxury-header-inner">
        <a
          className="luxury-wordmark"
          href="#home"
          aria-label="Amentis 7 Global Recruitment home"
          onClick={closeMenu}
        >
          <img src={Logo} alt="Amentis 7 Global Recruitment" />
          <span className="luxury-wordmark-copy">
            <span className="luxury-wordmark-name">Amentis <em>7</em></span>
            <span className="luxury-wordmark-descriptor">GLOBAL RECRUITMENT</span>
          </span>
        </a>

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
            <a href={item.href} key={item.href} onClick={closeMenu}>
              <span className="luxury-nav-index">0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a className="luxury-nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} strokeWidth={1.7} />
          </a>
        </nav>
      </div>
      <div className="luxury-header-rule" aria-hidden="true">
        <span />
      </div>
      <a className="luxury-header-scroll" href="#about" aria-label="Scroll to about">
        <ArrowDownRight size={15} />
      </a>
    </header>
  );
}

export default Header;
