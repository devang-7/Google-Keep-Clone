import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header>

      {/* Re-routes to the homepage if you click header */}
      <a href="/" style={{ textDecoration: 'none' }}>
        <h1 >

          {/* App Logo */}
          <HighlightIcon />
          Keeper
        </h1>
      </a>
    </header >
  );
}

export default Header;
