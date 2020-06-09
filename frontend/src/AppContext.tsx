import React, { useReducer } from "react";
// import usePosts from "hooks/use-posts";
import { PostsContext } from "contexts";
import { Post } from "services/models/post";
import postReducer from "reducer/post";

const AppContext: React.FC = ({ children }) => {
  // const { posts, loading } = usePosts();
  const loading = false;
  const initialState: Post[] = [];
  const [posts, dispatch] = useReducer(postReducer, initialState);

  return <PostsContext.Provider value={{ posts, loading, dispatch }}>
    {children}
  </PostsContext.Provider>;
};

export default AppContext;
