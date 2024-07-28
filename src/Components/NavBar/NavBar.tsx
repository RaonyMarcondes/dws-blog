import React, { useState } from "react";
import { NavBar as NavBarStyled } from "../NavBar/NavBar.styles";
import Icon from "@mdi/react";
import { mdiSwapVertical } from "@mdi/js";

const NavBar: React.FC = () => {
  const [sortBy, setSortBy] = useState("Newest First");
  const [sortLabel, setSortLabel] = useState("Newest First");

  const handleSortHover = () => {
    if (sortLabel === "Newest First") {
      return setSortLabel("Oldest First");
    }
    setSortLabel("Newest First");
  };

  return (
    <NavBarStyled>
      <div className="container">
        <h1>DWS Blog</h1>

        <div className="sort-by">
          <h5>Sort by:</h5>
          <button
            onMouseEnter={() =>
              sortLabel === sortBy ? handleSortHover() : null
            }
            onMouseLeave={() =>
              sortBy !== sortLabel ? handleSortHover() : null
            }
            onClick={() => {
              setSortBy(sortLabel);
            }}
          >
            {sortLabel}
            <Icon className="icon" path={mdiSwapVertical} size={1} />
          </button>
        </div>
      </div>
    </NavBarStyled>
  );
};

export default NavBar;
