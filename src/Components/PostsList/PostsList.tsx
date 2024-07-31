import React from "react";
import { Grid } from "./PostsList.styles";
import PostCard from "../PostCard/PostCard";
import { Post } from "../../Types/types";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <Grid>
    {posts?.map((post: Post, index: number) => (
      <PostCard key={index} post={post} />
    ))}
  </Grid>
);

export default PostList;
