import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import WhatsAppChannelToggle from "./WhatsAppChannelToggle";

const pageNames = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/sectors": "Our sectors",
  "/opportunities": "Global opportunities",
  "/contact": "Let’s talk",
};

function getPageName(pathname) {
  if (pageNames[pathname]) return pageNames[pathname];
  if (pathname.startsWith("/opportunities/")) {
    const country = pathname
      .split("/")
      .at(-1)
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
    return `Opportunities in ${country}`;
  }
  return "page";
}

function RouteLoader() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState("Preparing your experience");
  const currentPath = useRef(location.pathname);
  const initialTimer = useRef(null);
  const hideTimer = useRef(null);

  useEffect(() => {
    initialTimer.current = window.setTimeout(() => setIsVisible(false), 850);

    return () => {
      window.clearTimeout(initialTimer.current);
      window.clearTimeout(hideTimer.current);
    };
  }, []);

  useEffect(() => {
    if (currentPath.current === location.pathname) return;

    currentPath.current = location.pathname;
    window.scrollTo(0, 0);
    setMessage(`Opening ${getPageName(location.pathname)}`);
    setIsVisible(true);
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setIsVisible(false), 520);
  }, [location.pathname]);

  useEffect(() => {
    const handleNavigationClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target.closest("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        destination.pathname === location.pathname
      ) {
        return;
      }

      window.clearTimeout(initialTimer.current);
      setMessage(`Opening ${getPageName(destination.pathname)}`);
      setIsVisible(true);
      window.clearTimeout(hideTimer.current);
    };

    document.addEventListener("click", handleNavigationClick, true);
    return () => document.removeEventListener("click", handleNavigationClick, true);
  }, [location.pathname]);

  return (
    <>
      <Outlet />
      <WhatsAppChannelToggle />
      <div
        className={`route-loader${isVisible ? " is-visible" : ""}`}
        role="status"
        aria-live="polite"
        aria-hidden={!isVisible}
      >
        <div className="route-loader-content">
          <div className="route-loader-mark">
            <img src={Logo} alt="" />
          </div>
          <span className="route-loader-brand">AMENTIS <em>7</em></span>
          <span className="route-loader-descriptor">GLOBAL RECRUITMENT</span>
          <span className="route-loader-message">{message}</span>
          <span className="route-loader-progress"><span /></span>
        </div>
        <span className="route-loader-corner route-loader-corner-top">A7 · GLOBAL</span>
        <span className="route-loader-corner route-loader-corner-bottom">CONNECTING PEOPLE. CREATING FUTURES.</span>
      </div>
    </>
  );
}

export default RouteLoader;
