import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Globe2, Menu, MoveUpRight, X } from "lucide-react";
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
  const menuButtonRef = useRef(null);
  const navRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const mobileViewport = window.matchMedia("(max-width: 700px)");
    if (mobileViewport.matches) {
      document.body.style.overflow = "hidden";
      navRef.current?.querySelector("a")?.focus();
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const closeOnDesktopResize = () => {
      if (!mobileViewport.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", closeOnDesktopResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", closeOnDesktopResize);
    };
  }, [menuOpen]);

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
          ref={menuButtonRef}
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
          ref={navRef}
          className={`luxury-nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <div className="luxury-mobile-nav-heading">
            <span><Globe2 size={14} /> EXPLORE AMENTIS 7</span>
            <p>Find your next step.<br /><em>Make it matter.</em></p>
          </div>
          {navigation.map((item, index) => (
            <Link
              to={item.href}
              key={item.href}
              onClick={closeMenu}
              style={{ "--nav-index": index }}
            >
              <span className="luxury-nav-index">0{index + 1}</span>
              <span className="luxury-nav-label">{item.label}</span>
              <MoveUpRight className="luxury-nav-arrow" size={17} aria-hidden="true" />
            </Link>
          ))}
          <div className="luxury-mobile-nav-bottom">
            <span>READY FOR A CONVERSATION?</span>
            <Link className="luxury-nav-cta" to="/contact" onClick={closeMenu}>
              Let&apos;s talk <ArrowUpRight size={16} strokeWidth={1.7} />
            </Link>
            <p>Connecting talent. Creating futures.</p>
          </div>
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
