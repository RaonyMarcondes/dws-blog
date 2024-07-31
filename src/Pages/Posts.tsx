import React from "react";
import PostsList from "../Components/PostsList/PostsList";
import AppBar from "../Components/AppBar/AppBar";
import NavBar from "../Components/NavBar/NavBar";
import FiltersBar from "../Components/FiltersBar/FiltersBar";
import Loader from "../Components/Loader/Loader";
import styled from "styled-components";
import StoreContext from "../Context/StoreContext";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px 64px 16px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Posts: React.FC = () => {
  const { isLoading, posts, authors, categories } =
    React.useContext(StoreContext);

  return (
    <Main>
      <AppBar />
      <NavBar />
      <Content>
        <ContentWrapper>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <FiltersBar categories={categories} authors={authors} />
              <PostsList posts={posts} />
            </>
          )}
        </ContentWrapper>
      </Content>
    </Main>
  );
};

export default Posts;
