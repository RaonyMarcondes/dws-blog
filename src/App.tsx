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

  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const endpoints = ["/posts", "/authors", "/categories"];
    const fetchData = async () => {
      try {
        const [postsResponse, authorsResponse, categoriesResponse] =
          await Promise.all(
            endpoints.map((endpoint) => httpClient.get(endpoint))
          );
        setPosts(postsResponse.data);
        setFilteredPosts(postsResponse.data);
        setAuthors(authorsResponse.data);
        setCategories(categoriesResponse.data);
        // eslint-disable-next-line
      } catch (err: any) {
        console.log("Failed to fetch data");
        console.error(err);
        if (err?.response?.status === 429) {
          alert("ERROR 429: Too many requests. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        isLoading,
        authors,
        posts,
        filteredPosts,
        categories,
        setPosts,
        setFilteredPosts,
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Details />} />
      </Routes>
    </StoreContext.Provider>
  );
};

export default App;
