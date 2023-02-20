import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

/** Component wrapper so that Navigation and Footer
 * are visible at all times, regardless of route
 */
export default function Layout({ children }) {
  return (
    <section>
      <Navigation />
      {children}
      <Footer />
    </section>
  );
}
