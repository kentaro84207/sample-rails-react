import React, { useReducer } from "react";
// import usePosts from "hooks/use-posts";
import { PostsContext } from "contexts";
import { Post } from "services/models/post";

// reducer関連は別ファイルにわける
interface PostAction {
  type: ActionType;
  payload: Post;
}

enum ActionType {
  CREATE_POST = "CREATE_POST",
  REMOVE_POST = "REMOVE_POST",
}

const reducer: React.Reducer<Post[], PostAction> = (posts, action) => {
  switch (action.type) {
    case ActionType.CREATE_POST:
      const post = { title: action.payload.title };
      const length = posts.length;
      const id = length === 0 ? 1 : posts[length - 1].id + 1;
      return [...posts, { id, ...post }];
    case ActionType.REMOVE_POST:
      return {
        ...posts,
        title: action.payload.title,
      };
    default:
      throw new Error();
  }
};

const AppContext: React.FC = ({ children }) => {
  // const { posts, loading } = usePosts();
  const loading = false;
  const initialState: Post[] = [];
  const [posts, dispatch] = useReducer(reducer, initialState);

  return <PostsContext.Provider value={{ posts, loading, dispatch }}>
    {children}
  </PostsContext.Provider>;
};

export default AppContext;
