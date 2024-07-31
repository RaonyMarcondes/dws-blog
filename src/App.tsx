import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { httpClient } from "./Helpers/httpClient";
import { Post, Author, Category } from "./Types/types";
import StoreContext from "./Context/StoreContext";

import Posts from "./Pages/Posts";
import Details from "./Pages/Details";

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const endpoints = ["/posts", "/authors", "/categories"];
    const fetchData = async () => {
      try {
        const [postsResponse, authorsResponse, categoriesResponse] =
          await Promise.all(
            endpoints.map((endpoint) => httpClient.get(endpoint))
          );
        setPosts(postsResponse.data);
        setAuthors(authorsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (err) {
        console.log("Failed to fetch data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <StoreContext.Provider
      value={{ isLoading, authors, posts, categories, setPosts }}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Details />} />
      </Routes>
    </StoreContext.Provider>
  );
};

export default App;
