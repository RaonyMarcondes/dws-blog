import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../PostCard/PostCard";
import { Details } from "./PostDetails.styles";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import { format } from "date-fns";
import StoreContext from "../../Context/StoreContext";

import { Post } from "../../Types/types";

interface PostDetailsProps {
  post: Post;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  const { posts } = React.useContext(StoreContext);

  const recentPosts = posts.slice(0, 3);

  return (
    <Details>
      <div>
        <Link className="back-btn" to="/" title="Go Back">
          <Icon className="icon" path={mdiArrowLeft} size={1} />
          Back
        </Link>
      </div>

      <div className="wrapper">
        <h1>{post?.title}</h1>

        <div className="date-author">
          <img
            className="avatar"
            src={post?.author?.profilePicture}
            alt="Author Avatar"
          />
          <div className="wrapper">
            <div className="author">
              Written by <span>{post?.author?.name}</span>
            </div>
            <div className="date">
              {format(new Date(post?.createdAt), "MMM dd, yyyy")}
            </div>
          </div>
        </div>

        <img className="cover" src={post?.thumbnail_url} alt="Post Cover" />

        <p className="content">{post?.content}</p>
      </div>
      <aside>
        <h2>Latest articles </h2>
        <div className="latest">
          {recentPosts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </aside>
    </Details>
  );
};

export default PostDetails;
