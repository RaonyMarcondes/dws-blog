import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppBar from "../Components/AppBar/AppBar";
import PostDetails from "../Components/PostDetails/PostDetails";
import Loader from "../Components/Loader/Loader";
import { httpClient } from "../Helpers/httpClient";
import styled from "styled-components";

import { Post } from "../Types/types";

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;

  .loader-box {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .loader {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await httpClient.get(`/posts/${id}`);
      setPost(response.data);
      setIsLoading(false);
    };
    fetchPost();
  }, [id]);

  return (
    <>
      <AppBar />
      <Content>
        {isLoading && (
          <div className="loader">
            <div className="loader-box">
              <Loader />
            </div>
          </div>
        )}
        {post && !isLoading && <PostDetails post={post} />}
      </Content>
    </>
  );
};

export default Details;
