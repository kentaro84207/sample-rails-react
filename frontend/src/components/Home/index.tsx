import React, { useContext } from "react";
import { PostsContext } from "contexts";
import PostForm from "components/PostForm";
import PostCard from "components/PostCard";

const Home: React.FC = () => {
  const { posts, loading } = useContext(PostsContext);

  if (loading) return <div>LOADING</div>;

  return (
    <div>
      <PostForm />
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Home;
