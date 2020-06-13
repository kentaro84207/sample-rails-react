import React, { useState, useReducer, useEffect } from "react";
import { PostsContext } from "contexts";
import { Post } from "services/models/post";
import postReducer from "reducer/post";
import axios from "axios";

const url = "http://localhost:3000/api/v1/posts";

const load = async () => {
  try {
    const res = await axios.get(url);
    const items: Post[] = res.data.data;
    return items;
  } catch (error) {
    throw new Error(error);
  }
};

const AppContext: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const initialState: Post[] = [];
  const [posts, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    setLoading(true)
    load().then((items) => {
      dispatch({
        type: "LOAD_POST",
        payload: items,
      });
      setLoading(false);
    });
  }, []);

  return <PostsContext.Provider value={{ posts, loading, dispatch }}>
    {children}
  </PostsContext.Provider>;
};

export default AppContext;
