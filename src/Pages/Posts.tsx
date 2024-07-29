import React from "react";
import PostsList from "../Components/PostsList/PostsList";
import AppBar from "../Components/AppBar/AppBar";
import NavBar from "../Components/NavBar/NavBar";
import FiltersBar from "../Components/FiltersBar/FiltersBar";
import styled from "styled-components";

export const Content = styled.div`
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

const categories = [
  {
    id: "a3979472-2f20-11ef-a347-325096b39f47",
    name: "Technology",
    createdAt: "2024-07-25T16:19:30.376Z",
    updatedAt: "2024-07-25T16:19:30.550Z",
    postId: "cc8a8c63-2f82-4745-8b6e-28f88ff73fdd",
  },
  {
    id: "a394572-2f20-11ef-a347-325096b39f47",
    name: "Artificial Intelligence",
    createdAt: "2024-07-25T16:19:30.376Z",
    updatedAt: "2024-07-25T16:19:30.550Z",
    postId: "cc8a8c63-2f82-4745-8b6e-28f88ff73fdd",
  },
];

const authors = [
  {
    id: "c6fddf84-2f20-11ef-8f88-325096b39f47",
    name: "Emily Davis",
    profilePicture:
      "https://dws-tech-test-assets.s3.amazonaws.com/images/avataaars-3.png",
    createdAt: "2024-07-25T16:19:30.408Z",
    updatedAt: "2024-07-25T16:19:30.408Z",
  },
  {
    id: "c6freg84-2f20-11ef-8f88-325096b39f47",
    name: "Davis Emily",
    profilePicture:
      "https://dws-tech-test-assets.s3.amazonaws.com/images/avataaars-3.png",
    createdAt: "2024-07-25T16:19:30.408Z",
    updatedAt: "2024-07-25T16:19:30.408Z",
  },
];

const Posts: React.FC = () => {
  return (
    <>
      <AppBar />
      <NavBar />
      <Content>
        <ContentWrapper>
          <FiltersBar categories={categories} authors={authors} />
          <PostsList />
        </ContentWrapper>
      </Content>
    </>
  );
};

export default Posts;
