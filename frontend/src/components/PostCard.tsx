import React from "react";
import { Post } from "services/models/post";

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const { id, title } = post;

  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
    </div>
  );
};

export default PostCard;
