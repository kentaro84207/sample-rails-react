import React from "react";
import usePosts from "hooks/use-posts";
import { PostsContext } from "contexts";

const AppContext: React.FC = ({ children }) => {
  const { posts, loading } = usePosts();

  return <PostsContext.Provider value={{ posts, loading }}>
    {children}
  </PostsContext.Provider>;
};

export default AppContext;
