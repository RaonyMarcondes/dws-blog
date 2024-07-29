import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Card, CategoryPill } from "./PostCart.styles";

import { Post, Category } from "../../Types/types";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card>
      <Link to={`/post/${post.id}`}>
        {post?.thumbnail_url && (
          <img src={post.thumbnail_url} alt="post cover" title={post?.title} />
        )}
        <div className="content">
          <div className="date-author">
            <div>{format(new Date(post?.createdAt), "MMM dd, yyyy")}</div>
            <span />
            <div>{post?.author?.name}</div>
          </div>
          <h1>{post?.title}</h1>
          <div className="description">{post?.content}</div>
          <div className="categories">
            {post?.categories?.map((category: Category, index: number) => (
              <CategoryPill key={index}>{category?.name}</CategoryPill>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default PostCard;
