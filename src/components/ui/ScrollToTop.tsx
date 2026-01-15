import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll tout en haut au changement de chemin (URL)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}