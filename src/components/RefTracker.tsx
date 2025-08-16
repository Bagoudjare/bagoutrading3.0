import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const RefTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ref = params.get("ref");
    if (ref) {
      try {
        localStorage.setItem("affiliate:lastRef", ref);
        const key = `affiliate:clicks:${ref}`;
        const current = parseInt(localStorage.getItem(key) || "0", 10) || 0;
        localStorage.setItem(key, String(current + 1));
      } catch {}
    }
  }, [location.search]);

  return null;
};