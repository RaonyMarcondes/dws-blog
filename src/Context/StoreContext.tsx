import { createContext } from "react";
import { Author, Post, Category } from "../Types/types";

interface StoreContextProps {
  isLoading: boolean;
  authors: Author[];
  posts: Post[];
  categories: Category[];
  setPosts: (posts: Post[]) => void;
}

const StoreContext = createContext<StoreContextProps>({
  isLoading: true,
  authors: [],
  posts: [],
  categories: [],
  setPosts: () => {},
});

export default StoreContext;
