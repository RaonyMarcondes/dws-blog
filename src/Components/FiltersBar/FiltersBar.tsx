import React, { useState } from "react";
import { Sidebar } from "../FiltersBar/FiltersBar.styles";
import Icon from "@mdi/react";
import { mdiTune } from "@mdi/js";

import { Category, Author } from "../../Types/types";

interface FiltersBarProps {
  categories: Category[];
  authors: Author[];
}

const FiltersBar: React.FC<FiltersBarProps> = ({ categories, authors }) => {
  const [activeCategories, setActiveCategories] = useState<Category[]>([]);
  const [activeAuthors, setActiveAuthors] = useState<Author[]>([]);

  const toggleCategory = (category: Category) => {
    if (activeCategories.includes(category)) {
      setActiveCategories(
        activeCategories.filter((activeCategory) => activeCategory !== category)
      );
      return;
    }
    setActiveCategories([...activeCategories, category]);
  };

  const toggleAuthor = (author: Author) => {
    if (activeAuthors.includes(author)) {
      setActiveAuthors(
        activeAuthors.filter((activeAuthor) => activeAuthor !== author)
      );
      return;
    }
    setActiveAuthors([...activeAuthors, author]);
  };

  return (
    <Sidebar>
      <div className="title">
        <Icon className="icon" path={mdiTune} size={1} />
        <h3>Filters</h3>
      </div>

      <div className="categories">
        <h4>Category</h4>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => toggleCategory(category)}
              className={activeCategories.includes(category) ? "active" : ""}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="authors">
        <h4>Authors</h4>
        <ul>
          {authors.map((author) => (
            <li
              key={author.id}
              onClick={() => toggleAuthor(author)}
              className={activeAuthors.includes(author) ? "active" : ""}
            >
              {author.name}
            </li>
          ))}
        </ul>
      </div>

      <button>Apply Filters</button>
    </Sidebar>
  );
};

export default FiltersBar;
