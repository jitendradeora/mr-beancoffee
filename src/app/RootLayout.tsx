import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router";

export function RootLayout() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (window.history.scrollRestoration !== "manual") {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
}
