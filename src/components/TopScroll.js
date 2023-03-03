import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/** This automatically scrolls the page to the top when
 * navigating to a different page, but keeps the previous
 * page position when navigating back.
 */
export default function TopScroll() {
  const { pathname } = useLocation();
  const { action } = useNavigate();

  useEffect(() => {
    if (action === "POP") return;
    window.scrollTo(0, 0);
  }, [pathname, action]);

  return null;
}
