import React, { useState } from "react";
import { NavBar as NavBarStyled } from "../NavBar/NavBar.styles";
import Icon from "@mdi/react";
import { mdiSwapVertical } from "@mdi/js";
import StoreContext from "../../Context/StoreContext";
import { parseISO, compareAsc, compareDesc } from "date-fns";

enum SORT_BY {
  OLDEST_FIRST = "Oldest First",
  NEWEST_FIRST = "Newest First",
}

const NavBar: React.FC = () => {
  const [sortBy, setSortBy] = useState(SORT_BY.NEWEST_FIRST);
  const [sortLabel, setSortLabel] = useState(SORT_BY.NEWEST_FIRST);
  const { posts, setPosts } = React.useContext(StoreContext);

  const handleSortHover = () => {
    if (sortLabel === SORT_BY.NEWEST_FIRST) {
      return setSortLabel(SORT_BY.OLDEST_FIRST);
    }
    setSortLabel(SORT_BY.NEWEST_FIRST);
  };

  const sortPosts = () => {
    return posts.sort((a, b) => {
      const dateA = parseISO(a.createdAt);
      const dateB = parseISO(b.createdAt);

      if (sortBy === SORT_BY.OLDEST_FIRST) {
        return compareAsc(dateA, dateB);
      } else if (sortBy === SORT_BY.NEWEST_FIRST) {
        return compareDesc(dateA, dateB);
      } else {
        return 0;
      }
    });
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
              setPosts(sortPosts());
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
