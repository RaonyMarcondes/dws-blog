import React from "react";
import PostsList from "../Components/PostsList/PostsList";
import AppBar from "../Components/AppBar/AppBar";
import NavBar from "../Components/NavBar/NavBar";
import FiltersBar from "../Components/FiltersBar/FiltersBar";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px 64px 16px;
`;

const Posts: React.FC = () => {
  return (
    <>
      <AppBar />
      <NavBar />
      <Content>
        <FiltersBar />
        <PostsList />
      </Content>
    </>
  );
};

export default Posts;
