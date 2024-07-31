import { createContext } from "react";
import { Author, Post, Category } from "../Types/types";

interface StoreContextProps {
  isLoading: boolean;
  authors: Author[];
  posts: Post[];
  filteredPosts: Post[];
  categories: Category[];
  setPosts: (posts: Post[]) => void;
  setFilteredPosts: (posts: Post[]) => void;
}

const StoreContext = createContext<StoreContextProps>({
  isLoading: true,
  authors: [],
  posts: [],
  filteredPosts: [],
  categories: [],
  setFilteredPosts: () => {},
  setPosts: () => {},
});

export default StoreContext;
