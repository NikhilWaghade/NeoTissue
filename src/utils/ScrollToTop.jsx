import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis();
    lenis.scrollTo(0, { immediate: true }); // force scroll to top
    return () => lenis.destroy();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
