import { createContext } from "react";
import { Author, Post, Category } from "../Types/types";

interface StoreContextProps {
  isLoading: boolean;
  authors: Author[];
  posts: Post[];
  categories: Category[];
}

const StoreContext = createContext<StoreContextProps>({
  isLoading: true,
  authors: [],
  posts: [],
  categories: [],
});

export default StoreContext;
