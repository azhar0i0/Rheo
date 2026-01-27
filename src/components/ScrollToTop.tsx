import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the window to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // remove "smooth" if you want instant jump
    });
  }, [pathname]); // triggers on every route change

  return null;
};

export default ScrollToTop;
