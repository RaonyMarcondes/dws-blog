import React from "react";
import PostsList from "../Components/PostsList/PostsList";
import AppBar from "../Components/AppBar/AppBar";
import NavBar from "../Components/NavBar/NavBar";
import FiltersBar from "../Components/FiltersBar/FiltersBar";

const Posts: React.FC = () => {
  return (
    <>
      <AppBar />
      <NavBar />
      <div className="container">
        <FiltersBar />
      </div>
      <PostsList />
    </>
  );
};

export default Posts;
